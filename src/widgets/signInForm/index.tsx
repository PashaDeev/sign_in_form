import {FormInput} from '@/shared/formInput';

export const SignInForm = () => (
    <form action="/">
        <h1>Sign In</h1>

        <FormInput
            title="Email Address:"
            type="email"
            name="email"
            id="email"
            required={true}
            autoFocus={true}
            placeholder="me@example.com"
        />

        <FormInput
            title="Password:"
            type="password"
            name="password"
            id="current-password"
            autoComplete="current-password"
            required
            aria-describedby="password-constraints"
            placeholder="••••••••••"
        />

        <button type="submit">Sign in</button>
    </form>
);
