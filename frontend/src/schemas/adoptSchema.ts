import z from "zod";

export const adoptSchema = z.object({
    gender: z.string(),
    age: z.coerce.number().gte(18, 'Must be 18 or above'),
    ethnicity: z.string(),
    location: z.coerce.number().gte(9999, 'Invalid zip code'),
    marital_status: z.boolean(),
    income: z.coerce.number().gte(0, 'Invalid income'),
    employed: z.boolean(),
    disabled: z.boolean()
});

export type AdoptSchemaType = z.infer<typeof adoptSchema>;
