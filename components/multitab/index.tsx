import React, { useState } from "react"

const GenTabsStyled = (tam: number) =>{
    return `grid-cols-1 md:grid-cols-${tam}`
}

const Index = (props: { children: React.ReactNode[], names: Array<string> }) => {

    const [dropdown, setDropdown] = useState<{ show: boolean, name: string }>({show: true, name: props.names[0]})

    const Button = (value: string) => {
        setDropdown({ name: value, show: true })
    }
    return (
        <div className="max-w-screen mx-auto shadow-lg rounded-xl p-2">
            <div className={`grid ${GenTabsStyled(props.children.length)} mb-4 border-b border-secondary-200 dark:border-gray-700`}>
                {
                    props.names.map((item: string, index: number) => (
                        <button key={index} 
                        type="button"
                        className={`duration-75 ${dropdown?.name === props.names[index] && dropdown.show ? " border-b-1 border-primary-500" : ""} cursor-pointer inline-block p-4  rounded-t-lg`}
                         onClick={() => Button(item)} >{item}</button>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 grid-rows-1">
                {
                    props.children.map((item: React.ReactNode, index: number) => (
                        <div key={index} className={` ${dropdown?.name === props.names[index] && dropdown.show ? "" : "hidden"}`}>
                            <div className="w-full h-full">{item}</div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Index