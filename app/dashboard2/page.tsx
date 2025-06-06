'use client'
import { useState } from "react"
import styled from './styled.module.css'

const Page = () => {
    const [open, setOpen] = useState(false)
    console.log(open)

    return (<div className=" ">
        <button className="cursor-pointer" onClick={() => setOpen(!open)}>Open</button>


        <div className={` ${styled.divTransition} ${open ? styled.divTransitionOne : ""} `}>
            <div >
                <li className=""><a href="">opcion 1</a></li>
                <li className=""><a href="">opcion 2</a></li>   
            </div>
        </div>

    </div>)
}

export default Page