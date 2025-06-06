import Link from "next/link"
import { useState } from "react"
import styled from './styles.module.css'

const Index = (props: {
    routes: Array<{
        //route: string, 
        nameroute: string,
        icon: string,
        submenus?: Array<{ name: string, uri: string }>
    }>,
    actions?: Array<{ nameaction: string, action: boolean, setaction: () => void }>,
    uriconfigs?: Array<{ uri: string, name: string, icon: string }>
}) => {

    const [show, setShow] = useState({ toglemenu: false, notimenu: false, profilemenu: false })
    const [dropdown, setDropdown] = useState<Array<{ show: boolean, name: string }>>([])
    

    const closeMenus = () => {
        setShow({ toglemenu: false, notimenu: false, profilemenu: false })
    }

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
        <div className={` ${show.toglemenu ? "fixed top-0 bottom-0 right-0 left-0" : ""}`} onClick={() => closeMenus()}>
            <div className={`backdrop-blur-md ${show.toglemenu ? "absolute h-full no-doc-scroll" : "hidden"} w-full z-50`}>
                <aside onClick={(e) => e.stopPropagation()} className=" bg-white lg:hidden w-64 h-full">
                    <div className="text-secondary-500 ">
                        <Link href={"/"} className="ml-6 text-lg">
                            Empresa
                        </Link>
                        <ul className="mt-6">
                            {
                                props.routes.map((item, index) => (
                                    <li key={index} className="relative px-6 py-3">
                                        <button
                                            //href={item.route}
                                            onClick={() => Button(item.nameroute)}
                                            className="inline-flex items-center justify-between w-[170px] text-sm font-semibold bg-theme5 text-white px-2 py-2 rounded-lg "
                                        >
                                            <i className={`${item.icon}`}></i>
                                            <span className="ml-4">{item.nameroute}</span>
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`${styled.divTransition} ${dropdown?.some(x => x.name === item.nameroute && x.show) ? styled.divTransitionComplete : ""} `}>
                                            <div className={`${styled.divTransitionDiv}`}>
                                            {
                                                item.submenus?.map((item, index) => (
                                                    <Link className="py-2 px-2 w-full text-start hover:bg-theme5 hover:text-white rounded-lg" href={item.uri} key={index}>{item.name}</Link>
                                                ))

                                            }
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            props.actions?.map((item, index) => (
                                <div key={index} className="px-6 my-6">
                                    <button onClick={() => item.setaction()} className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-theme3-600 border border-transparent rounded-lg active:bg-theme3-600 hover:bg-theme3-700 focus:outline-hidden focus:shadow-outline-theme3">
                                        {item.nameaction} <span><i className="bi bi-plus-square"></i></span>
                                    </button>
                                </div>
                            ))
                        }

                    </div>
                </aside>
            </div>

            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col flex-1 w-full">
                <header className="z-10 py-4 bg-white shadow-md rounded-lg">
                    <div className="container flex items-center justify-between lg:justify-end h-full px-6 mx-auto text-theme3-600 ">
                        <button
                            onClick={() => { setShow({ toglemenu: !show.toglemenu, notimenu: false, profilemenu: false }) }}
                            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-hidden focus:shadow-outline-theme3">
                            <i className="bi bi-list"></i>
                        </button>
                        <ul className="inline-flex">
                            <li className="relative mr-5">
                                <button
                                    onClick={() => setShow({ toglemenu: false, notimenu: !show.notimenu, profilemenu: false })}
                                    className="relative align-middle rounded-md ">
                                    <i className="text-theme5 bi bi-bell-fill"></i>
                                    <span
                                        className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-theme4-600 border-2 border-white rounded-full "
                                    ></span>
                                </button>

                                <ul className={`${show.notimenu ? "" : "hidden"} absolute right-0 w-56 p-2 mt-2 space-y-2 text-secondary-600 bg-white border border-secondary-100 rounded-md shadow-md `}>
                                    <li className="flex">
                                        <a
                                            className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold rounded-md hover:bg-secondary-100 hover:text-secondary-800 "
                                            href="#"
                                        >
                                            <span>Messages</span>
                                            <span
                                                className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-theme4-600 bg-red-100 rounded-full "
                                            >
                                                13
                                            </span>
                                        </a>
                                    </li>
                                    <li className="flex">
                                        <a
                                            className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-secondary-100 hover:text-secondary-800"
                                            href="#"
                                        >
                                            <span>Sales</span>
                                            <span
                                                className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-theme4-600 bg-theme4-100 rounded-full "
                                            >
                                                2
                                            </span>
                                        </a>
                                    </li>
                                    <li className="flex">
                                        <a
                                            className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                                            href="#"
                                        >
                                            <span>Alerts</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="relative ">
                                <button
                                    onClick={() => setShow({ toglemenu: false, notimenu: false, profilemenu: !show.profilemenu })}
                                    className="align-middle rounded-full">
                                    <i className="text-theme5 bi bi-person-circle object-cover text-xl w-8 h-8 rounded-full"></i>
                                </button>
                                <ul className={`${show.profilemenu ? "" : "hidden"} absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border rounded-md shadow-md`}>
                                    <div className={`flex-wrap`}>
                                        {
                                            props.uriconfigs?.map((item: { uri: string, name: string, icon: string }, index) => (
                                                <Link key={index} className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md" href={item.uri}>
                                                    <i className={`${item.icon} w-4 h-4 mr-3`}></i>
                                                    <span>
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Index