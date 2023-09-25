import { useNavigate } from "react-router-dom";

const Home = () =>{

    const route = useNavigate();

    function goToLoginPage(){
        route('/login')
    }

    return(
        <>
        <div>Homepage</div>
        <button onClick={goToLoginPage}>Login here</button>
        <button onClick={()=> route('/counter')}>Counter Page</button>
        </>
    )
}

export default Home;