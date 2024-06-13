import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputErrorMessage } from "./InputErrorMessage";
import { InputProps } from "@/types";
import { cn } from "@/lib/utils";

export const Input: FC<InputProps> = ({
    label,
    type,
    name,
    placeholder,
    errors,
    className
}) => {
    const { register } = useFormContext();

    return (
        <div>
            <div className={cn("flex flex-col w-min items-start", className)}>
                <label htmlFor={name} className="form__label w-max">
                    {label}
                </label>
                <input
                    type={type}
                    {...register(name)}
                    placeholder={placeholder}
                    className={`form__input rounded-lg border-2 border-solid border-purple-200 ${Object.prototype.hasOwnProperty.call(errors, name) &&
                        "border-red-500"
                        } `}
                />
            </div>
            <InputErrorMessage name={name} errors={errors} />
        </div>
    );
};
