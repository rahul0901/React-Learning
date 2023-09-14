import { useState } from "react";

// es6 js format for calling function 

// arrow function 

const Instagram = ()=>{

    const [likes, setcounter] = useState(0);
    const [comments, setcounter1] = useState(0);


    return(
        <div>
            <h1>Instagram - {likes +' '+ "Likes" + ' '+ comments +' '+ "Comments"}</h1>
            <button onClick={()=> setcounter((increaselike)=>increaselike+1)}>Likes</button>
            <button onClick={()=> setcounter((decreaselike)=>decreaselike-1)}>DisLikes</button>
            <button onClick={()=> setcounter1((increasecomment)=>increasecomment+1)}>Comments</button>
        </div>
    )
}

export default Instagram;