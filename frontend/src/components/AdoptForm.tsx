import { Button, Card, Select } from "@radix-ui/themes";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { AdoptSchemaType, adoptSchema } from "@/schemas/adoptSchema";
import { SelectInput } from "./SelectInput";
import { Input } from "./Input";

const testSchema = z.object({
    test: z.string()
});

const AdoptForm = () => {
    const methods = useForm<AdoptSchemaType>({
        resolver: zodResolver(adoptSchema),
    });
    const {
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit: SubmitHandler<AdoptSchemaType> = (data) => {
        console.log(data);
    };

    const genderOptions = [
        {
            value: "male",
            label: "Male",
        },
        {
            value: "female",
            label: "Female",
        },
    ];

    const ethnicityOptions = [
        {
            value: "african_american",
            label: "African American",
        },
        {
            value: "arab",
            label: "Arab",
        },
        {
            value: "asian",
            label: "Asian",
        },
        {
            value: "caribbean",
            label: "Caribbean",
        },
        {
            value: "caucasian",
            label: "Caucasian",
        },
        {
            value: "european",
            label: "European",
        },
        {
            value: "hispanic_latino",
            label: "Hispanic/Latino",
        },
        {
            value: "indigenous",
            label: "Indigenous",
        },
        {
            value: "middle_eastern",
            label: "Middle Eastern",
        },
        {
            value: "native_american",
            label: "Native American",
        },
        {
            value: "pacific_islander",
            label: "Pacific Islander",
        }
    ];

    console.log("Errors:", errors);

    return (
        <FormProvider {...methods}>
            <Card className="w-96">
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
                            initial: "3"
                        }}>Submit</Button>
                </form>
            </Card>
        </FormProvider>
    );
};

export default AdoptForm;
