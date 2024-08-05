import {FormInput} from '@/shared/formInput';

const INVALID_ARIA_STATE = 'email error';

// todo Седалть правильный тип для className
export const EmailInput = ({className}: {className?: string}) => {
    return (
        <FormInput
            className={className}
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
