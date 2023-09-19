import { useNavigate } from "react-router-dom";

const Params = () => {
    const helpRouting = useNavigate()
    function goToProduct() {
        helpRouting('/product')
    }

    return (
        <div>
            <h1>Params</h1>
            <button onClick={goToProduct}>Go to product page</button>
        </div>
    )
}

export default Params;