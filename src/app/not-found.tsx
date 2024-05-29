import NotFoundImage from "./assets/not-found-.svg";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="not-found">
            <Image src={NotFoundImage} width={400} height={439} alt="not found"/>
            <h1>404 - Not Found</h1>
        </main>
    )
}