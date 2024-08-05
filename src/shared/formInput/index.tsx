import {InputHTMLAttributes} from 'react';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {title: string};
export const FormInput = ({
    title,
    name,
    id,
    required,
    autoFocus,
    placeholder,
    type = 'text',
    ...rest
}: FormInputProps) => {
    return (
        <section>
            <label>
                {title}
                <input
                    type={type}
                    name={name}
                    id={id}
                    required={required}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    {...rest}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        aria-label="Show password as plain text.
                    Warning: this will display your password on the screen."
                    >
                        Show password
                    </button>
                )}
            </label>
        </section>
    );
};
