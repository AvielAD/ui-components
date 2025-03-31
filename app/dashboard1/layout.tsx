'use client'
import { useState } from "react"
import SideBarNew from '@/components/sidebar'
import HeaderBarNew from '@/components/haderbar'
import ModalNew from '@/components/modal'
import Form1 from '@/components/formularios/reparacion_add'
import useToast from "@/components/customhooks/useToast"
import ToastNew from '@/components/toast'

export default function Index({ children, }: { children: React.ReactNode }) {
    const [showModalRepair, setShowModalRepair] = useState(false)
    const [showModalDiag, setShowModalDiag] = useState(false)
    const Toast1 = useToast();

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
                <Form1  toast={Toast1.changeToast} closemodal={()=>setActionModalRepair()} ></Form1>
            </ModalNew>

            <ModalNew show={showModalDiag} close={()=>setActionModalDiag()}>
                Formulario Diagonsticos
            </ModalNew>

            <ToastNew Show={Toast1.toast.show} ServerMessage={Toast1.toast.response}></ToastNew>

            <div className="hidden lg:grid lg:row-span-2 text-center p-2 h-full">
                <SideBarNew routes={routes} actions={actions}></SideBarNew>
            </div>
            <div className="">
                <HeaderBarNew uriconfigs={configactions} routes={routes} actions={actions}></HeaderBarNew>
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

  const configactions=[
    {
      uri: "/dashboard1/pagina1",
      name: "Profile",
      icon: "bi bi-person-fill"
    },
    {
      uri: "/dashboard1/pagina1",
      name: "Settings",
      icon: "bi bi-gear-fill"
    },
    {
      uri: "/dashboard1/pagina1",
      name: "Log out",
      icon: "bi bi-box-arrow-left"
    }
  ]
  