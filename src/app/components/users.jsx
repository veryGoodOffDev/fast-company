import React from "react";
import User from "./user";

const Users = ({users, onBookMark, onDelete}) => {
    // const [users, setUsers] = useState(api.users.fetchAll());
    // let badgeClass = "badge m-2 bg-";
    // const handleDelete = (id) => {
    //     setUsers((prevState) => prevState.filter((user) => user._id !== id));
    //     console.log(id);
    //   };
    // const renderPhrase = (number) => {
    //     if(number>=2 && number <=4) {
    //       return <span className="badge bg-primary">{number} человека тусанет с тобой сегодня</span>
    //     } else if(number===1) {
    //       return <span className="badge bg-primary">{number} человек тусанет с тобой сегодня</span>
    //     } else if(number>=5) {
    //       return <span className="badge bg-primary">{number} человек тусанут с тобой сегодня</span>
    //     } else if(number<1) {
    //       return <span className="badge bg-danger">Никто сегодня не тусанет с тобой</span>
    //     }
    // }

    // const renderQualities = (qualities) => {
    //   return  qualities.map((quality) => (
    //         <span className={badgeClass + quality.color} key={quality._id}>
    //         {quality.name}
    //       </span> 
    //   ))
    // }
     
    // const handleFavorite = (id) => {
    //  const newUsers = users.map((item) => {
    //    if(item._id === id) {
    //     item.backgroundStyle = {favoriteClass}
    //     item.backgroundStyle === {favoriteClass}
    //     ? (item.backgroundStyle = {favoriteClass}+"-heart")
    //     : (item.backgroundStyle = {favoriteClass});
    //     console.log(favoriteClass)
    // return item;
        
    //    }
    //    setUsers(newUsers)
    //  })
    // }
    // const renderUsers = () => {
    //     return users.map((user)=> (
    //        <tr key={user._id}>
    //           <td>{user.name}</td>
    //           <td>{renderQualities(user.qualities)}</td>
    //           <td>{user.profession.name}</td>
    //           <td>{user.completedMeetings}</td>
    //           <td>{user.rate}/5</td>
    //           <td><button className={favoriteClass} onClick={() => handleFavorite(user.id)}></button></td>
    //           <td><button 
    //           className="btn btn-danger"
    //           onClick={() => handleDelete(user._id)}
    //           >Delete</button></td>
    //         </tr>    
    //     ))
    // }
    return (
        <>
        {users.length?
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col">Убрать</th>
                </tr>
            </thead>
            <tbody>  
            {users.map((user, id) => (
                            <User {...user} key={id} onBookMark = {onBookMark} onDelete = {onDelete}  />
                        ))}       
            </tbody>
        </table>
        :""}
        </>
    );
}

export default Users;

