interface titlemessage {
    title: string,
    message: string
}
const columnsmessage = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3",
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4",
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5",
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6",
]

const Index = (props:
    {
        title: { message: string, icon: string },
        messages?: Array<titlemessage>,
        button?: { action: () => void, title: string, icon: string, disabled: boolean} | null,
        buttonback?: { action: () => void } | null
    }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-3 my-3">
            <div className="text-start col-start-1 col-end-3">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold inline-flex">
                    <i className={`bg-theme1-500 ${props.title.icon} text-white p-1 rounded-lg mr-2 text-2xl`}></i>
                    {props.title.message}
                </span>
            </div>
            <div className="col-start-3 col-end-4 flex justify-around md:justify-end gap-2">
                {
                    props.buttonback ? 
                    <button className="focus:ring-4 rounded-lg inline-flex p-2 bg-secondary-200"
                        onClick={() => props.buttonback?.action()}>
                        <i className="bi bi-arrow-left pr-2"></i>
                        <p className="">Volver</p>
                    </button> : null
                }

                {
                    props.button ?
                        <button
                            disabled={props.button.disabled}
                            className={`focus:ring-4 rounded-lg inline-flex ${props.button.disabled ? "bg-secondary-500 text-secondary-50" : "bg-theme1-500 text-white"}  p-2`}
                            onClick={() => props.button?.action()}>
                            <i className={`${props.button.icon} pr-2`}></i>
                            <p className="">{props.button.title}</p>
                        </button>
                        : null
                }

            </div>
            <div className="col-start-1 col-end-4 p-4 shadow-lg rounded-lg bg-white">
                <div className={`grid ${(props.messages?.length ?? 0) ? columnsmessage[(props.messages?.length ?? 0) - 1] : columnsmessage[0]} gap-2`}>
                    {
                        props.messages ?
                            props.messages.map((item: titlemessage, index: number) => (
                                <div className="bg-secondary-100 rounded-lg text-left p-2" key={index}>
                                    <span className="text-secondary-600">{item.title}</span>
                                    <p>{item.message}</p>
                                </div>
                            )) : <></>

                    }
                </div>

            </div>
        </div>

    )
}

export default Index