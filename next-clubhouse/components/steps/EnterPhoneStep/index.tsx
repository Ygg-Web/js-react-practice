import { useState } from "react";
import NumberFormat from "react-number-format";
import Button from "../../Button";
import {WhiteBlock} from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./EnterPhoneStep.module.scss";
import StepInfo from "../../StepInfo";

export const EnterPhoneStep = () => {
  const [inputValue, setInputValue] = useState({});

  const nextDisabled =
    !inputValue.formattedValue || inputValue.formattedValue.includes("_");

  return (
    <div className={styles.block}>
      <StepInfo
        icon="./"
        tittle="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
        <div className={clsx("mt-30", styles.input)}>
          <img src="./" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-33-33"
            value={inputValue.value}
            onValueChange={(values) => setInputValue(values)}
          />
        </div>
        <Button disabled={nextDisabled}>
          Next
          <img src="./" alt="next" className="d-id ml-10" />
        </Button>
        <p className={clsx(styles.policyText, "mt-30")}>
          By entering your number, you're agreeing to our Terms of Service nad
          Privacy Policy. Thanks
        </p>
      </WhiteBlock>
    </div>
  );
};
