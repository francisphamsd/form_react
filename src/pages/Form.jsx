import React, { useState } from "react";
import { steps, page_info } from "../data/data";
import YourInfo from "./YourInfo";
import SelectPlans from "./SelectPlans";
import AddOns from "./AddOns";
import Summary from "./Summary";
import "../styles/form.css";

const Form = () => {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    plan: "Arcade",
    a_o_service: false,
    a_o_storage: false,
    a_o_profile: false,
  });

  console.log(formData);

  // Get page title and subtitle from data
  const formTitles = page_info.map(({ title, subtitle }) => {
    return [title, subtitle];
  });

  const PageRender = () => {
    if (page === 0) {
      return <YourInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SelectPlans formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <AddOns formData={formData} setFormData={setFormData} />;
    } else {
      return <Summary formData={formData} />;
    }
  };

  return (
    <div className="form">
      {/* Left side */}
      <div className="form-sidebar">
        {steps.map(({ id, title }) => {
          return (
            <div
              className={`sidebar__step ${id - 1 === page ? "active" : ""}`}
              key={id}
            >
              <div className="sidebar__page-number">{id}</div>
              <div className="sidebar__page-content">
                <p>Step {id}</p>
                <h1>{title}</h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right side */}
      <div className="form-container">
        <div className="form-container__content">
          <div className="form-container__title">
            <h1>{formTitles[page][0]}</h1>
            <p>{formTitles[page][1]}</p>
          </div>
          <div className="form-container__body">{PageRender()}</div>
        </div>
        <div className="form-container__button">
          <button
            className="btn btn__prev-page"
            disabled={page === 0}
            style={{ opacity: `${page === 0 ? "0" : "100"}` }}
            onClick={() => {
              setPage((curPage) => curPage - 1);
            }}
          >
            Go Back
          </button>
          <button
            className="btn btn__next-page btn__confirm"
            onClick={() => {
              if (page === formTitles.length - 1) {
                // Todo: show result page
                alert("This is result page");
              } else {
                setPage((curPage) => curPage + 1);
              }
            }}
          >
            {page === formTitles.length - 1 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
