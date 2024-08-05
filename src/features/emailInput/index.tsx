import {FormInput} from '@/shared/formInput';

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
        />
    );
};
