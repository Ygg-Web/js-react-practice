import { useRef, useEffect } from "react";
import Button from "../../Button/index,js";
import WhiteBlock from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./ChooseAvatarStep.module.scss";
import StepInfo from "./";

export default function ChooseAvatarStep() {
  const inputFileRef = useRef();

  const handleChangeImage = (e) => {
    console.log(e.target.files);
  };

  useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener("change", handleChangeImage);
    }
  }, []);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="./"
        tittle="Okay, Petrov Ivan!"
        description="How's this photo"
      />
      <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
        <div className={styles.avatar}>
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70 10C50.3186 10 34.027 12.5809 23.3039 23.3039C12.5809 34.027 10 50.3186 10 70C10 89.6814 12.5809 "
              fill="#E0E0E0"
              stroke="#D6D6D6"
            />
          </svg>
        </div>
        <Button>
          next
          <img src="./" alt="Name" className="d-id ml-10" />
        </Button>
      </WhiteBlock>
    </div>
  );
}
