import React from "react";

const Qualities = ({...qual}) => {
    // console.log(qual)
    return <>
        <span className={"badge m-2 bg-"+ qual.color}> {qual.name}</span>
        </>
}

export default Qualities;