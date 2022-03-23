import React, { useRef, useEffect } from "react";
import Button from "../../Button";
import {WhiteBlock} from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./ChooseAvatarStep.module.scss";
import StepInfo from "../../StepInfo";
import { Avatar } from "../../Avatar";

export const ChooseAvatarStep:React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

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
          <Avatar width="120px" height="120px" src="ghffhfgh" />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image" ref={inputFileRef} type="file" hidden />
        <Button>
          next
          <img src="./" alt="Name" className="d-id ml-10" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
