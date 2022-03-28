import Link from "next/link";
import { Button } from "../components/Button";
import { ConversationCard } from "../components/ConversationCard";
import { Header } from "../components/Header";

export default function Rooms() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-40 d-flex align-items-center justify-content-between">
          <h1>All conversations</h1>
          <Button color="green">+Start room</Button>
        </div>
        <div className="mt-20">
          <Link href="/rooms/test-room">
            <a>
              <ConversationCard
                title="Create clone Clubhouse"
                avatars={[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                  "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                ]}
                guests={["Ivan Pupkiin", "Alex Bead", "Max Google"]}
                guestsCount={44}
                speakersCount={3}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
