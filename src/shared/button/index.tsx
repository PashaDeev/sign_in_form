import {InputHTMLAttributes} from 'react';
import clsx from 'clsx';

import styles from './index.module.css';
import {useFormStatus} from 'react-dom';

// todo Проверить, что за фигня с типами
type ButtonProps = InputHTMLAttributes<HTMLButtonElement> & {type?: 'submit' | 'button' | 'reset'; maxWidth?: boolean};

export const Button = ({children, className, type, maxWidth, disabled, ...rest}: ButtonProps) => {
    const {pending} = useFormStatus();
    return (
        <button
            className={clsx(styles.button, className, {
                [styles['button_maxWidth']]: maxWidth,
            })}
            type={type}
            disabled={pending || disabled}
            {...rest}
        >
            {children}
        </button>
    );
};
