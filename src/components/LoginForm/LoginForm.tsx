import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { FormLabel, FormError } from "./LoginForm.styled.ts";
import { logInSuccess, logOutSuccess } from "@/redux/userDataSlice.ts";

const schema = yup.object().shape({
    login: yup.string().required()
});

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (
        values: { login: string },
        { resetForm, setSubmitting }: {
            resetForm: () => void,
            setSubmitting: (_: boolean) => void
        }
    ) => {
        console.log('LoginForm submit. values', values);
        dispatch(logInSuccess(values.login));
        setSubmitting(false);
        resetForm();
        navigate('/');
    }

    return (
        <Formik initialValues={{ login: '' }} validationSchema={schema} onSubmit={handleSubmit}>
            <Form autoComplete="off" className="en-vocab-section">

                <h1 className="section-title">Login form</h1>
                <div className="flex justify-center">
                    <div>
                        <label htmlFor="login">Login </label>
                        <br />
                        <Field type="text" name="login" className="border-b-2 border-green-900 hover:bg-green-300 focus:border-green-600 outline-none" placeholder="Enter your login..."></Field>
                        <div>
                            <FormError name="login" component="div"></FormError>
                        </div>
                        <div className="mt-1">
                            <button type="submit" className="border-2 rounded-lg p-1 border-green-900 hover:bg-green-300 w-full bg-green-900 text-white">Login</button>
                        </div>
                    </div>

                </div>
            </Form>
        </Formik>
    );
}
