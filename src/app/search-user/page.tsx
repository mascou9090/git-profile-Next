"use client";

import Image from "next/image";
import RepositoryCard from "../components/RepositoryCard";
import UserProfile from "../components/UserProfile";
import styles from "./styles.module.scss";
import NotFoundImage from "../assets/not-found-.svg";
import { use, useState } from "react";
import { GithubProfileType } from "../types/GithubProfileTypes";
import { GithubReposType } from "../types/GithubReposType";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState<GithubProfileType | null>(null);
  const [repos, setRepos] = useState<GithubReposType[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearchUser() {
    if (!searchInput) return;

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.github.com/users/${searchInput}`
      );
      const data: GithubProfileType = await response.json();

      setUser(data);

      const responseRepos = await fetch(
        `http://api.github.com/users/${data.login}/repos`
      );
      const dataRepos: GithubReposType[] = await responseRepos.json();

      setRepos(dataRepos.slice(0, 6));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    return (
      <main className={styles.main}>
        <div className={styles["main--search"]}>
          <input type="text" placeholder="Nome de usuário" 
          onChange={(e) => setSearchInput(e.target.value)} value={searchInput}/>
          <button className="btn--green" onClick={handleSearchUser}>Buscar</button>
        </div>

        <div className={styles["main--body"]}>
          {user ? (
            <div>
              <UserProfile profile={user} />
              <div>
                <div className={styles["container-projects"]}>
                {repos.map((repos) => (
                    <RepositoryCard repos={repos} key={repos.id} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="not-found">
              <Image
                src={NotFoundImage}
                alt="not found"
                width={400}
                height={439}
              />
              <h3>Nenhum usuário foi encontrado!</h3>
            </div>
          )}
        </div>
      </main>
    );
  }
}
