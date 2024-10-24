'use client'
import ModalNew from '@/components/modal'
import { useState } from 'react'
const Index = () => {
    const [show, setShow] = useState(false)
    return (
        <>
        <button onClick={()=>setShow(true)}>Agregar</button>
           <ModalNew show={show} close={()=>setShow(false)}>
            modal
           </ModalNew>
        </>
    )
}

export default Index