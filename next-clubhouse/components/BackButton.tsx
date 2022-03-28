import Link from "next/link";

type BackButtonProps = {
  title: string;
  href: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <div className="d-flex mb-30 cup align-items-center ">
        <img
          src="/img/arrow-left.png"
          className="mr-10"
          width={20}
          height={20}
        />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};
