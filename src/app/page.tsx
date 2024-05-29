import Link from "next/link";
import RepositoryCard from "./components/RepositoryCard";
import UserProfile from "./components/UserProfile";
import styles from "./page.module.scss";
import { GithubProfileType } from "./types/GithubProfileTypes";
import { GithubReposType } from "./types/GithubReposType";

export default async function Home() {

  const response = await fetch('https://api.github.com/users/mascou9090');

  const data: GithubProfileType = await response.json();

  const responseRepos = await fetch(`https://api.github.com/users/${data.login}/repos`)

  const dataRepos: GithubReposType[] = await responseRepos.json();

  return <main className={styles.main}>
    <UserProfile isMyProfile />
    <div>

      <Link href="/search-user">
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
