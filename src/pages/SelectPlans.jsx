import React, { useState } from "react";
import "../styles/selectplans.css";
import { page_select_plan } from "../data/data";
import Plan from "../components/Plan";
import PlanTermSwitch from "../components/PlanTermSwitch";
const SelectPlans = ({ formData, setFormData }) => {
  const [isAnnually, setIsAnnually] = useState(false);

  return (
    <div className="select-plans__container">
      <div className="select-plans__plans">
        {page_select_plan.map(({ id, title, monthly_cost }) => {
          return (
            <Plan
              id={id}
              title={title}
              monthly_cost={monthly_cost}
              isAnnually={isAnnually}
              formData={formData}
              setFormData={setFormData}
            />
          );
        })}
      </div>
      <PlanTermSwitch
        isAnnually={isAnnually}
        setIsAnnually={setIsAnnually}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default SelectPlans;
