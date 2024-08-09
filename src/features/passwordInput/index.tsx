import {FormInput} from '@/shared/formInput';
import {INPUT_TYPE} from '@/shared/formInput/constants';

const DESCRIBEDBY_NAME = 'password-constraints';
const INVALID_ARIA_STATE = 'password error';

type PasswordInputProps = {
    className?: string;
    errorMessage?: string;
    disabled?: boolean;
};

export const PasswordInput = (props: PasswordInputProps) => {
    return (
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
            {...props}
        />
    );
};
