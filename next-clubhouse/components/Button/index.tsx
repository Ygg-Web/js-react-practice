import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps{
  disabled?: boolean;
  color?: 'green' | 'gray';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}


export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color,
  onClick,
  className
}) =>  {
  const colors = {
    green: styles.buttonGreen,
    gray: styles.buttonGray,
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(className, styles.button, colors[color])}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
