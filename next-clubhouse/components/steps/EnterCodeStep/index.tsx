import { useState } from "react";
import { Button } from "../../Button";
import { WhiteBlock } from "../../WhiteBlock";
import clsx from "clsx";
import styles from "./EnterCodeStep.module.scss";
import { StepInfo } from "../../StepInfo";
import Axios from "../../../core/axios";
import { useRouter } from "next/router";

export const EnterCodeStep = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [codes, setCodes] = useState(["", "", "", ""]);

  const nextDisabled = codes.some((v) => !v);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.getAttribute("id")) - 1;
    const value = e.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (e.target.nextSibling) {
      (e.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await Axios.get("/todos");
      router.push("/rooms");
    } catch (error) {
      alert("Произошла ошибка при активации!");
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.block}>
      {!isLoading ? (
        <>
          <StepInfo icon="/img/number.png" title="Enter your active code" />
          <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
            <div className={clsx("mb-30", styles.codeInput)}>
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="1"
                onChange={handleChangeInput}
                value={codes[0]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="2"
                onChange={handleChangeInput}
                value={codes[1]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="3"
                onChange={handleChangeInput}
                value={codes[2]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="4"
                onChange={handleChangeInput}
                value={codes[3]}
              />
            </div>
            <Button onClick={onSubmit} disabled={nextDisabled}>
              Next
              <img src="/img/arrow.svg" alt="arrow" className="d-id ml-10" />
            </Button>
          </WhiteBlock>
        </>
      ) : (
        <div className="text-center">
          <div className="loader"></div>
          <h3 className="mt-5">Activation in progress ...</h3>
        </div>
      )}
    </div>
  );
};
