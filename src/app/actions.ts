'use server';

export type SubmitResult = {emailErrorMessage: string; passwordErrorMessage: string};
export type SubmitParams = {
    email: string;
    password: string;
};

export async function submit(): Promise<SubmitResult> {
    await new Promise(res => setTimeout(res, 2000));

    await new Promise(res => setTimeout(res, 2000));

    return {
        emailErrorMessage: '',
        passwordErrorMessage: 'Wrong Password',
    };
}
