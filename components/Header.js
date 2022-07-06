import Link from "next/link";
import Github from "../icons/Github";

export default function Header() {
    return (
        <div className="sticky flex items-center place-content-between px-5 pt-7">
            <h1 className="text-3xl font-black">Hacker News</h1>
            <div>
                <Link href="https://github.com/etonomick/hacker-news-client-next"><a><Github /></a></Link>
            </div>
        </div>
    )
}