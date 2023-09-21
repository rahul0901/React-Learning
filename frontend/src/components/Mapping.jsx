import { useNavigate } from "react-router-dom";

// acccess data with props method.. 
const Mapping = (props) => {  //method one.. 
    // const Mapping = ({names}) =>{   //method two..
    console.log(props)       //here it will give all the data in mapping route

    const route = useNavigate();

    function goToHome(){
        route('/')
    }
    const { names } = props;
    console.log(names)  //here all the data inside names will be shown..
    return (
        <div>
            <h1>Mapping</h1>
            {names.map((name, i) => (
                <div key={i}>
                    <h3>Student Name - {name}</h3>
                    <h4>Student id - {i}</h4>
                    {/* <h5>Student grade - "hi"</h5> */}
                </div>
            ))}
            <button onClick={goToHome}>Go to Homepage</button>
        </div>
    )

}

export default Mapping;
