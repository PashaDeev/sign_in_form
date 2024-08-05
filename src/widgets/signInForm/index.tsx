import {EmailInput} from '@/features/emailInput';
import {PasswordInput} from '@/features/passwordInput';

export const SignInForm = () => (
    <form action="/">
        <h1>Sign In</h1>

        <EmailInput />

        <PasswordInput />

        <button type="submit">Sign in</button>
    </form>
);
