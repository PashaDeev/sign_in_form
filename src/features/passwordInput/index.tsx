import {FormInput} from '@/shared/formInput';
import {INPUT_TYPE} from '@/shared/formInput/constants';

const DESCRIBEDBY_NAME = 'password-constraints';
const INVALID_ARIA_STATE = 'password error';

type PasswordInputProps = {
    className?: string;
    validationErrors?: string[];
};

// todo Седалть правильный тип для className
export const PasswordInput = ({className, validationErrors = []}: PasswordInputProps) => {
    return (
        <div className={className}>
            <FormInput
                type={INPUT_TYPE.PASSWORD}
                title="Password:"
                name="password"
                id="current-password"
                autoComplete="current-password"
                required
                aria-describedby={DESCRIBEDBY_NAME}
                placeholder="••••••••••"
                ariaErrorMessage={INVALID_ARIA_STATE}
                isError={false}
            />

            <ul id={DESCRIBEDBY_NAME}>
                {validationErrors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
        </div>
    );
};
