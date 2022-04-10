import { Button } from "../../Button";
import { WhiteBlock } from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./EnterNameStep.module.scss";
import { StepInfo } from "../../StepInfo";
import { useContext, useState } from "react";
import { MainContext } from "../../../pages";

export const EnterNameStep: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { onNextStep } = useContext(MainContext);

  const nextDisabled = !inputValue;

  const handelChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickNextStep = () => {
    onNextStep();
  };

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/img/think.png"
        title="What's your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx("m-auto", styles.whiteBlock)}>
        <div className="mb-30">
          <input
            onChange={handelChangeInput}
            value={inputValue}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button disabled={nextDisabled} onClick={onClickNextStep}>
          next
          <img src="/img/arrow.svg" alt="Name" className="d-id ml-10" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
