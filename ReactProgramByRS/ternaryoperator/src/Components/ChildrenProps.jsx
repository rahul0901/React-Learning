import React from 'react'

const ChildrenProps = () => {
    return (
        <>
            <DIV>yeh mera div tag hai</DIV>
            <SPaN>yeh span hai</SPaN>
        </>
    )
}

const DIV = ({ children }) => {
    return (
        <div style={{ backgroundColor: "red" }}> {children} </div>
    )
}

const SPaN = ({ children }) => {
    return (
        <>
            <span style={{ backgroundColor: "red", marginTop:'20px' }}> {children} </span>
        </>

    )
}

export default ChildrenProps;