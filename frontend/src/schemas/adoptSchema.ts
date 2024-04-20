import z from "zod";

export const adoptSchema = z.object({
    gender: z.string()
});

export type AdoptSchemaType = z.infer<typeof adoptSchema>;

