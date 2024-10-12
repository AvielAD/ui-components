const Index = (props: { title: string, starmessage: string, arrowmessage: string }) => {
    return (
        <div className="container grid px-6 mx-auto">
            <h2
                className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
                {props.title}
            </h2>
            <a
                className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                href=""
            >
                <div className="flex items-center">
                    <i className="bi bi-star mr-2"></i>
                    <span>{props.starmessage}</span>
                </div>
                <span>{props.arrowmessage} <i className="bi bi-arrow-right"></i></span>
            </a>
        </div>

    )
}

export default Index