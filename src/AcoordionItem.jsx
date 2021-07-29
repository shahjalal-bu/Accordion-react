import React, { useState } from 'react';


const AcoordionItem = ({question,answer}) => {
    const [show, setShow] = useState(false);
    

    return (
        <div className="accordionContainer">
            <div className="question-con">
                <button onClick={() => setShow(!show)}>{show ===false?"+":"-"}</button>
                <div className="question">{question}</div>
            </div>
            { show && <div className="answer">{answer}</div> }
                     
        </div>
    );
};

export default AcoordionItem;
