import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { FormLabel, FormGrid, FormError } from "@/components/AddWordForm/AddWordForm.styled";
import { useSelector } from "react-redux";
import { userDataSelector } from "@/redux/selectors";
import { useAppDispatch } from "@/redux/store";
import { reduxAddWord } from "@/redux/operations";

const schema = yup.object().shape({
    enWord: yup.string().required(),
    ruTransl: yup.string().required()
});

function AddWordForm() {
    const dispatch = useAppDispatch();

    const { name } = useSelector(userDataSelector);

  async function addWord({ enWord, ruTransl}: {enWord: string, ruTransl: string,}) {
        dispatch(reduxAddWord({ enWord, ruTransl, name }));
  }

    const handleSubmit = (
        values: { enWord: string, ruTransl: string },
        { resetForm, setSubmitting }: {
            resetForm: () => void,
            setSubmitting: (_: boolean) => void
        }) => {
            console.log('Form submit. values', values);
        setSubmitting(false);
        addWord(values);
        resetForm();
    }

    return (
        <Formik initialValues={{ enWord: '', ruTransl: '' }} validationSchema={schema} onSubmit={handleSubmit}>
            <Form autoComplete="off" className="border-2 rounded-xl border-green-900 p-2">

                <h1 className="section-title">Add word form</h1>
                <FormGrid>
                        <FormLabel htmlFor="enWord">Word </FormLabel>
                    <Field type="text" name="enWord" className="border-2 border-green-900 hover:bg-green-300 focus:border-green-600"></Field>
                    <FormError name="enWord" component="div"></FormError>
                        <FormLabel htmlFor="ruTransl">Перевод </FormLabel>
                        <Field type="text" name="ruTransl" className="border-2 border-green-900 hover:bg-green-300 focus:border-green-600"></Field>
                    <FormError name="ruTransl" component="div"></FormError>
                    </FormGrid>
                    <button type="submit" className="border-2 rounded-lg p-1 border-green-900 hover:bg-green-300">Add word</button>
            </Form>
        </Formik>
    );
}

export default AddWordForm;