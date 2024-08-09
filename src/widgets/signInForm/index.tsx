'use client';

import {useFormState} from 'react-dom';
import {EmailInput} from '@/features/emailInput';
import {PasswordInput} from '@/features/passwordInput';

import {submit, type SubmitResult} from '@/app/actions';

import styles from './index.module.css';
import {Button} from '@/shared/button';

const INITAIL_STATE: SubmitResult = {
    emailErrorMessage: '',
    passwordErrorMessage: '',
};

export const SignInForm = () => {
    const [state, formSubmitAction] = useFormState<typeof INITAIL_STATE, FormData>(submit, INITAIL_STATE);

    return (
        <form action={formSubmitAction} className={styles.signInForm}>
            <h1 className={styles.title}>Sign In</h1>

            <EmailInput className={styles.input} errorMessage={state.emailErrorMessage} autoFocus={true} />

            <PasswordInput className={styles.input} errorMessage={state.passwordErrorMessage} />

            <Button type="submit" maxWidth={true}>
                Sign In
            </Button>
        </form>
    );
};
