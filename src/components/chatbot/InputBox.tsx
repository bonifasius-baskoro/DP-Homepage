import React, { FC, useEffect } from "react";
import { useFormik, Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { usePostAnswer } from "@/hooks/usePostAnswer";

const InputBox: FC = () => {
  const { chatMutation, isError, isLoading, data } = usePostAnswer();
  const initialValueForms: chatSubmission = {
    question: "",
  };

  useEffect(() => {
    console.log("thisi s it ", data);
  }, [data]);

  const handleSubmit = async (
    values: chatSubmission,
    formikHelpers: FormikHelpers<chatSubmission>
  ) => {
    chatMutation(values);
  };
  const validationSchema = Yup.object({
    question: Yup.string()
      .required("Question is required")
      .min(3, "Question must be longer than 3 character"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValueForms}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex items-center px-4">
            <div className="h-full">
              <Field
                className="bg-transparent text-yellow-p w-[80vw] text-xl overflow-x-scroll text-wrap border-b-2 border-b-yellow-300 "
                name="question"
                placeholder="Ask something about us!"
              />
              {touched && errors.question && (
                <h2 className="text-red-600 text-sm relative transform translate-y-[-10px]">
                  {errors.question}
                </h2>
              )}
            </div>
            <button
              className="bg-black-p text-white w-[5vw] h-[5vh] rounded-full  text-base  "
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputBox;
