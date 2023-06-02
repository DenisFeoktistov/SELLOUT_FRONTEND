import React from "react";
import s from "./Sale.module.css";
import { CustomCheckbox, SearchInput, Arrow, RangeSlider } from "@/shared/ui";

const Sale = () => {
  return (
    <div className={s.sale + " d-flex align-items-center"}>
      <CustomCheckbox
        labelText={"Скидка"}
        reversed={true}
        labelClass={s.text}
      />
    </div>
  );
};

export default Sale;
