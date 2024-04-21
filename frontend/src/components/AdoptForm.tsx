import { Avatar, Badge, Button, Card, DataList, Flex, Progress, Select, Separator, Spinner, Text } from "@radix-ui/themes";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { AdoptSchemaType, adoptSchema } from "@/schemas/adoptSchema";
import { SelectInput } from "./SelectInput";
import { Input } from "./Input";
import { useState } from "react";
import { AdopteeResponseData } from "@/types";
import { adoptionFacts, ethnicityOptions, genderOptions, getImage, wait } from "@/lib/utils";
import duckflying from "../../public/duckflyinggif.gif";
import Image from "next/image";
import { motion } from "framer-motion";
import { Frown } from "lucide-react";

const adoptionFactIndex = Math.floor(Math.random() * adoptionFacts.length);

const testSchema = z.object({
    test: z.string(),
});

const AdoptForm = () => {
    const [clickSubmit, setClickSubmit] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState<AdopteeResponseData | null>(null);

    const methods = useForm<AdoptSchemaType>({
        resolver: zodResolver(adoptSchema),
    });
    const {
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit: SubmitHandler<AdoptSchemaType> = async (data) => {
        setClickSubmit(true);
        await wait(1000);
        setSubmitting(true);
        const match = await findMatch(data);
        await wait(5000);
        // TODO: When done testing, uncomment the line below
        setSubmitted(true);
    }

    const findMatch = async (data: AdoptSchemaType) => {
        try {
            const res = await fetch(`http://127.0.0.1:3001/match`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    age: data.age,
                    gender: data.gender === "Female" ? 0 : 1,
                    ethnicity: data.ethnicity,
                    location: data.location,
                    marital_status: data.marital_status ? 1 : 0,
                    income: data.income,
                    employed: data.employed ? 1 : 0,
                    disabled: data.disabled ? 1 : 0,
                }),
            });
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const json = await res.json() as AdopteeResponseData;
            setResult(json);
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    return (
        <>
            {submitted && (
                <motion.div>
                    {result?.adoptee_info ?
                        <>
                            <Card
                                size={{
                                    lg: "5",
                                    initial: "3"
                                }}>
                                <Text className="text-2xl flex justify-center mb-4">Your match</Text>

                                <div className="flex justify-center">
                                    <Avatar
                                        fallback="A"
                                        radius="large"
                                        color="purple"
                                        src={getImage(result.adoptee_info.Ethnicity, result.adoptee_info.Gender === 0 ? "female" : "male")?.src}
                                        size={{
                                            initial: "7"
                                        }}
                                    />
                                </div>
                                <div className="m-4 items-center flex flex-col">
                                    <Badge color="jade" variant="soft" radius="full">
                                        <span className="text-lg">Verified</span>
                                    </Badge>
                                    <DataList.Root className="!text-lg mt-4">
                                        <DataList.Item align="center">
                                            <DataList.Label minWidth="88px">Age</DataList.Label>
                                            <DataList.Value>{result.adoptee_info.Age}</DataList.Value>
                                        </DataList.Item>
                                        <DataList.Item>
                                            <DataList.Label minWidth="88px">Ethnicity</DataList.Label>
                                            <DataList.Value>{ethnicityOptions.find(e => result.adoptee_info?.Ethnicity === e.value)?.label}</DataList.Value>
                                        </DataList.Item>
                                        <DataList.Item>
                                            <DataList.Label minWidth="88px">Gender</DataList.Label>
                                            <DataList.Value>{result.adoptee_info.Gender === 0 ? "Female" : "Male"}</DataList.Value>
                                        </DataList.Item>
                                        <DataList.Item>
                                            <DataList.Label minWidth="88px">Has Siblings</DataList.Label>
                                            <DataList.Value>{result.adoptee_info.NumberofSiblings === 0 ? "No" : "Yes"}</DataList.Value>
                                        </DataList.Item>
                                        <DataList.Item>
                                            <DataList.Label minWidth="88px">Has a Disability</DataList.Label>
                                            <DataList.Value>{result.adoptee_info.Disability === 0 ? "No" : "Yes"}</DataList.Value>
                                        </DataList.Item>
                                    </DataList.Root>
                                </div>
                            </Card>
                        </>
                        :
                        <>
                            <Card className="flex flex-col max-w-96"
                                size={{
                                    initial: "3"
                                }}>
                                <Text className="text-4xl flex flex-row items-center justify-center"><Frown className="mr-2" />No match found</Text>
                                <Separator className="m-4 !w-[-webkit-fill-available]" />
                                <span className="text-lg text-center flex items-center">There was no match found for you at the time. Please try again later.</span>
                                <Separator className="m-4 !w-[-webkit-fill-available] !opacity-0" />
                                <span className="text-sm text-center">We only match you with kids that most perfectly fit your description,
                                    which is why you are much more likely to adopt
                                    through <Text color="blue">Adopteam</Text> than any resource.
                                </span>
                            </Card>
                        </>}
                </motion.div>
            )}
            {!submitted && (
                submitting ?
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            duration: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="flex flex-col items-center max-w-96">
                        <span className="text-4xl">Finding the one for you</span>
                        <Progress
                            size={{
                                md: "3",
                                initial: "2"
                            }}
                            duration="5s"
                            variant="classic"
                            className="w-[-webkit-fill-available] m-6" />
                        <span className="italic text-gray-600 text-center">{adoptionFacts[adoptionFactIndex].fact}</span>
                    </motion.div>
                    :
                    <FormProvider {...methods}>
                        <Card className=""
                            size={{
                                initial: "4"
                            }}>
                            <span className="text-2xl">Your info</span>
                            <Separator className="m-4 !w-[-webkit-fill-available]" />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-row gap-3">
                                    <div>
                                        <SelectInput
                                            name="gender"
                                            label="Select Gender"
                                            showName="Gender"
                                            errors={errors}
                                            options={genderOptions}
                                        />
                                        <SelectInput
                                            name="ethnicity"
                                            label="Ethnicity"
                                            showName="Ethnicity"
                                            errors={errors}
                                            options={ethnicityOptions}
                                        />
                                        <Input
                                            name="age"
                                            label="Age"
                                            showName="Age"
                                            type="number"
                                            errors={errors}
                                        />


                                    </div>
                                    <div>
                                        <Input
                                            name="location"
                                            label="Postal Code"
                                            showName="11111"
                                            type="text"
                                            errors={errors}
                                        />
                                        <Input
                                            name="income"
                                            label="Income"
                                            showName="11111"
                                            type="text"
                                            errors={errors}
                                        />
                                    </div>
                                </div>
                                <Separator className="m-4 !w-[-webkit-fill-available]" />
                                <div className="flex gap-3 flex-col">
                                    <Input
                                        name="marital_status"
                                        label="Marital Status"
                                        showName=""
                                        type="checkbox"
                                        className="flex flex-row gap-3 items-center"
                                        errors={errors}
                                    />
                                    <Input
                                        name="employed"
                                        label="Employment Status"
                                        showName="11111"
                                        type="checkbox"
                                        className="flex flex-row gap-3 items-center"

                                        errors={errors}
                                    />
                                    <Input
                                        name="disabled"
                                        label="Disabled"
                                        showName=""
                                        type="checkbox"
                                        className="flex flex-row gap-3 items-center"

                                        errors={errors}
                                    />
                                </div>
                                <div className="flex items-center mt-4">
                                    <Button
                                        type="submit"
                                        variant="solid"
                                        size={{
                                            initial: "3",
                                        }}
                                    >
                                        {clickSubmit ?
                                            <Spinner />
                                            :
                                            <span>Submit</span>}
                                    </Button>
                                    <Badge className="ml-2" color="jade" variant="soft" radius="full">
                                        <span className="text-sm">Secure</span>
                                    </Badge>
                                </div>
                            </form>
                        </Card>
                    </FormProvider>
            )}
        </>
    );
};

export default AdoptForm;
