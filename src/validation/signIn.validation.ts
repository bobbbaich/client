import * as yup from "yup";
import {emailValidation} from "./common.validation";

export const signInValidationSchema = yup.object({
    email: emailValidation(),
});