import { Button, Select } from "@radix-ui/themes"
import { FormEvent, FormEventHandler } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { adoptSchema } from "@/schemas/adoptSchema";

const AdoptForm = () => {
    const router = useRouter();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, isDirty, isValid },
    } = useForm<FormData>({
        resolver: zodResolver(adoptSchema),
    });

    async function onSubmit(data: FormData) {
        console.log(isSubmitting);
        console.log(data);
        // Replace this with a server action or fetch an API endpoint to authenticate
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000); // 2 seconds in milliseconds
        });
        router.push("/tweets");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Select.Root>
                <Select.Trigger />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Fruits</Select.Label>
                        <Select.Item value="orange">Orange</Select.Item>
                        <Select.Item value="apple">Apple</Select.Item>
                        <Select.Item value="grape" disabled>
                            Grape
                        </Select.Item>
                    </Select.Group>
                    <Select.Separator />
                    <Select.Group>
                        <Select.Label>Vegetables</Select.Label>
                        <Select.Item value="carrot">Carrot</Select.Item>
                        <Select.Item value="potato">Potato</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default AdoptForm;
