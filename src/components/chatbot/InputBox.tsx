import React, { FC } from 'react'
import { useFormik, Formik, Form, Field, FormikHelpers } from "formik";

const InputBox:FC = () => {
    const initialValueForms: chatSubmission= {
        question : ""
    };

    const handleSubmit = async (
        values: chatSubmission,
        formikHelpers: FormikHelpers<chatSubmission>
      ) => {
        console.log(values)
      };

  return (
    <div>
        <Formik
        initialValues={initialValueForms}>
        {({errors,touched})=>(
            <Form className='flex items-center px-4'>
                <div className='h-full'>
                    <Field
                    className="bg-transparent text-yellow-p w-[80vw] text-xl overflow-x-scroll text-wrap border-b-2 border-b-yellow-300 "
                    name ="question"
                    placeholder="Ask something about us!"/>
                    {touched && errors.question && <h2 className="text-red-600 text-sm relative transform translate-y-[-10px]">{errors.question}</h2>}
                </div>
                <button
                      className="bg-black-p text-white w-[5vw] h-[5vh] rounded-full  text-base  "
                      type="submit"
                    >Submit</button>
            </Form>
        )}
        </Formik>
    </div>
  )
}

export default InputBox