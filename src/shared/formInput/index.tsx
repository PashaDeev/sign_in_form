'use client';

import {useFormStatus} from 'react-dom';
import clsx from 'clsx';

import {usePasswordVisibility} from './hooks/usePasswordVisibility';
import {INPUT_TYPE, VISIBILIT_BUTTON_ARIA_LABEL} from './constants';
import {FormInputProps} from './types';
import styles from './index.module.css';

export const FormInput = ({
    title,
    name,
    id,
    required,
    autoFocus,
    placeholder,
    type = 'text',
    ariaErrorMessage,
    className,
    disabled,
    errorMessage,
    'aria-describedby': ariaDescribedBy,
    ...rest
}: FormInputProps) => {
    const [currentInputType, handleVisibilityClick] = usePasswordVisibility(type);
    const {pending} = useFormStatus();

    return (
        <label className={clsx(styles.label, className)}>
            <span className={styles.title}>{title}</span>
            <div className={styles.inputContainer}>
                <input
                    className={clsx(styles.input, {
                        [styles['input_invalid']]: Boolean(errorMessage),
                    })}
                    type={currentInputType}
                    name={name}
                    id={id}
                    required={required}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    aria-invalid={Boolean(errorMessage)}
                    aria-errormessage={ariaErrorMessage}
                    disabled={pending || disabled}
                    aria-describedby={ariaDescribedBy}
                    {...rest}
                />
                {type === 'password' && (
                    <button
                        className={clsx(styles.passwordVisibilityButton, {
                            [styles['passwordVisibilityButton_closed']]: currentInputType === INPUT_TYPE.TEXT,
                        })}
                        type="button"
                        onClick={() => handleVisibilityClick(currentInputType)}
                        aria-label={VISIBILIT_BUTTON_ARIA_LABEL}
                        disabled={pending || disabled}
                    />
                )}
            </div>

            {errorMessage && (
                <div className={styles.errorMessage} id={ariaDescribedBy}>
                    {errorMessage}
                </div>
            )}
        </label>
    );
};
