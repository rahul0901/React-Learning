import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Page404 = () => {

  const [count, setCount] = useState(3);
  const route = useNavigate();

  // useEffect lenge kyuki jab route mai chnages hongi tabhi ye saab functionality ya cide run hona chaiye..toh single dependency route rkha hai..
  useEffect(() => {
    // timer krke variable banaya jisme interval rkhenge ki pr 1 secind counter decreament hona chaiye..
    const timer = setInterval(() => {
      setCount((prevVal) => prevVal - 1)
    }, 1000)

    setInterval(() => {
      clearInterval(timer)
      route('/')
    }, 3000)

    return () => {
      clearInterval(timer)
    }

  }, [route])

  return (
    <>
      <h1>Redirecting you to Homepage in {count} second..</h1>
    </>
  )
}

export default Page404;