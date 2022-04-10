import { useRef, useEffect, useState, useContext } from "react";
import { Button } from "../../Button";
import { WhiteBlock } from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./ChooseAvatarStep.module.scss";
import { StepInfo } from "../../StepInfo";
import { Avatar } from "../../Avatar";
import { MainContext } from "../../../pages";

export const ChooseAvatarStep: React.FC = () => {
  const { onNextStep } = useContext(MainContext);

  const [avatarUrl, setAvatarUrl] = useState<string>(
    "https://i.pinimg.com/originals/95/1b/53/951b53b90c64d9adad8807d6218eae41.jpg"
  );
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeImage = (e: Event): void => {
    const file = (e.target as HTMLInputElement).files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener("change", handleChangeImage);
    }
  }, []);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/img/fireworks.png"
        title="Okay, Petrov Ivan!"
        description="How's this photo"
      />
      <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width="120px" height="120px" src={avatarUrl} />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image" ref={inputFileRef} type="file" hidden />
        <Button onClick={onNextStep}>
          next
          <img src="/img/arrow.svg" alt="arrow" className="d-id ml-10" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
