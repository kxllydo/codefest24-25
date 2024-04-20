import z from "zod";

export const adoptSchema = z.object({
    age: z.number()
});

export type User = z.infer<typeof adoptSchema>;
