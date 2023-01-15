import React from "react";
import { page_add_ons } from "../data/data";
import AddOnItem from "../components/AddOnItem";
import "../styles/addons.css";

const Addons = ({ formData, setFormData }) => {
  return (
    <div className="addons__container">
      <div className="addons__items">
        {page_add_ons.map(({ id, title, subtitle, monthly_cost }) => {
          return (
            <AddOnItem
              id={id}
              title={title}
              subtitle={subtitle}
              monthly_cost={monthly_cost}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Addons;
