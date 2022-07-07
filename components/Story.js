import Link from "next/link";

export default function Story({ item }) {
    return (
        <div className="flex flex-col pt-3 px-5 gap-2">
            <Link href={item.url ? item.url : ''}>
                <a>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                </a>
            </Link>
            <div className="flex flex-row place-content-between">
                <span>{item.domain}</span>
            </div>
        </div>
    )
}