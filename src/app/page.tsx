import Link from "next/link";
import RepositoryCard from "./components/RepositoryCard";
import UserProfile from "./components/UserProfile";
import styles from "./page.module.scss";

export default function Home() {
  return <main className={styles.main}>
    <UserProfile/>
    <div>

      <Link href="/serach-users">
        <button className="btn--green">Encontrar usuários</button>
      </Link>

      <div className={styles["container-projects"]}>
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </div>
    </div>
  </main>;
}
