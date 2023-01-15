import React from "react";

const AddOnItem = ({ id, title, subtitle, monthly_cost }) => {
  return (
    <div id={id} className="addons__item">
      <div className="addons-item__input-container">
        <input type="checkbox" id="addons-item__input" />
      </div>
      <label htmlFor="addons-item__input" className="addons-item__label">
        <div className="addons-item__text-content">
          <h3 className="addons-item__title">{title}</h3>
          <p className="addons-item__subtitle">{subtitle}</p>
        </div>
        <p className="addons-item__cost">+${monthly_cost}/mo</p>
      </label>
    </div>
  );
};

export default AddOnItem;
