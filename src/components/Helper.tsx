import * as React from 'react';


interface INerFace{
    counter:number;
}
const Helper = (props: INerFace)=>{
    return  (
        <p>{props.counter}</p>
    )
}

export default Helper;