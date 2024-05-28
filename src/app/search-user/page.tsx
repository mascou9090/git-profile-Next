"use client"

import Image from "next/image";
import RepositoryCard from "../components/RepositoryCard";
import UserProfile from "../components/UserProfile";
import styles from "./styles.module.scss";
import NotFoundImage from "../assets/not-found-.svg";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(true);
  return (
    <main className={styles.main}>
      <div className={styles["main--search"]}>
        <input type="text" placeholder="Nome de usuário" />
        <button className="btn--green">Buscar</button>
      </div>

      <div className={styles["main--body"]}>
        { user ? (
        <div>
          <UserProfile />
          <div>
            <div className={styles["container-projects"]}>
              <RepositoryCard />
              <RepositoryCard />
              <RepositoryCard />
              <RepositoryCard />
              <RepositoryCard />
              <RepositoryCard />
            </div>
          </div>
        </div>
         ) : (
        <div className={styles["not-found"]}>
          <Image src={NotFoundImage} alt="not found" width={400} height={439}/>
          <h3>Nenhu usuário foi encontrado!</h3>
        </div>
    )}
      </div>
    </main>
  );
}
