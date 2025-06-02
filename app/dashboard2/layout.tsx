'use client'
import SideBarNew from '@/components/sidebarsub'
import useToast from "@/components/customhooks/useToast"
import ToastNew from '@/components/toast'
import HeaderBarNew from '@/components/headerbarsub'

export default function Index({ children, }: { children: React.ReactNode }) {
    const Toast1 = useToast();
    return (
        <div className="grid grid-cols-sidebar grid-rows-header lg:grid-cols-sidebarlx lg:grid-rows-headerlx gap-4 h-screen bg-secondary-100">
            <ToastNew Show={Toast1.toast.show} ServerMessage={Toast1.toast.response}></ToastNew>
            <div className="hidden lg:grid lg:row-span-2 text-center p-2 h-full">
                <SideBarNew routes={routes} 
                titledashboard='SBM' 
                subtitledashboard='SISTEMA DE BIENES MUEBLE'
                routedashboard='/dashboard2'
                ></SideBarNew>
            </div>
            <div className="">
                <HeaderBarNew routes={routes} ></HeaderBarNew>
            </div>
            <div className="p-2">
                {children}
            </div>
        </div>
    )
}


const routes = [
    {
      //route: "/dashboard2/administrador",
      nameroute: "Administrador",
      icon: "bi bi-person-fill-lock",
      submenus: [
        {name: "Catalogos", uri:"/dashboard2/administrador/catalogos"},
        {name: "Dependencias", uri:"/dashboard2/administrador/dependencias"},
        {name: "Empleados", uri:"/dashboard2/daministrador/empleados"},
        {name: "Proveedor", uri:"/dashboard2/proveedor"},
        {name: "Unidad Responsable", uri:"/dashboard2/unidadresponsable"},
        {name: "Usuarios", uri:"/dashboard2/usuarios"},
    ]
    },
    {
      //route: "/dashboard2/bienesmueble",
      nameroute: "Bien Mueble",
      icon: "bi bi-archive",
      submenus: [
        {name: "Alta Manual", uri:"/dashboard2/administrador/catalogos"},
        {name: "Alta por Tranferencia", uri:"/dashboard2/administrador/dependencias"},
    ]
    },
    {
      //route: "/dashboard2/documentacion",
      nameroute: "Documentacion",
      icon: "bi bi-file-earmark-text-fill"
    },
    {
      //route: "/dashboard2/vehiculos",
      nameroute: "Vehiculos",
      icon: "bi bi-car-front-fill"
    },
  ]


  