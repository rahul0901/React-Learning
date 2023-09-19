import { useNavigate } from "react-router-dom";

function Register() {
    const redirect = useNavigate();

    function goToCounter() {
        redirect('/counter')
    }
    return (
        
        <>
            <div>
                <h1>Register Page</h1>
                <button onClick={() => redirect('/')}>back to home</button>
                <button onClick={goToCounter}>Go To Counter</button>
            </div>
            <div>
                <h1>This is fragment example i.e : return mai sirf ek hi div hona chaiye asa rule tha uske andr hi saab code hona chaiye prr fragment use krke uske undr multiple div create kr skte hai.. //"Fragment Syntax"</h1>
            </div>
            <div>
                <div>child1</div>
                <div>child2</div>
            </div>
        </>
    )
}

export default Register;