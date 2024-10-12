const Index = () => {
    return (
        <div className="h-full pb-16 overflow-y-auto">
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Forms</h2>
                <a
                    className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                    href=""
                >
                    <div className="flex items-center">
                        <i className="mr-2 bi bi-star"></i>
                        <span>Agrerar</span>
                    </div>
                    <span>Reparación <i className="ml-2 bi bi-arrow-right"></i></span>
                </a>
                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <label className="block text-sm">
                        <span className="text-gray-700 dark:text-gray-400">Name</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                    <label className="block text-sm">
                        <span className="text-gray-700 dark:text-gray-400">Name</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                    <label className="block text-sm">
                        <span className="text-gray-700 dark:text-gray-400">Name</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                    <label className="block text-sm">
                        <span className="text-gray-700 dark:text-gray-400">Name</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Index