import { ServerResponseDto } from "../../customhooks/Dtos/ServerResponse.dto"

const Index = (props: {toast: (params: ServerResponseDto)=>void, closemodal: ()=>void}) => {

    const onSubmit =()=>{
        props.toast({Message: "Agregado Correctamente", Succedded: false})
        props.closemodal()
    }
    return (
        <div className="h-full pb-16 overflow-y-auto">
            <div className="container px-6 mx-auto grid">

                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-secondary-800">
                    <label className="block text-sm">
                        <span className="text-secondary-700 dark:text-secondary-400">Name</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-secondary-600 dark:bg-secondary-700 focus:border-theme3-400 focus:outline-none focus:shadow-outline-theme3 dark:text-secondary-300 dark:focus:shadow-outline-secondary form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                    <label className="block text-sm">
                        <span className="text-secondary-700 dark:text-secondary-400">Name</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-secondary-600 dark:bg-secondary-700 focus:border-theme3-400 focus:outline-none focus:shadow-outline-theme3 dark:text-secondary-300 dark:focus:shadow-outline-secondary form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                    <label className="block text-sm">
                        <span className="text-secondary-700 dark:text-secondary-400">Name</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-secondary-600 dark:bg-secondary-700 focus:border-theme3-400 focus:outline-none focus:shadow-outline-theme3 dark:text-secondary-300 dark:focus:shadow-outline-secondary form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                    <label className="block text-sm">
                        <span className="text-secondary-700 dark:text-secondary-400">Name</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-secondary-600 dark:bg-secondary-700 focus:border-theme3-400 focus:outline-none focus:shadow-outline-theme3 dark:text-secondary-300 dark:focus:shadow-outline-secondary form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                    <button type="submit" className="text-black" onClick={()=>onSubmit()}>aceptar</button>
                </div>

            </div>
        </div>
    )
}

export default Index