import {Button} from "../../Button";
import {WhiteBlock} from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./TwitterStep.module.scss";
import StepInfo from "../../StepInfo";
import { Avatar } from "../../Avatar";

export const TwitterStep = () => {
  return (
    <div className={styles.block}>
      <StepInfo icon="/img/shteker.png" title="Do you want import info from Twitter?" />
      <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width="120px" height="120px" src="https://i.pinimg.com/originals/95/1b/53/951b53b90c64d9adad8807d6218eae41.jpg" />
        </div>
        <h2 className="mb-40">Petrov Ivan</h2>
        <div>
          <Button>
            <img src="/img/twitter.svg" alt="Twitter logo" className={styles.twitterLogo} />
              import from Twiiter
            <img className="d-id ml-10" src="/img/arrow.svg" alt="arrow" />
          </Button>
        </div>
        <div className="link mt-20 cup d-id">Enter my info manuakky</div>
      </WhiteBlock>
    </div>
  );
};
