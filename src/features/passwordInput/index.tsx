import {FormInput} from '@/shared/formInput';

const DESCRIBEDBY_NAME = 'password-constraints';

export const PasswordInput = () => {
    return (
        <div>
            <FormInput
                title="Password:"
                type="password"
                name="password"
                id="current-password"
                autoComplete="current-password"
                required
                aria-describedby={DESCRIBEDBY_NAME}
                placeholder="••••••••••"
            />

            <div id={DESCRIBEDBY_NAME}></div>
        </div>
    );
};
