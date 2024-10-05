import Link from "next/link"
import { useState } from "react"

const Index = (props: { routes: Array<{ route: string, nameroute: string, icon: string }>, actions: Array<{ nameaction: string, action: boolean, setaction: Function }> }) => {
    const [show, setShow] = useState({ toglemenu: false, notimenu: false, profilemenu: false })

    const closeMenus = ()=>{
        setShow({ toglemenu: false, notimenu: false, profilemenu: false })
        console.log("Close Menus on click")
    }

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900" onClick={()=> closeMenus()}>
            <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0" onClick={(e)=> e.stopPropagation()}>
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="">Empresa</a>
                    <ul className="mt-6">
                        {
                            props.routes.map((item, index) => (
                                <li key={index} className="relative px-6 py-3">
                                    <Link
                                        className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                        href={item.route}
                                    >
                                        <i className={`${item.icon} text-lg`}></i>
                                        <span className="ml-4">{item.nameroute}</span>
                                    </Link>
                                </li>
                            ))

                        }
                    </ul>
                    {
                        props.actions.map((item, index) => (
                            <div key={index} className="px-6 my-6">
                                <button onClick={() => item.setaction()} className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    {item.nameaction} <span><i className="bi bi-plus-square"></i></span>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </aside>

            <div  
            className={`fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${show.toglemenu ? "visible" : "invisible"}`}>
                <aside 
                onClick={(e)=> e.stopPropagation()}
                className="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
                    <div className="py-4 text-gray-500 dark:text-gray-400">
                        <Link href={"/"}>
                            Empresa
                        </Link>
                        <ul className="mt-6">
                            {
                                props.routes.map((item, index) => (
                                    <li key={index} className="relative px-6 py-3">
                                        <Link href={item.route} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
                                            <i className={`${item.icon}`}></i>
                                            <span className="ml-4">{item.nameroute}</span>

                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            props.actions.map((item, index) => (
                                <div key={index} className="px-6 my-6">
                                    <button onClick={() => item.setaction()} className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        {item.nameaction} <span><i className="bi bi-plus-square"></i></span>
                                    </button>
                                </div>
                            ))
                        }

                    </div>
                </aside>
            </div>

            <div 
            onClick={(e)=> e.stopPropagation()}
            className="flex flex-col flex-1 w-full">
                <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
                    <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                        <button
                            onClick={() => { setShow({ toglemenu: !show.toglemenu, notimenu: false, profilemenu: false }) }}
                            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
                            <i className="bi bi-list"></i>
                        </button>

                        <div className="flex justify-center flex-1 lg:mr-32">
                            <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                                <div className="absolute inset-y-0 flex items-center pl-2">
                                    <i className="bi bi-search"></i>
                                </div>
                                <input
                                    className="w-full h-8 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                    type="text"
                                    placeholder="Search for projects"
                                />
                            </div>
                        </div>
                        <ul className="inline-flex">
                        <li className="relative mr-5">
                            <button
                                onClick={() => setShow({ toglemenu: false, notimenu: !show.notimenu, profilemenu: false })}
                                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                                <i className="bi bi-bell-fill"></i>
                                <span
                                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                                ></span>
                            </button>

                            <ul className={`${show.notimenu ? "" : "hidden"} absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700 `}>
                                <li className="flex">
                                    <a
                                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Messages</span>
                                        <span
                                            className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                                        >
                                            13
                                        </span>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a
                                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Sales</span>
                                        <span
                                            className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                                        >
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a
                                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Alerts</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="relative">
                            <button
                                onClick={() => setShow({ toglemenu: false, notimenu: false, profilemenu: !show.profilemenu })}
                                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
                                <i className="bi bi-person-circle object-cover text-xl w-8 h-8 rounded-full"></i>
                            </button>
                            <ul className={`${show.profilemenu ? "" : "hidden"} absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700`}>
                                <li className="flex">
                                    <a
                                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <i className="bi bi-person-fill w-4 h-4 mr-3"></i>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a
                                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <i className="bi bi-gear-fill w-4 h-4 mr-3"></i>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a
                                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <i className="bi bi-box-arrow-left w-4 h-4 mr-3"></i>
                                        <span>Log out</span>
                                    </a>
                                </li>
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