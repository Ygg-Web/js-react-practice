import { useRouter } from "next/router";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export default function RoomPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <>
      <Header />
      <div className="container mt-40">
        <BackButton title="All rooms" href="/rooms" />
      </div>
    </>
  );
}
