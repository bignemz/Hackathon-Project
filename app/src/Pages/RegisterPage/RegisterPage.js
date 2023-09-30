import React, { useState } from "react";
import "./RegisterPage.scss";
import { ReactComponent as GraphiCDesigner } from "../../SVGComponents/3d-graphic-designer-showing-thumbs-up-png 1.svg";
import { ReactComponent as Congratulations } from "../../SVGComponents/congratulation.svg";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="Register">
     
      <main>
        <div className="container-xl">
          <div className="row">
            <div className="col-6 col-md-12">
              <div className="image-container">
                <GraphiCDesigner />
                <img
                  className="star star1"
                  src="./HackImages/IconImage/sata gra.png"
                  alt="star1"
                />
                <img
                  className="star star2"
                  src="./HackImages/IconImage/star pu.png"
                  alt="star2"
                />
                <img
                  className="star star3"
                  src="./HackImages/IconImage/star.png"
                  alt="star3"
                />
              </div>
            </div>
            <div className="col-6 col-md-12 ">
              <RegisterForm setModal={setModal} />
            </div>
          </div>
        </div>
      </main>
      {modal && (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content" aria-hidden="false">
              <div className="card modal-card">
                <div className="cardContent text-white text-center">
                  <div className="image-container">
                    <Congratulations />
                  </div>
                  <div className="stack-column">
                    <h2>
                      Congratulations <br />
                      You have successfully Registered
                    </h2>
                    <p>
                      Yes, it was easy and you did it! <br /> check your mail
                      box for next step
                    </p>
                    <div>
                      <button
                        className="contained-btn register-btn"
                        onClick={() => setModal(false)}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
