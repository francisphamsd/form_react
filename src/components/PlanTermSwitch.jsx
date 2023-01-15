import React from "react";

const PlanTermSwitch = ({
  isAnnually,
  setIsAnnually,
  formData,
  setFormData,
}) => {
  return (
    <div className="switch">
      <p className={isAnnually ? "switch__inactive" : "switch__active"}>
        Monthly
      </p>

      <input
        type="checkbox"
        id="switch__input"
        onChange={() => {
          setIsAnnually((prev) => !prev);
          setFormData({
            ...formData,
            plan_term: isAnnually ? "Monthly" : "Yearly",
          });
        }}
      />
      <label className="switch__label" htmlFor="switch__input">
        <span className="switch__button" />
      </label>
      <p className={isAnnually ? "switch__active" : "switch__inactive"}>
        Yearly
      </p>
    </div>
  );
};

export default PlanTermSwitch;
