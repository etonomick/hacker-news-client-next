import { Tab, Panel } from "@headlessui/react"
import { useEffect, useState } from "react"

export default function Index() {

    const tabs = ["Best", "New"]
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    useEffect(() => {

    }, [currentTabIndex])

    return (
        <Tab.Group
            onChange={(index) => {
                setCurrentTabIndex(index)
            }}>
            <Tab.List className="flex">
                {tabs.map(tab => (
                    <Tab
                        key={tab}
                        className={({ selected }) => `w-full py-1 border-b-2 ${selected ? "outline:none focus:outline-none border-black font-medium" : "border-gray-300"}`}>{tab}</Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                {tabs.map((tab, index) => {
                    return (
                        <Tab.Panel>
                            {index}
                        </Tab.Panel>
                    )
                })}
            </Tab.Panels>
        </Tab.Group>
    )
}