import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../hooks/axiosInstance";

import Navbar from "../../Components/Navbar/Navbar";
import { ReactComponent as Instagram } from "../../SVGComponents/Instagram.svg";
import { ReactComponent as XVector } from "../../SVGComponents/XVector.svg";
import { ReactComponent as Facebook } from "../../SVGComponents/Facebook.svg";
import { ReactComponent as Linkedln } from "../../SVGComponents/Linkedln.svg";

import "./Contactpage.scss";
import { toast } from "react-toastify";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Contactpage() {
  const medium = useMediaQuery("(max-width: 900px)");
  return (
    <div>
      
      <main>
        <div className="container-lg">
          <div className="row">
            <div className="col-6 col-md-12 text-white getInTouch">
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="stack-column">
                  <h2 className="text-primary">Get in touch</h2>
                  <h5>
                    Contact <br />
                    Information
                  </h5>
                  <h5>
                    27, Alera Street <br />
                    Yaba 100012 <br />
                    Lagos State
                  </h5>
                  <h5>Call Us: 07067981819</h5>
                  <h5>
                    We are open from Monday-Friday <br />
                    08:00am - 05:00pm
                  </h5>
                  <div>
                    <h5 className="text-primary">Share On</h5>
                    <div className="stack-row al-center g-1">
                      <button className="icon-button">
                        <Instagram />
                      </button>

                      <button className="icon-button">
                        <XVector />
                      </button>

                      <button className="icon-button">
                        <Facebook />
                      </button>

                      <button className="icon-button">
                        <Linkedln />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-12">
              <div className="card">
                <div className="cardContent">
                  <Formik
                    initialValues={{
                      email: "",
                      phone_number: "",
                      first_name: "",
                      message: "",
                      project_topic: "",
                      category: "",
                      privacy_policy_accepted: false,
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().required("Email is required"),
                      phone_number: Yup.string().required(
                        "Phone Number is required"
                      ),
                      first_name: Yup.string().required(
                        "First Name is required"
                      ),
                      message: Yup.string().required("Message is required"),
                    })}
                    onSubmit={async (values) => {
                      try {
                        await axiosInstance.post(
                          "/hackathon/contact-form",
                          values
                        );
                        toast.success("Message sent successfully");
                      } catch (error) {
                        toast.error(error.message);
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
                        <div className="stack-column text-white">
                          <h4 className="text-primary">
                            Questions or need assistance? <br />
                            Let us know about it!
                          </h4>

                          {medium && (
                            <p>
                              Email us below to any question related to our
                              event
                            </p>
                          )}

                          <div className="form-control">
                            <input
                              type="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="Email"
                            />
                            {errors?.email && touched?.email && (
                              <div className="helper-text text-danger">
                                {errors?.email}
                              </div>
                            )}
                          </div>

                          <div className="form-control">
                            <input
                              type="text"
                              name="phone_number"
                              value={values?.phone_number}
                              onChange={handleChange}
                              placeholder="Phone Number"
                            />
                            {errors?.phone_number && touched?.phone_number && (
                              <div className="helper-text text-danger">
                                {errors?.phone_number}
                              </div>
                            )}
                          </div>

                          <div className="form-control">
                            <input
                              type="text"
                              name="first_name"
                              value={values.first_name}
                              onChange={handleChange}
                              placeholder="First Name"
                            />
                            {errors?.first_name && touched?.first_name && (
                              <div className="helper-text text-danger">
                                {errors?.first_name}
                              </div>
                            )}
                          </div>

                          <div className="form-control">
                            <textarea
                              rows={10}
                              name="message"
                              value={values.message}
                              onChange={handleChange}
                              placeholder="Message"
                            />
                            {errors?.message && touched?.message && (
                              <div className="helper-text text-danger">
                                {errors?.message}
                              </div>
                            )}
                          </div>

                          <div className="text-center">
                            <button
                              className="contained-btn register-btn"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Submit
                            </button>
                            <div className="stack-row al-center g-1 j-center mt-1">
                              <button className="icon-button" type="button">
                                <Instagram />
                              </button>

                              <button className="icon-button" type="button">
                                <XVector />
                              </button>

                              <button className="icon-button" type="button">
                                <Facebook />
                              </button>

                              <button className="icon-button" type="button">
                                <Linkedln />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contactpage;
