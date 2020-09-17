import * as yup from "yup";

export default yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  terms: yup.boolean("You must agree to the terms and conditions"),
});
