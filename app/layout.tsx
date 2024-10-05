'use client'
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

import HeaderTop from '@/app/components/headertop'
import { useState } from "react";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const [showModalRepair, setShowModalRepair] = useState(false)
  const [showModalDiag, setShowModalDiag] = useState(false)

  const setActionModalRepair = async () => {
    setShowModalRepair(!showModalRepair)
  }

  const setActionModalDiag = async () => {
    setShowModalRepair(!showModalDiag)
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
    <html lang="en">
      <title>Dashboard</title>
      <body>
        <HeaderTop routes={routes} actions={actions} ></HeaderTop>
        {children}
      </body>
    </html>
  );
}

const routes = [
  {
    route: "/",
    nameroute: "Dashboard",
    icon: "bi bi-house"
  },
  {
    route: "/",
    nameroute: "Reparaciones",
    icon: "bi bi-wrench-adjustable"
  },
  {
    route: "/",
    nameroute: "Diagnosticos",
    icon: "bi bi-chat-left-quote"
  },
]

