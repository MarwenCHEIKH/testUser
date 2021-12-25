import "./userPosts.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";


export default function UserList() {
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
  



  
  const columns = [
    { field: "id", headerName: "ID", width: 40 },

    { field: "name", headerName: "name", width: 120, },
    
    { field: "username", headerName: "Username", width: 120, },
    
    { field: "email", headerName: "Email", width: 200  },

      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/post/" + params.row.id}>
                <button className="userListPost">Posts</button>
              </Link>
            </>
          );
        },
      },
    
    
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
