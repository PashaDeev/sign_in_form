'use client';

import {useFormState} from 'react-dom';

import {EmailInput} from '@/features/emailInput';
import {PasswordInput} from '@/features/passwordInput';
import {submit, type SubmitResult} from '@/app/actions';
import {Button} from '@/shared/button';

import styles from './index.module.css';

const INITAIL_STATE: SubmitResult = {
    emailErrorMessage: '',
    passwordErrorMessage: '',
};

export const SignInForm = () => {
    const [state, formSubmitAction] = useFormState<typeof INITAIL_STATE, FormData>(submit, INITAIL_STATE);

    return (
        <form action={formSubmitAction} className={styles.signInForm} aria-labelledby="firstHeader" name="userLogin">
            <h1 id="firstHeader" className={styles.title}>
                Sign In
            </h1>

            <EmailInput className={styles.block} errorMessage={state.emailErrorMessage} autoFocus={true} />

            <PasswordInput className={styles.block} errorMessage={state.passwordErrorMessage} />

            <Button type="submit" maxWidth={true} className={styles.block}>
                Sign In
            </Button>

            <div className={styles.restoreContainer}>
                <span>
                    Forgot your password?{' '}
                    <a className={styles.restoreLink} href="#">
                        Reset password
                    </a>
                </span>
            </div>
        </form>
    );
};
