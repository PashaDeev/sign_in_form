import {EmailInput} from '@/features/emailInput';
import {PasswordInput} from '@/features/passwordInput';

import styles from './index.module.css';
import {Button} from '@/shared/button';

export const SignInForm = () => (
    <form action="/" className={styles.signInForm}>
        <h1 className={styles.title}>Sign In</h1>

        <EmailInput className={styles.input} />

        <PasswordInput className={styles.input} />

        <Button maxWidth={true}>Sign In</Button>
    </form>
);
