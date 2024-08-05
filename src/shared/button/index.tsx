import {InputHTMLAttributes} from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

// todo Проверить, что за фигня с типами
type ButtonProps = InputHTMLAttributes<HTMLButtonElement> & {type?: 'submit' | 'button' | 'reset'; maxWidth?: boolean};

export const Button = ({children, className, type, maxWidth, ...rest}: ButtonProps) => (
    <button
        className={clsx(styles.button, className, {
            [styles['button_maxWidth']]: maxWidth,
        })}
        type={type}
        {...rest}
    >
        {children}
    </button>
);
