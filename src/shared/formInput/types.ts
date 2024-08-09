'use client';
import {InputHTMLAttributes} from 'react';

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    title: string;
    ariaErrorMessage: string;
    errorMessage?: string;
};
