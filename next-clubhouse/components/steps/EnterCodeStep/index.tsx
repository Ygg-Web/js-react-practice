import { useState } from "react";
import Button from "../../Button";
import {WhiteBlock} from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./EnterCodeStep.module.scss";
import StepInfo from "../../StepInfo";

export const EnterCodeStep = () => {
  const [codes, setCodes] = useState([]);

  const nextDisabled = codes.some((v) => !v) || codes.length < 4;

  const handleChangeInput = (e) => {
    const id = Number(e.target.getAttribute("id")) - 1;
    const value = e.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[id] = value;
      return newArr;
    });
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  console.log(codes);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="./"
        tittle="What's your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx("m-auto", styles.whiteBlock)}>
        <div className="mb-30">
          <input className="field" placeholder="Enter fullname" />
        </div>
        <Button>
          next
          <img src="./" alt="Name" className="d-id ml-10" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
