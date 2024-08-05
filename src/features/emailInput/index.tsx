import {FormInput} from '@/shared/formInput';

const INVALID_ARIA_STATE = 'email error';

export const EmailInput = () => {
    return (
        <FormInput
            title="Email Address:"
            type="email"
            name="email"
            id="email"
            required={true}
            autoFocus={true}
            placeholder="me@example.com"
            ariaErrorMessage={INVALID_ARIA_STATE}
            isError={false}
        />
    );
};
