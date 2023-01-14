import React from "react";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

const Card = ({
  id,
  title,
  monthly_cost,
  yearly_cost,
  isAnnually,
  formData,
  setFormData,
}) => {
  return (
    <div id={id} className="select-plans__plan">
      <img
        src={
          title === "Arcade"
            ? ArcadeIcon
            : title === "Advanced"
            ? AdvancedIcon
            : ProIcon
        }
        alt={title}
      />
      <input
        className="plan__input"
        type="radio"
        name="plan"
        id={title}
        value={title}
        checked={formData.plan === title}
        onChange={(e) => {
          setFormData({ ...formData, plan: e.target.value });
        }}
      />
      <label className="plan__label" htmlFor={title}>
        <h3 className="plan__title">{title}</h3>
        {!isAnnually ? (
          <p className="plan__cost">${monthly_cost}/mo</p>
        ) : (
          <p className="plan__cost">${yearly_cost}/yr</p>
        )}
        {isAnnually ? <p className="plan__discount">2 months free</p> : ""}
      </label>
    </div>
  );
};

export default Card;
