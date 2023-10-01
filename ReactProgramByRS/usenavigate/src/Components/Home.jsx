import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const goto = useNavigate()

    function goToSecondPage(){
        goto('/secondpage')
    }

  return (
    <>
        <div>Home</div>
        <button onClick={goToSecondPage}>Go to Second page..</button>
        <button onClick={()=>goto('/thirdpage')}>Go to Third page..</button>
    </>
  )
}

export default Home;