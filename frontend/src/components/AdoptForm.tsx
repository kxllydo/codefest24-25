import { Button, Card, Select } from "@radix-ui/themes";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { AdoptSchemaType, adoptSchema } from "@/schemas/adoptSchema";
import { SelectInput } from "./SelectInput";

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

    console.log("Errors:", errors);

    return (
        <FormProvider {...methods}>
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SelectInput
                        name="gender"
                        label="Select Gender"
                        showName="Gender"
                        errors={errors}
                        options={genderOptions}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </FormProvider>
    );
};

export default AdoptForm;
