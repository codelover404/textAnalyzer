import React, { useState } from 'react';

export default function Practice(props) {

    const [num, newNum] = useState(0);

    function change() {
        newNum(num + 1);
    }
    
    function reset(){
        newNum(0);
    }
    return (
        <>

                <main>
                <div className="circle"onClick={change}   >
                    <h1>{num}</h1>
                    {/* <button type="button" onClick={change} className="btn btn-primary btn-lg">Change</button> */}
                    <span  className="mb-5">Click</span>
                </div>
                <p  onClick={reset} className="btn-danger btn mt-3">Reset</p>

            </main>
 
        </>
    )
}
