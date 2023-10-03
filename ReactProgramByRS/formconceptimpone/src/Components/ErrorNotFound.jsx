import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorNotFound = () => {
    const route = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            route('/');
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [route]);

    return (
        <>
            <div>ErrorNotFound</div>
            <h4>Redirecting you to the homepage in {countdown} seconds...</h4>
        </>
    );
};

export default ErrorNotFound;
