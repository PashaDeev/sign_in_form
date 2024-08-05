import {InputHTMLAttributes} from 'react';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    title: string;
    ariaErrorMessage: string;
    isError: boolean;
};
export const FormInput = ({
    title,
    name,
    id,
    required,
    autoFocus,
    placeholder,
    type = 'text',
    ariaErrorMessage,
    isError,
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
                    aria-invalid={isError}
                    aria-errormessage={ariaErrorMessage}
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
