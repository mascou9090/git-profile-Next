import Image from "next/image";
import userGit from "../../assets/userGithub.png";
import styles from "./styles.module.scss";

export default function UserProfile() {
    return (
        <div className={styles.container}>
            <div className={styles["container--avatar"]}>
                <Image src={userGit} width={249} alt="Avatar" height={249} />
            <div>Meu perfil</div>

            </div>

            <h1>Marcondes Ferreira</h1>
            <span>marcondesferreria@test</span>
            <p>Developer: Front end full stack</p>

            <div className={styles["itens-container"]}>
                <span>@mascou9090</span>
                <span>Fortaleza</span>
                <span>mascou@test.com</span>
                <span>carreira@gmail.com</span>
            </div>
        </div>
    )
}