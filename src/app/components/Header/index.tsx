import Logo from "../../assets/logo.svg";
import Image from "next/image"
import styles from "./styles.module.scss";
export default function Header() {
    return (
        <header className={styles.header}>
            <Image src={Logo} height={48} width={223} alt="logo"/>
        </header>
    )
}