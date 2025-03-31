'use client'
import TableNew from '@/components/tablas/table'
import BarBannerNew from '@/components/barbanner'

const Index = () => {

    const DefButton ={
        action: () => {console.log("Impresion Ejemplo")},
        title: "Agregar Categoria",
        icon: "bi bi-node-plus"
    }
    return (
        <div className='max-w-screen-xl'> 
            <BarBannerNew button={DefButton} title='Reparaciones' starmessage='Filtrado' arrowmessage='Estados'></BarBannerNew>
            <TableNew elements={datainfo}></TableNew>
        </div>
    )
}

export default Index

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