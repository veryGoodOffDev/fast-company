import React from "react";

const BookMark = ({status, onBookMark, id}) => {
    return <button className={status?"bi bi-heart-fill":"bi bi-heart"} onClick = {() => {onBookMark(id)}}></button>
}

export default BookMark
