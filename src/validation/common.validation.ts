import * as yup from "yup";

export const emailValidation = () => yup
    .string()
    .email('Email must be valid')
    .required('Email is required');