import { useContext, useState } from "react";
import NumberFormat from "react-number-format";
import clsx from "clsx";
import { Button } from "../../Button";
import { WhiteBlock } from "../../WhiteBlock";
import { StepInfo } from "../../StepInfo";
import styles from "./EnterPhoneStep.module.scss";
import { MainContext } from "../../../pages";

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const EnterPhoneStep = () => {
  const { onNextStep } = useContext(MainContext);
  const [values, setValues] = useState<InputValueState>({} as InputValueState);

  const nextDisabled =
    !values.formattedValue || values.formattedValue.includes("_");

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/img/telephone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
        <div className={clsx("mt-30", styles.input)}>
          <img src="/img/flag.png" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-33-33"
            value={values.value}
            onValueChange={({ formattedValue, value }) =>
              setValues({ formattedValue, value })
            }
          />
        </div>
        <Button disabled={nextDisabled} onClick={onNextStep}>
          Next
          <img src="/img/arrow.svg" alt="arrow" className="d-id ml-10" />
        </Button>
        <p className={clsx(styles.policyText, "mt-30")}>
          By entering your number, you're agreeing to our Terms of Service nad
          Privacy Policy. Thanks
        </p>
      </WhiteBlock>
    </div>
  );
};
