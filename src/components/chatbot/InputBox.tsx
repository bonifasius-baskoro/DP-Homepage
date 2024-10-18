import React, { FC } from "react";
import { useFormik, Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { postAnswer } from "@/api/chatBot";

const InputBox: FC = () => {
  const initialValueForms: chatSubmission = {
    question: "",
  };

  const handleSubmit = async (
    values: chatSubmission,
    formikHelpers: FormikHelpers<chatSubmission>
  ) => {
    try {
      const response = await postAnswer(values) as chatResponse;

        console.log(response)
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error submitting question:", error);
    } finally {
      // This block will run regardless of success or failure
      console.log("finally");
    }   
    return
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
