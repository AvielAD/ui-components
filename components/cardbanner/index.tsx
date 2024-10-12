const Index = (props: { title: string, value: string, icon: string }) => {
    return (
        <div className="">
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div
                    className="p-4 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                >
                    <i className={props.icon}></i>
                </div>
                <div className="">
                    <p
                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        {props.title}
                    </p>
                    <p
                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                    >
                        {props.value}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Index