import Link from "next/link";

export default function Story({ item }) {
    return (
        <div className="flex flex-col p-0 pt-3 pr-5 gap-2">
            <Link href={item.url ? item.url : ''}>
                <a>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                </a>
            </Link>
            <p>{item.text}</p>
            <div className="flex flex-row place-content-between">
                <span>{item.by}</span>
            </div>
        </div>
    )
}