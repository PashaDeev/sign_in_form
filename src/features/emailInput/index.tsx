import {FormInput} from '@/shared/formInput';
import {INPUT_TYPE} from '@/shared/formInput/constants';

const INVALID_ARIA_STATE = 'email error';

type EmailInputProps = {
    className?: string;
    errorMessage?: string;
    disabled?: boolean;
    autoFocus?: boolean;
};

export const EmailInput = (props: EmailInputProps) => {
    return (
        <FormInput
            type={INPUT_TYPE.EMAIL}
            title="Email Address:"
            name="email"
            id="email"
            required={true}
            placeholder="me@example.com"
            ariaErrorMessage={INVALID_ARIA_STATE}
            {...props}
        />
    );
};
