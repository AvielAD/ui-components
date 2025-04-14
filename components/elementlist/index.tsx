interface infomessages {
    title: string,
    message: string
}
interface buttonsaction {
    action: () => void,
    title: string
}

const StatusInfo = {
    "DONE": "bg-success-200 text-success-800",
    "PAUSE": "bg-theme5-200 text-theme5-800",
    "CANCEL": "bg-danger-200 text-danger-800",
    "START": "bg-primary-200 text-primary-800",
}
const getStatusInfo = (obj: Record<string, string>, clave: string) => {
    return obj[clave]
}

const Index = (props: {
    title: string,
    state: { info: string, message: string }
    messages: Array<infomessages>,
    bannermessage: string,
    buttons: Array<buttonsaction>
}) => {
    if (props.buttons.length > 3) throw ("limit 3 elements")
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 rounded-lg bg-white px-4 py-6 shadow-lg">
            <div className="col-start-1 col-end-3">
                <div className="grid grid-rows-2 gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-2xl font-bold">{props.title}</span>
                        <span className={`${getStatusInfo(StatusInfo, props.state.info)} rounded-full w-[90px] h-[30px] flex justify-center items-center`}>{props.state.message}</span>

                    </div>
                    <div className="">
                        {props.messages ? props.messages.map((item, index) => (
                            <div className="inline-flex pr-2" key={index}>
                                <span>{item.title}:</span>
                                <p>{item.message}</p>
                            </div>
                        )) : null}
                    </div>

                </div>
            </div>
            <div className="col-start-3 col-end-7 md:col-start-4 md:col-end-7">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <span className="text-xl">{props.bannermessage}</span>
                    {
                        props.buttons ? props.buttons.map((item, index) => (
                            <button key={index} className="border border-solid border-theme1-500 rounded-lg text-theme1-500 p-1">
                                {item.title}
                            </button>))
                            : null
                    }

                </div>
            </div>
        </div>)
}

export default Index