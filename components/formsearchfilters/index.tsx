import { useState } from "react"

const Index = (props: {
    children: JSX.Element,
    showFilters: { show: boolean, setShow: () => void }
    datainput: {setValue: (value:string)=>void}
}) => {
    const [datainput, setDataInput]= useState("")
    const SetValue = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            props.datainput.setValue(datainput)
        }
    }

    return (    
        <div className="">
                <div className="grid grid-cols-[80%_20%] gap-2 w-full">
                    <div className="w-full flex justify-start border-secondary-200 border-solid border-2 rounded-lg">
                        <div className="w-full inline-flex pl-2">
                            <i className="bi bi-search h-4 w-4 "></i>
                            <input className="w-full px-2 outline-none" type="search" 
                            onChange={(e)=>setDataInput(e.target.value)} 
                            onKeyDown={SetValue}
                            value={datainput}
                            placeholder="Search" />
                        </div>
                    </div>
                    <div className="border-2 border-solid border-secondary-200 rounded-lg">
                        <button onClick={() => props.showFilters.setShow()} className="">Filtros</button>
                    </div>
                </div>

            <div className={`${props.showFilters.show ? "" : "hidden"} relative`}>
                <div className="absolute top-4 right-0 rounded-lg shadow-lg bg-white p-2">
                    {props.children ?? <></>}
                </div>
            </div>
        </div>
    )
}

export default Index