type Props = {
    children: React.ReactNode,
    loading: boolean
}

export default ({children,loading}: Props) => {
    return<>
        <div className={`fixed top-0 left-0 z-30 h-full w-full border bg-white flex items-center justify-center ${loading ? "" : "hidden"}`}>
            Loading...
        </div>
        {children}
    </>
}