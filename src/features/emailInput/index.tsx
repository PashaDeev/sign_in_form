import {FormInput} from '@/shared/formInput';
import {INPUT_TYPE} from '@/shared/formInput/constants';

const INVALID_ARIA_STATE = 'email error';

// todo Седалть правильный тип для className
export const EmailInput = ({className}: {className?: string}) => {
    return (
        <FormInput
            className={className}
            type={INPUT_TYPE.EMAIL}
            title="Email Address:"
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
