import {FormInput} from '@/shared/formInput';

const DESCRIBEDBY_NAME = 'password-constraints';
const INVALID_ARIA_STATE = 'password error';

// todo Седалть правильный тип для className
export const PasswordInput = ({className}: {className?: string}) => {
    return (
        <div>
            <FormInput
                className={className}
                title="Password:"
                type="password"
                name="password"
                id="current-password"
                autoComplete="current-password"
                required
                aria-describedby={DESCRIBEDBY_NAME}
                placeholder="••••••••••"
                ariaErrorMessage={INVALID_ARIA_STATE}
                isError={false}
            />

            <div id={DESCRIBEDBY_NAME}></div>
        </div>
    );
};
