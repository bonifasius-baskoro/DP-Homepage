import React, { FC } from "react";
import {  Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { usePostAnswer } from "@/hooks/usePostAnswer";

interface inputBoxProps {
    chatCount :number;
    setChatCount: ()=>void;
}

const InputBox: FC<inputBoxProps> = ({chatCount, setChatCount}) => {
  const { chatMutation, isLoading } = usePostAnswer();
  const initialValueForms: chatSubmission = {
    question: "",
  };

  const handleSubmit = async (
    values: chatSubmission,
    formikHelpers: FormikHelpers<chatSubmission>
  ) => {
    chatMutation(values);
    formikHelpers.resetForm();
  };
  const validationSchema = Yup.object({
    question: Yup.string()
      .required("Question is required")
      .min(3, "Question must be longer than 3 character"),
  });
  return (
    <div className="w-screen">
      <Formik
        initialValues={initialValueForms}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex items-center px-4 gap-4 flex-shrink lg:px-12">
            {isLoading? "" :( <div className="h-full">
              <Field
                className="bg-transparent text-yellow-p min-w-[75vw] text-xl overflow-x-scroll text-wrap border-b-2 border-b-yellow-300 "
                name="question"
                placeholder="Ask something about us!"
              />
              {touched && errors.question && (
                <h2 className="text-[#f4f4f4] text-sm relative transform translate-y-[10px]">
                  {errors.question}
                </h2>
              )}
            </div>) }
           
            <button
              className={`w-12 h-12 rounded-full text-white transition-colors text-xs ${
                isLoading ? "bg-black" : "bg-yellow-p"
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="animate-spin">&#8635;</span>
              ) : (
                ""
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputBox;
