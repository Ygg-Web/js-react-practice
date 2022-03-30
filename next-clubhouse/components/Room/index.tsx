import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import styles from "./Room.module.scss";

export const Room = ({ title }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className="d-flex align-items-center justify-content-between">
          <h2>{title}</h2>
          <div
            className={clsx(
              "d-flex justify-content-between",
              styles.actionButtons
            )}
          >
            <Link href="/">
              <a>
                <Button color="gray" className={styles.leaveButton}>
                  <img
                    width={18}
                    height={18}
                    src="/img/peace.svg"
                    alt="Hand black"
                  />
                  Leave quietly
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="users">
          {/* {users.map(obj => (
        
      ))} */}
        </div>
      </div>
    </div>
  );
};
