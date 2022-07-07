import Link from "next/link";

export default function Story({ item }) {
    return (
        <div className="flex flex-col pt-5 px-5 gap-2">
            <Link href={item.url ? item.url : ''}>
                <a>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                </a>
            </Link>
            <div className="flex flex-row place-content-between text-gray-400">
                <span>{item.domain}</span>
                <span>{item.by}</span>
            </div>
        </div>
    )
}