
const Index = (props: {Show: boolean, ServerMessage: {Succedded: boolean, Message: string}}) => {
    //${props.Show ? "visible": "invisible"}
    return (
    <div className={`${props.Show ? "absolute": "hidden"} mt-20 z-40 right-8 text-xs sm:text-base
    ${props.ServerMessage.Succedded ? "bg-success-100" : "bg-danger-100"} 
    ${props.ServerMessage.Succedded ? "text-success-700" : "text-danger-700"} rounded-lg 
    ${props.ServerMessage.Succedded ? "border-success-200" : "border-danger-200"} px-4 py-3`}>
        <div>
            <div className=''>
                <div className=''>
                    <p>{props.ServerMessage.Message}</p>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Index