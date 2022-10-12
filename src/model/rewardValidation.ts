import * as yup from "yup";

function rewardNameValidation() {
    return yup
        .string()
        .min(3, 'Name should be of minimum 3 characters length')
        .required('Name is required');
}

export const rewardValidationSchema = yup.object({
    name: rewardNameValidation(),
});