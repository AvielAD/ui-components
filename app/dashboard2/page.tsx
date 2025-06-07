'use client'
import MultiTab from '@/components/multitab'

const Page = () => {

    return (<div className="max-w-2xl">
        <MultiTab names={["Documentos Adquisicion","Caracteristicas", "Asignacion"]}>
            <input className='p-2 rounded ring1 ring-danger-400 w-full' type="text" placeholder='Nombre' />
            <input className='p-2 rounded ring1 ring-danger-400' type="text" placeholder='Email' />
            <input className='p-2 rounded ring1 ring-danger-400' type="text" placeholder='rfc' />
        </MultiTab>

    </div>)
}

export default Page