'use client'
import ModalNew from '@/components/modal'
import { useState } from 'react'
const Index = ()=>{
    const [show, setShow]= useState(false)
    console.log(show)
    return (
        <>
            Pagina 1
            <button onClick={()=>setShow(true)}
                className='border border-blue-600 rounded-lg'>Modal</button>
            
            <ModalNew show={show} close={()=>setShow(false)}>
                modal
            </ModalNew>
        </>
    )
}

export default Index