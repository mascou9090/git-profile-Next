import { GithubReposType } from "@/app/types/GithubReposType";
import styles from "./styles.module.scss";

interface IProps {
    repos: GithubReposType;
}

export default function RepositoryCard({repos}: IProps) {
    return (
        <div className={styles.container}>
           <h3>{repos.name}</h3>
           <p>{repos.description}</p>
        </div>
    )
}