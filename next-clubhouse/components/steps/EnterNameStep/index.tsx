import Button from "../../Button";
import {WhiteBlock} from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./EnterNameStep.module.scss";
import StepInfo from "../../StepInfo";

export const EnterNameStep = () => {
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/img/think.png"
        title="What's your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx("m-auto", styles.whiteBlock)}>
        <div className="mb-30">
          <input className="field" placeholder="Enter fullname" />
        </div>
        <Button>
          next
          <img src="/img/arrow.svg" alt="Name" className="d-id ml-10" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
