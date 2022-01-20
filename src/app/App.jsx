import React, {useState} from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App =()=> {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) =>
 {
    console.log(userId)
   const newUsers = users.filter((user) => user._id!==userId)
   setUsers(newUsers)
 };

 const handleBookmark = (id) => {
   const bookmarks = users.map((item) => {
       if(item._id === id) {
         item.bookmark?item.bookmark = false : item.bookmark = true;
      }
      return item;
   })
   console.log(id,"rere")
   setUsers(bookmarks)
   
 }

 return (
    <>
       <SearchStatus length={users.length}/>
          <Users
          users = {users} 
          onBookMark = {handleBookmark}
          onDelete = {handleDelete}
          />
    </>
 );

}

export default App;