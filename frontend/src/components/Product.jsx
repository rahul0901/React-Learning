import { useParams } from "react-router-dom";

function Product(){

    const { dynamicslugchangermethod } = useParams();



    return(
        <div>
            <h1>Product Page - {dynamicslugchangermethod}</h1>
        </div>
    )
}

export default Product;