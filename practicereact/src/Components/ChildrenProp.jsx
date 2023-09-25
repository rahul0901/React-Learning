const ChildrenProp = () => {
    return (
        <>
            <P>This is p tag..</P>
            <H1>this is h1</H1>
            <SPAn>this is span</SPAn>
            <Atag>this is anker tag</Atag>
        </>
    )
}

const P = ({ children }) => {
    return (
        <p>{children}</p>
    )
}

const H1 = ({ children }) => {
    return (
        <>
            <p>{children}</p>
            <h1>{children}</h1>
        </>
    )
}

const SPAn = ({ children }) => {
    return (
        <>
            <a>{children}</a>
            <h1>{children}</h1>
        </>
    )
}

const Atag = ({ children }) => {
    return (
        <>
            <span>{children}</span>
            <h1>{children}</h1>
        </>
    )
}

export default ChildrenProp;