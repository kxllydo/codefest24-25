import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputErrorMessage } from "./InputErrorMessage";
import { InputProps } from "@/types";

export const Input: FC<InputProps> = ({
    label,
    type,
    name,
    placeholder,
    errors,
}) => {
    const { register } = useFormContext();

    return (
        <div>
            <div className="flex flex-col w-min items-start">
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
