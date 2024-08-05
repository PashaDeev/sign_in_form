'use client';

import {InputHTMLAttributes, useCallback, useState} from 'react';
import clsx from 'clsx';

import {INPUT_TYPE, VISIBILIT_BUTTON_ARIA_LABEL} from './constants';

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
    const [currentInputType, setInputType] = useState(type);

    const handleVisibilityClick = useCallback((oldType: FormInputProps['type']) => {
        const typeToChange = oldType === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD;
        setInputType(typeToChange);
    }, []);

    return (
        <label className={clsx(styles.label, className)}>
            <span className={styles.title}>{title}</span>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type={currentInputType}
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
                        onClick={() => handleVisibilityClick(currentInputType)}
                        aria-label={VISIBILIT_BUTTON_ARIA_LABEL}
                    />
                )}
            </div>
        </label>
    );
};
