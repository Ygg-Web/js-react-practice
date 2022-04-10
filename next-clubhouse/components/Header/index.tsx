import styles from "./Header.module.scss";
import clsx from "clsx";
import { Avatar } from "../Avatar";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/rooms">
          <div
            className={clsx(styles.headerLogo, "d-flex align-items-center cup")}
          >
            <img src="/img/hand-emoji.png" alt="logo" className="mr-5" />
            <h4>Clubhouse</h4>
          </div>
        </Link>
        <Link href="/profile/1">
          <div className="d-flex align-items-center cup">
            <b className="mr-5">Petrov Ivan</b>
            <Avatar
              src="https://i.pinimg.com/originals/95/1b/53/951b53b90c64d9adad8807d6218eae41.jpg"
              width="50px"
              height="50px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
