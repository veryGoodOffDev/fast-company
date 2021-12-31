import React, { useState } from "react";
import api from "../api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    let badgeClass = "badge m-2 bg-";
    

    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
        console.log(id);
      };
    const renderPhrase = (number) => {
        if(number>=2 && number <=4) {
          return <span className="badge bg-primary">{number} человека тусанет с тобой сегодня</span>
        } else if(number===1) {
          return <span className="badge bg-primary">{number} человек тусанет с тобой сегодня</span>
        } else if(number>=5) {
          return <span className="badge bg-primary">{number} человек тусанут с тобой сегодня</span>
        } else if(number<1) {
          return <span className="badge bg-danger">Никто сегодня не тусанет с тобой</span>
        }
    }

    const renderQualities = (qualities) => {
      return  qualities.map((quality) => (
            <span className={badgeClass + quality.color}>
            {quality.name}
          </span> 
      ))
    }

    const renderUsers = () => {
        return users.map((user)=> (
           <tr key={user._id}>
              <td>{user.name}</td>
              <td>{renderQualities(user.qualities)}</td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td><button 
              className="btn btn-danger"
              onClick={() => handleDelete(user._id)}
              >Delete</button></td>
            </tr>    
        ))
    }
    return (
        <>
        <h1>{renderPhrase(users.length)}</h1>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>    
                    {renderUsers()}        
            </tbody>
        </table>
        </>
    );
}

export default Users;