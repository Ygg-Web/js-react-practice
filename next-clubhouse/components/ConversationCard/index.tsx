import clsx from "clsx";
import styles from "./ConversationCard.module.scss";
import whiteBlockStyles from "../WhiteBlock/WhiteBlock.module.scss";
import { Avatar } from "../Avatar";

interface ConversationCardProps {
  title: string;
  guests: string[];
  avatars: string[];
  guestsCount: number;
  speakersCount: number;
}

export const ConversationCard: React.FC<ConversationCardProps> = ({
  title,
  guests = [],
  avatars = [],
  guestsCount,
  speakersCount,
}) => {
  return (
    <div className={clsx(whiteBlockStyles.block, styles.card, "mb-30")}>
      <h4 className={styles.title}>{title}</h4>
      <div className={clsx("d-flex mt-10", styles.content)}>
        <div className={styles.avatars}>
          {avatars.map((url, i) => (
            <Avatar
              key={url}
              width="45px"
              height="45px"
              src={url}
              className={
                avatars.length > 1 && i === avatars.length - 1
                  ? "lastAvatar"
                  : ""
              }
            />
          ))}
        </div>
        <div className={clsx(styles.info, "ml-10")}>
          <ul className={styles.users}>
            {guests.map((name, index) => (
              <li key={name + index}>
                {name}
                <img src="/img/cloud.svg" alt="Cloud" width={14} height={14} />
              </li>
            ))}
          </ul>
          <ul className={styles.details}>
            <li>
              {guestsCount}
              <img
                src="/img/user-count.svg"
                alt="User count"
                width={12}
                height={12}
              />
            </li>
            <li>
              {speakersCount}
              <img
                className="ml-5"
                src="/img/message.svg"
                alt="Speaker count"
                width={12}
                height={12}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
