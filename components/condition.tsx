type Props = {
    value: boolean,
    children: React.ReactNode
}

export default ({children,value} : Props) => {
    return <div className={`${value ? "" : "hidden"}`}>
        {children} 
    </div>
}