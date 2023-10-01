import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const homesecounter = useNavigate()

    // function homeToCounter(){

    // }
  return (
    <>
        <div>Home</div>
        <button onClick={()=>homesecounter('/counter')}>go to counter</button>
    </>
  )
}

export default Home;