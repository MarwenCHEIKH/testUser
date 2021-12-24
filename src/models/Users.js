import { useState, useEffect } from "react";

export const Users = () => {
const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        setUsers(users);
      }
      catch(err) {
        console.log(err);
      }
    }
    (async () => await fetchUsers())();
},[]);
return users;


}

