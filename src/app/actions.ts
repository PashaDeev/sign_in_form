'use server';

export type SubmitResult = {emailValidationErrors: string[]; passwordWalidationErrors: string[]};
export type SubmitParams = {
    email: string;
    password: string;
};

export async function submit(_: SubmitResult, param: FormData): Promise<SubmitResult> {
    console.log('param', param);
    return {
        emailValidationErrors: [],
        passwordWalidationErrors: ['To short', 'Non char'],
    };
}
