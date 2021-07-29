import React from 'react';
import AcoordionItem from './AcoordionItem';
import Data from './Data';

const Accordion = () => {
   
    return (
        <div>
        {
        Data.map((item) => {
            const {id}= item;
            return <AcoordionItem key ={id} {...item}/>;
        })
        }

        </div>
    );
};

export default Accordion;