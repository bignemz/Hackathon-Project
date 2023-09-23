import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";

import { ReactComponent as PartofMove } from "../../SVGComponents/Part of move.svg";
import useFetchData from "../../hooks/useFetchData";
import axiosInstance from "../../hooks/axiosInstance";

const RegisterForm = ({ setModal }) => {
  const { apiData: categories } = useFetchData(
    "https://backend.getlinked.ai/hackathon/categories-list"
  );
  return (
    <div className="card">
      <div className="cardContent text-white">
        <Formik
          initialValues={{
            email: "",
            phone_number: "",
            team_name: "",
            group_size: "",
            project_topic: "",
            category: "",
            privacy_policy_accepted: false,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required("Email is required"),
            phone_number: Yup.string().required("Phone Number is required"),
            team_name: Yup.string().required("Team Name is required"),
            group_size: Yup.string().required("Group Size is required"),
            project_topic: Yup.string().required("Project Topic is required"),
            category: Yup.string().required("Category is required"),
            privacy_policy_accepted: Yup.boolean().isTrue(),
          })}
          onSubmit={async (values, { resetForm }) => {
            try {
              await axiosInstance.post("/hackathon/registration", values);
              setModal(true);
              resetForm();
            } catch (error) {
              const errorMessage = error?.response?.data
                ? Object.values(error?.response?.data)[0][0]
                : error.message;
              toast.error(errorMessage);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            isSubmitting,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <div className="stack-column">
                <h2 className="text-primary">Register</h2>
                <div className="bePart">
                  <h6>Be Part of this movement</h6>
                  <PartofMove className="lineOfMove" />
                </div>
                <h4>Create Your Account</h4>
                <div className="row">
                  <div className="col-6 col-md-12">
                    <div className="form-control">
                      <label htmlFor="group_name">Team&apos;s Name</label>
                      <input
                        type="text"
                        name="team_name"
                        value={values.team_name}
                        onChange={handleChange}
                        placeholder="Enter the name of your group"
                      />
                      {errors?.team_name && touched?.team_name && (
                        <div className="helper-text text-danger">
                          {errors?.team_name}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-6 col-md-12">
                    <div className="form-control">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="phone_number"
                        onChange={handleChange}
                        value={values?.phone_number}
                        placeholder="Enter your phone number"
                      />
                      {errors?.phone_number && touched?.phone_number && (
                        <div className="helper-text text-danger">
                          {errors?.phone_number}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-6 col-md-12">
                    <div className="form-control">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values?.email}
                        placeholder="Enter your email address"
                      />
                      {errors?.email && touched?.email && (
                        <div className="helper-text text-danger">
                          {errors?.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-6 col-md-12">
                    <div className="form-control">
                      <label>Project Topic</label>
                      <input
                        type="text"
                        name="project_topic"
                        onChange={handleChange}
                        value={values?.project_topic}
                        placeholder="What is your group project topic"
                      />
                      {errors?.project_topic && touched?.project_topic && (
                        <div className="helper-text text-danger">
                          {errors?.project_topic}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-control">
                      <label>Category</label>
                      <select
                        name="category"
                        onChange={handleChange}
                        value={values?.category}
                      >
                        <option>Select your Category</option>
                        {categories?.map((category, index) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      {errors?.category && touched?.category && (
                        <div className="helper-text text-danger">
                          {errors?.category}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-control">
                      <label>Group Size</label>
                      <select
                        name="group_size"
                        onChange={handleChange}
                        value={values?.group_size}
                      >
                        <option>Select</option>
                        {Array(10)
                          .fill()
                          .map((_, index) => (
                            <option value={index} key={index}>
                              {index}
                            </option>
                          ))}
                      </select>
                      {errors?.group_size && touched?.group_size && (
                        <div className="helper-text text-danger">
                          {errors?.group_size}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-primary">
                    Please review your registration details before submitting
                  </p>
                </div>

                <div className="form-control">
                  <label>
                    <input
                      name="privacy_policy_accepted"
                      value={values?.privacy_policy_accepted}
                      onChange={handleChange}
                      type="checkbox"
                    />
                    <span>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </span>
                  </label>
                </div>

                <div>
                  <button
                    className="contained-btn register-btn w-full"
                    type="submit"
                    disabled={!values?.privacy_policy_accepted || isSubmitting}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
