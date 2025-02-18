const Index = (props: { title: string, starmessage: string, arrowmessage: string, button: {action: ()=> void , title: string, icon: string} | null}) => {
    return (
        <div className="container grid px-6 mx-auto">
            <h2
                className="my-6 text-2xl font-semibold text-secondary-700 dark:text-secondary-200 flex justify-between"
            >
                <p className="">{props.title}</p> 
                {
                    props.button ? 
                        <button 
                            className="text-white bg-theme3-600 hover:bg-theme3-500 focus:ring-4 rounded-lg px-5 py-2.5 text-center flex align-middle justify-end" 
                            onClick={()=> props.button?.action()}>
                            <i className={`mr-2 text-2xl ${props.button.icon}`}></i>
                            <p className="text-lg">{props.button.title}</p>
                        </button>
                    : null
                }
            </h2>
            <div
                className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-theme3-100 bg-theme3-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-theme3"
            >
                <div className="flex items-center">
                    <i className="bi bi-star mr-2"></i>
                    <span>{props.starmessage}</span>
                </div>
                <span>{props.arrowmessage} <i className="bi bi-arrow-right"></i></span>
            </div>
        </div>

    )
}

export default Index