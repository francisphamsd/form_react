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
        {page_select_plan.map(({ id, title, monthly_cost, yearly_cost }) => {
          return (
            <Plan
              id={id}
              title={title}
              monthly_cost={monthly_cost}
              yearly_cost={yearly_cost}
              isAnnually={isAnnually}
              formData={formData}
              setFormData={setFormData}
            />
          );
        })}
      </div>
      <PlanTermSwitch isAnnually={isAnnually} setIsAnnually={setIsAnnually} />
    </div>
  );
};

export default SelectPlans;
