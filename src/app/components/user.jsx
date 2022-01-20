import React from "react";
import BookMark from "./bookmark";
import Qualities from "./qualities";
const User = ({
    _id,
     name,
    profession,
    rate,
    completedMeetings,
    qualities,
    bookmark,
    onBookMark,
    onDelete,

    }) => {
        // console.log(bookmark)
        // console.log(qualities)
            return (
                <tr>
                  <td>{name}</td>
                  <td>{qualities.map((qual) => (
                      <Qualities key={qual._id} {...qual}/>
                  ))}</td>
                  <td>{profession.name}</td>
                  <td>{completedMeetings}</td>
                  <td>{rate}/5</td>
                  <td><BookMark 
                  status = {bookmark}
                  onBookMark={onBookMark}
                  id = {_id}
                  /></td>
                  <td><button 
                  onClick={()=> onDelete(_id)}
                  className="btn btn-danger"
                  >Delete</button>
                  </td>
                </tr> 
                )
            }
export default User;


