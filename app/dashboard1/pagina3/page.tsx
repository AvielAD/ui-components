'use client'
import BarBannerNew from '@/components/barbanner'
import ElementList from '@/components/elementlist'

const Index = () => {

    const DefButton = {
        action: () => { console.log("Impresion Ejemplo") },
        title: "Agregar",
        icon: "bi bi-node-plus",
        disabled: false
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <BarBannerNew 
            button={DefButton} 
            title={{ message: "Ingreso de Mercancia", icon: "bi bi-shop" }} 
            messages={Messages}></BarBannerNew>
            <div className='grid gap-6'>
                {
                    datacompras ? datacompras.map((item, index:number) =>
                        (<ElementList {...item} key={index} ></ElementList>)) : <></>
                }
            </div>

        </div>
    )
}

export default Index

const Messages = [
    { title: "Fecha", message: "12/04/2015" },
    { title: "Comprador", message: "Pepe productor" },
    { title: "Estado", message: "Completado" },
    //{title: "Estado", message: "Completado"},
    //{title: "Estado", message: "Completado"},
    //{title: "Estado", message: "Completado"}
]

const datacompras = [
    {
        title: "Compra 1",
        state: { info: "DONE", message: "Completado" },
        messages: [
            { title: "Fecha", message: "13/04/2025" },
            { title: "Comprador", message: "Pepe Productor" }

        ],
        bannermessage: "$1500 mxn",
        buttons: [
            { action: () => { }, title: "Ver detalles", disabled: false },
            { action: () => { }, title: "Completar", disabled: false },
            { action: () => { }, title: "Eliminar", disabled: true }
        ]
    },
    {
        title: "Compra 2",
        state: { info: "PAUSE", message: "Pausado" },
        messages: [
            { title: "Fecha", message: "111/04/2025" },
            { title: "Comprador", message: "Juan Productor" }

        ],
        bannermessage: "$1200 mxn",
        buttons: [
            //{ action: () => { }, title: "Ver detalles", disabled: false },
            //{ action: () => { }, title: "Completar", disabled: false },
            //{ action: () => { }, title: "Eliminar", disabled: false }
        ]
    },
    {
        title: "Compra 3",
        state: { info: "START", message: "Iniciado" },
        messages: [
            { title: "Fecha", message: "111/04/2025" },
            { title: "Comprador", message: "Juan Productor" }

        ],
        bannermessage: "$1200 mxn",
        buttons: [
            { action: () => { }, title: "Ver detalles", disabled: false },
            { action: () => { }, title: "Completar", disabled: false },
            { action: () => { }, title: "Eliminar", disabled: false },
        ]
    },
    {
        title: "Compra 3",
        state: { info: "CANCEL", message: "Cancelado" },
        messages: [
            { title: "Fecha", message: "111/04/2025" },
            { title: "Comprador", message: "Juan Productor" }

        ],
        bannermessage: "$1200 mxn",
        buttons: [
            { action: () => { }, title: "Ver detalles", disabled: false },
            { action: () => { }, title: "Completar", disabled: false },
            { action: () => { }, title: "Eliminar", disabled: false },
        ]
    }
]
/*
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
]*/