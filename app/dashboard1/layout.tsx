export default function Index({ children, }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-sidebar grid-rows-header gap-2 h-screen">
            <div className="row-span-2 content-center text-center border border-black p-2">
                sidebar
            </div>
            <div className="border border-black rounded-lg p-2">
                header bar
            </div>
            <div className="border border-black rounded-lg p-2">
                {children}
            </div>
        </div>
    )
}