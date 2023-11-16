// Home.js
import React, { useRef, useState } from 'react';
import './Home.css';
import './MediaHome.css'
// import img from './surprise.jpeg';

const Home = () => {
    const [isScratched, setIsScratched] = useState(false);
    const canvasRef = useRef(null);

    const handleScratchStart = () => {
        setIsScratched(true);
    };

    const handleMouseMove = (e) => {
        if (isScratched) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const { left, top } = canvas.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            ctx.fillStyle = '#ccc'; // Grey color
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fill();
        }
    };

    return (
        <div className={`scratch-card ${isScratched ? 'scratched' : ''}`} onMouseMove={handleMouseMove} onMouseDown={handleScratchStart}>
            {isScratched ? (
                // <img src={img} alt="Surprise" className="image" />
                <div className='image' ></div>
                // <video className="video" controls>
                //     <source src="./your-video-file.mp4" type="video/mp4" />
                //     Your browser does not support the video tag.
                // </video>
            ) : (
                <canvas ref={canvasRef} width="300" height="150" className="canvas"></canvas>
            )}
            {!isScratched && <div className="content">Best Place in Khopoli🤩👉</div>}
        </div>
    );
};

export default Home;





// Home.js
// import React, { useRef, useState } from 'react';
// import './Home.css';

// const Home = () => {
//     const [isScratched, setIsScratched] = useState(false);
//     const canvasRef = useRef(null);

//     const handleScratchStart = () => {
//         setIsScratched(true);
//     };

//     const handleMouseMove = (e) => {
//         if (isScratched) {
//             const canvas = canvasRef.current;
//             const ctx = canvas.getContext('2d');
//             const { left, top } = canvas.getBoundingClientRect();
//             const x = e.clientX - left;
//             const y = e.clientY - top;

//             ctx.clearRect(x - 10, y - 10, 20, 20); // Adjust the size of the cleared area
//         }
//     };

//     return (
//         <div className="scratch-card" onMouseMove={handleMouseMove} onMouseDown={handleScratchStart}>
//             {isScratched ? (
//                 <img src={img} alt="Surprise" className="image" />
//             ) : (
//                 <canvas ref={canvasRef} width="300" height="150" className="canvas"></canvas>
//             )}
//             {!isScratched && <div className="content">Scratch to reveal your reward</div>}
//         </div>
//     );
// };

// export default Home;



// // Home.js
// import React, { useState } from 'react';
// import './Home.css';
// // import img from './surprise.jpeg';

// const Home = () => {
//     const [isScratched, setIsScratched] = useState(false);

//     const handleScratch = () => {
//         setIsScratched(true);
//     };

//     return (
//         <div className={`scratch-card ${isScratched ? 'scratched' : ''}`} onClick={handleScratch}>
//             {isScratched ? (
//                 <img src={img} alt="Surprise" className="image" />
//             ) : (
//                 <div className="content">Scratch to reveal your reward</div>
//             )}
//         </div>
//     );
// };

// export default Home;