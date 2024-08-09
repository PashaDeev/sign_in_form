'use server';

export type SubmitResult = {emailErrorMessage: string; passwordErrorMessage: string};
export type SubmitParams = {
    email: string;
    password: string;
};

export async function submit(_: SubmitResult, param: FormData): Promise<SubmitResult> {
    await new Promise(res => setTimeout(res, 2000));

    const password = (param.get('password') || '').toString();
    console.log(password);
    await new Promise(res => setTimeout(res, 2000));

    return {
        emailErrorMessage: '',
        passwordErrorMessage: 'Wrong Password',
    };
}
