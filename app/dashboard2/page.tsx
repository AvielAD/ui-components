'use client'
import { useState } from "react"

const Page = ()=>{
    const [open, setOpen] = useState(false)

    return (<>
        <button onClick={()=>setOpen(!open)}>Open</button>
        <ul className={`duration-500 transition-opacity ${open ? "opacity-100" : "opacity-0 invisible"} `}>
            <li className="duration-300 hover:bg-primary-300"><a href="">opcion 1</a></li>
            <li className="duration-300 hover:bg-primary-300"><a href="">opcion 2</a></li>
        </ul>
    </>)
}

export default Page