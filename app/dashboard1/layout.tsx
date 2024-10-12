'use client'
import { useState } from "react"
import SideBarNew from '@/components/sidebar'
import HeaderBarNew from '@/components/haderbar'
import ModalNew from '@/components/modal'

export default function Index({ children, }: { children: React.ReactNode }) {
    const [showModalRepair, setShowModalRepair] = useState(false)
    const [showModalDiag, setShowModalDiag] = useState(false)
  
    const setActionModalRepair = async () => {
      setShowModalRepair(!showModalRepair)
    }
  
    const setActionModalDiag = async () => {
        setShowModalDiag(!showModalDiag)
    }
    const actions = [
      {
        nameaction: "Agregar Reparacion",
        action: showModalRepair,
        setaction: setActionModalRepair
      },
      {
        nameaction: "Agregar Diagnostico",
        action: showModalDiag,
        setaction: setActionModalDiag
      }
    ]
    return (
        <div className="grid grid-cols-sidebar grid-rows-header lg:grid-cols-sidebarlx lg:grid-rows-headerlx gap-4 h-screen">
            <ModalNew show={showModalRepair} close={()=>setActionModalRepair()}>
                Formulario Reparacion
            </ModalNew>

            <ModalNew show={showModalDiag} close={()=>setActionModalDiag()}>
                Formulario Diagonsticos
            </ModalNew>
            <div className="hidden lg:grid lg:row-span-2 text-center p-2">
                <SideBarNew routes={routes} actions={actions}></SideBarNew>
            </div>
            <div className="">
                <HeaderBarNew routes={routes} actions={actions}></HeaderBarNew>
            </div>
            <div className="p-2">
                {children}
            </div>
        </div>
    )
}


const routes = [
    {
      route: "/dashboard1",
      nameroute: "Dashboard",
      icon: "bi bi-house"
    },
    {
      route: "/dashboard1/pagina1",
      nameroute: "Reparaciones",
      icon: "bi bi-wrench-adjustable"
    },
    {
      route: "/dashboard1/pagina2",
      nameroute: "Diagnosticos",
      icon: "bi bi-chat-left-quote"
    },
    {
      route: "/dashboard1/pagina3",
      nameroute: "Reportes",
      icon: "bi bi-file-earmark-bar-graph-fill"
    },
  ]
  