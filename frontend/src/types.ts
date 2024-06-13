import { AdoptSchemaType } from "./schemas/adoptSchema";
import { FieldErrors } from "react-hook-form";

type AdoptFieldName =
    | "gender"
    | "age"
    | "ethnicity"
    | "location"
    | "marital_status"
    | "income"
    | "employed"
    | "disabled";

export interface InputErrorProps {
    name: AdoptFieldName;
    errors: FieldErrors<AdoptSchemaType>;
}

export interface InputProps extends InputErrorProps {
    label: string;
    type?: "text" | "email" | "time" | "number" | "checkbox";
    placeholder?: string;
    showName: string;
    className?: string;
}

export interface SelectProps extends InputProps {
    options: {
        value: string;
        label: string;
    }[];
}

export interface ReactSelectProps extends SelectProps {
    isMulti: boolean;
}
export interface AdopteeInfo {
    Age: number;
    Disability: number;
    Ethnicity: string;
    Gender: number;
    Latitude: number;
    Location: number;
    Longitude: number;
    NumberofSiblings: number;
}

export interface AdopteeResponseData {
    adoptee_info?: AdopteeInfo;
    message?: string;
    status_code: number;
}
