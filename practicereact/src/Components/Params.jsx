import { useNavigate } from "react-router-dom";

function Params() {

    const route = useNavigate();

    return ( 
        <>
            <div>
                <h1>Params</h1>
                <button onClick={() => route('/singleproduct/effect2')}>Go to Product</button>
            </div>
        </>
    )
}

export default Params;