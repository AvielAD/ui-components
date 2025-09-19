const Index = (props: { close: ()=>void,show: boolean, children: string | JSX.Element | null}) => {
    
    return (
        <div
        onClick={()=>props.close()} 
        className={`${props.show ? "fixed":"hidden"} inset-0 z-30 flex bg-black opacity-50 items-center justify-center`}>
            <div 
            onClick={(e)=> e.stopPropagation()}
            className="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg">
                <div className="">
                    {props.children}
                </div>

            </div>

        </div>
    )
}
export default Index