import {useCallback, useState} from 'react';
import {INPUT_TYPE} from '../constants';
import {type FormInputProps} from '../types';

export const usePasswordVisibility = (
    type: FormInputProps['type'],
): [FormInputProps['type'], (type: FormInputProps['type']) => void] => {
    const [currentInputType, setInputType] = useState(type);

    const handleVisibilityClick = useCallback((oldType: FormInputProps['type']) => {
        const typeToChange = oldType === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD;
        setInputType(typeToChange);
    }, []);

    return [currentInputType, handleVisibilityClick];
};
