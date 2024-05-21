import Link from "next/link";
import RepositoryCard from "./components/RepositoryCard";
import UserProfile from "./components/UserProfile";
import styles from "./page.module.scss";

export default function Home() {
  return <main className={styles.main}>
    <UserProfile/>
    <div>
      <Link href="/serach-users">
        <button>Encontrar usuários</button>
      </Link>
      <RepositoryCard />
    </div>
  </main>;
}
