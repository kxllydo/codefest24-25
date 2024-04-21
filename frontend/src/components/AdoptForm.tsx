import { Avatar, Button, Card, Progress, Select, Spinner } from "@radix-ui/themes";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { AdoptSchemaType, adoptSchema } from "@/schemas/adoptSchema";
import { SelectInput } from "./SelectInput";
import { Input } from "./Input";
import { useState } from "react";
import { AdopteeResponseData } from "@/types";
import { adoptionFacts, ethnicityOptions, genderOptions, wait } from "@/lib/utils";
import duckflying from "../../public/duckflyinggif.gif";
import Image from "next/image";
import { motion } from "framer-motion";

const adoptionFactIndex = Math.floor(Math.random() * adoptionFacts.length);

const testSchema = z.object({
    test: z.string(),
});

const AdoptForm = () => {
    const [clickSubmit, setClickSubmit] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const methods = useForm<AdoptSchemaType>({
        resolver: zodResolver(adoptSchema),
    });
    const {
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit: SubmitHandler<AdoptSchemaType> = async (data) => {
        setClickSubmit(true);
        console.log(data);
        console.log('hi')
        await wait(1000);
        setSubmitting(true);
        console.log(submitting)
        const match = await findMatch(data);
        // TODO: When done testing, uncomment the line below
        // setSubmitted(true);
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
            console.log(json);
            if (json.adoptee_info) {
                console.log("Match found!");
                console.log(json.adoptee_info);
            }
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    // TODO: Remove this once done testing
    console.log("Errors:", errors);

    return (
        <>
            {submitted && (
                <motion.div>
                    <Card>
                        <Avatar
                            fallback="A"
                            radius="full"
                            color="purple"
                        />
                    </Card>
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
                        <Card className="w-96"
                            size={{
                                initial: "4"
                            }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-row gap-3">
                                    <div>
                                        <span className="text-lg">Your Info</span>
                                        <SelectInput
                                            name="gender"
                                            label="Select Gender"
                                            showName="Gender"
                                            errors={errors}
                                            options={genderOptions}
                                        />
                                        <Input
                                            name="age"
                                            label="Age"
                                            showName="Age"
                                            type="number"
                                            errors={errors}
                                        />
                                        <SelectInput
                                            name="ethnicity"
                                            label="Ethnicity"
                                            showName="Ethinity"
                                            errors={errors}
                                            options={ethnicityOptions}
                                        />
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
                                        <Input
                                            name="marital_status"
                                            label="Marital Status"
                                            showName=""
                                            type="checkbox"
                                            errors={errors}
                                        />
                                        <Input
                                            name="employed"
                                            label="Employment Status"
                                            showName="11111"
                                            type="checkbox"
                                            errors={errors}
                                        />
                                    </div>
                                    <div>
                                        <span className="text-lg">Kid Info</span>
                                        <Input
                                            name="disabled"
                                            label="Disabled"
                                            showName=""
                                            type="checkbox"
                                            errors={errors}
                                        />
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    variant="solid"
                                    className="!mt-4"
                                    size={{
                                        initial: "3",
                                    }}
                                >
                                    {clickSubmit ?
                                        <Spinner />
                                        :
                                        <span>Submit</span>}
                                </Button>
                            </form>
                        </Card>
                    </FormProvider>

            )}
        </>
    );
};

export default AdoptForm;
