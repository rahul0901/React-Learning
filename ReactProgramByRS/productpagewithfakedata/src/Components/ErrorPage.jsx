import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const route = useNavigate();

    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((preCountdown) => preCountdown - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            route('/')
        }, 5000);

        return ()=>{
            clearInterval(timer)
        }
    },[route])

    return (
        <>
            <h2>Page not Found</h2>
            <h4>Redirecting you in {countdown} seconds </h4>
        </>
    )
}

export default ErrorPage