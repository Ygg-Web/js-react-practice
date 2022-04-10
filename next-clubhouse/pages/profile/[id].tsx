import { useRouter } from "next/router";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile/index.";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          fullname="Petrov Ivan"
          username="petrov"
          about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus modi veritatis quas numquam at distinctio."
          avatarUrl="https://i.pinimg.com/originals/95/1b/53/951b53b90c64d9adad8807d6218eae41.jpg"
        />
      </div>
    </>
  );
}
