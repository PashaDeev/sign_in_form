import {InputHTMLAttributes} from 'react';

import styles from './index.module.css';

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
    className,
    ...rest
}: FormInputProps) => {
    return (
        <section className={className}>
            <label>
                <span className={styles.title}>{title}</span>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
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
                            className={styles.passwordVisibilityButton}
                            type="button"
                            aria-label="Show password as plain text.
                    Warning: this will display your password on the screen."
                        />
                    )}
                </div>
            </label>
        </section>
    );
};
