import * as React from 'react';


interface INerFace{
    counter:number;
}
const Helper = (props: INerFace)=>{
    return  (
        <h1>{props.counter}</h1>
    )
}

export default Helper;