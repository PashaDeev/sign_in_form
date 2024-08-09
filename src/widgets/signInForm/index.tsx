'use client';

import {useFormState} from 'react-dom';
import {EmailInput} from '@/features/emailInput';
import {PasswordInput} from '@/features/passwordInput';

import {submit, type SubmitResult} from '@/app/actions';

import styles from './index.module.css';
import {Button} from '@/shared/button';

const INITAIL_STATE: SubmitResult = {
    emailValidationErrors: [],
    passwordWalidationErrors: [],
};

export const SignInForm = () => {
    const [state, formSubmitAction] = useFormState<typeof INITAIL_STATE, FormData>(submit, INITAIL_STATE);

    return (
        <form action={formSubmitAction} className={styles.signInForm}>
            <h1 className={styles.title}>Sign In</h1>

            <EmailInput className={styles.input} />

            <PasswordInput validationErrors={state.passwordWalidationErrors} className={styles.input} />

            <Button maxWidth={true}>Sign In</Button>
        </form>
    );
};
