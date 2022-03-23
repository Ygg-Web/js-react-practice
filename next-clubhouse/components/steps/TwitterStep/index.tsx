import Button from "../../Button";
import {WhiteBlock} from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./TwitterStep.module.scss";
import StepInfo from "../../StepInfo";

export const TwitterStep = () => {
  return (
    <div className={styles.block}>
      <StepInfo icon="./" tittle="Do you want import info from Twitter?" />
      <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
        <div className={styles.avatar}>
          <b>AD</b>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 50C0.5 30.5091 3.25846 18.1987 10.7286 10.7286C18.1987 3.25846 30.5091 0.5 50 0.5C69.4909 0.58"
              fill="#E0E0E0"
              stroke="#D6D6D6"
            />
          </svg>
        </div>
        <h2 className="mb-40">Petrov Ivan</h2>
        <Button>
          <img src="./" alt="Twitter logo" className={styles.twitterLogo} />
          import from Twiiter
          <img className="d-id ml-10" src="/" alt="?" />
        </Button>
        <div className="link mt-20 cup d-id">Enter my info manuakky</div>
      </WhiteBlock>
    </div>
  );
};
