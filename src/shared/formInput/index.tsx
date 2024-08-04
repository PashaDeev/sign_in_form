type FormInputProps = {
    title: string;
    name: string;

    placeholder?: string;
    autoFocus?: boolean;
    required?: boolean;
    id?: string;
    type?: HTMLInputElement['type'];
};
export const FormInput = ({title, name, id, required, autoFocus, placeholder, type = 'text'}: FormInputProps) => {
    return (
        <section>
            <label>
                {title}
                <input
                    type={type}
                    name={name}
                    id={id}
                    required={required}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                />
            </label>
        </section>
    );
};
