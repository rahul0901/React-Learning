import React from 'react';
import './Mapping.css';

const Mapping = (props) => {
    const { Products, Title, Price } = props;
    return (
        <>
            <div className="screen">
                <div className="parent">
                    <div className="child">
                        {Products.map((item, index) => (
                            <div key={index}>
                                <h2>{item}</h2>
                                <h3>{Title[index]}</h3>
                                <h4>{Price[index]}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mapping