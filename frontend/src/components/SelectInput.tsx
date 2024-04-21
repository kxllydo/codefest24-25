import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { SelectProps } from "@/types";
import { InputErrorMessage } from "./InputErrorMessage";

// Default Select Input Example
export const SelectInput: FC<SelectProps> = ({
    name,
    errors,
    label,
    showName,
    options,
}) => {
    const { register } = useFormContext();
    return (
        <div>
            <div className="flex flex-col">
                <label htmlFor={name} className="form__label">
                    {label}
                </label>
                <select
                    {...register(name)}
                    className={`form__input w-min rounded-lg border-2 border-solid border-purple-200 ${Object.prototype.hasOwnProperty.call(errors, name) &&
                        "border-red-500"
                        } `}
                >
                    {options.map((item, index) => (
                        <option value={item.value} key={index}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>
            <InputErrorMessage name={name} errors={errors} />
        </div>
    );
};
