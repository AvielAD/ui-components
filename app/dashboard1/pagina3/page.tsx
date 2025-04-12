'use client'
import TableNew from '@/components/tablas/table'
import BarBannerNew from '@/components/barbanner'

const Index = () => {

    const DefButton ={
        action: () => {console.log("Impresion Ejemplo")},
        title: "Agregar",
        icon: "bi bi-node-plus"
    }
    return (
        <div className='max-w-screen-xl mx-auto'> 
            <BarBannerNew button={DefButton} title='Reparaciones' messages={Messages}></BarBannerNew>
            <TableNew elements={datainfo}></TableNew>
        </div>
    )
}

export default Index

const Messages = [
    {title: "Fecha", message: "12/04/2015"}, 
    {title: "Comprador", message: "Pepe productor"},
    {title: "Estado", message: "Completado"},
    //{title: "Estado", message: "Completado"},
    //{title: "Estado", message: "Completado"},
    //{title: "Estado", message: "Completado"}
]


const datainfo = [
    
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
    {
        title: "A20 samsung",
        status: "Iniciado",
        fecha1: "10 oct 2024",
        fecha2: "11 oct 2024"
    },
]