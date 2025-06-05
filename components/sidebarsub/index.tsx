import Link from "next/link"
import { useState } from "react"

const Index = (props: {
    titledashboard?: string,
    subtitledashboard?: string,
    routedashboard?: string,
    routes: Array<{
        //route: string,
        nameroute: string,
        icon: string,
        submenus?: Array<{ name: string, uri: string }>
    }>, actions?: Array<{
        nameaction: string,
        action: boolean, setaction: () => void
    }>
}) => {
    const [dropdown, setDropdown] = useState<Array<{ show: boolean, name: string }>>([])

    const Button = (value: string) => {
        if (dropdown?.some(x => x.name === value))
            setDropdown(dropdown.map(element => {
                if (element.name === value) {
                    return { ...element, show: !element.show }
                } return element
            }))

        else
            setDropdown([...dropdown, { name: value, show: true }])
    }

    return (
        <div className="h-full fixed bg-secondary-50 z-50">
            <aside className="h-full bg-white flex justify-center items-start" onClick={(e) => e.stopPropagation()}>
                <div className="py-4 text-secondary-500 ">
                    <Link className="ml-6 text-lg   " href={props.routedashboard ?? "/"}>
                        <h1 className="font-bold">{props.titledashboard}</h1>
                        <span className="text-xs ">{props.subtitledashboard}</span>
                    </Link>
                    <ul className="mt-6">
                        {
                            props.routes.map((item, index) => (
                                <li key={index} className="px-6 py-4">
                                    <button
                                        onClick={() => Button(item.nameroute)}
                                        className="inline-flex items-center justify-between w-[170px] text-sm font-semibold bg-theme5 text-white px-2 py-2 rounded-lg "
                                    >
                                        <i className={`${item.icon} text-lg`}></i>
                                        <span className="ml-4 w-full text-start">{item.nameroute}</span>

                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <ul 
                                        className={`duration-500 transition-all transition-discrete ease-in-out h-0 ${dropdown?.some(x => x.name === item.nameroute && x.show) ? "h-full" : "h-0"} grid grid-cols-1 `}>
                                        {
                                            item.submenus?.map((item, index) => (

                                                <Link className="py-2 px-2 w-full text-start hover:bg-theme5 hover:text-white rounded-lg" href={item.uri} key={index}>{item.name}</Link>
                                            ))

                                        }
                                    </ul>
                                </li>
                            ))

                        }
                    </ul>
                    {
                        props.actions?.map((item, index) => (
                            <div key={index} className="px-6 my-6">
                                <button onClick={() => item.setaction()} className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-theme3-600 border border-transparent rounded-lg active:bg-theme3-600 hover:bg-theme3-700 focus:outline-none focus:shadow-outline-theme3">
                                    {item.nameaction} <span><i className="bi bi-plus-square"></i></span>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </aside>

        </div>
    )
}

export default Index