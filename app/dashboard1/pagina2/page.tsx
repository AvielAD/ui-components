'use client'
import ModalNew from '@/components/modal'
import FormRepair from '@/components/formularios/reparacion_add'
import { useState } from 'react'
const Index = () => {
    const [show, setShow] = useState(false)
    return (
        <>
        <button onClick={()=>setShow(true)}>Agregar</button>
           <ModalNew show={show} close={()=>setShow(false)}>
                <FormRepair></FormRepair>
           </ModalNew>
        </>
    )
}

export default Index