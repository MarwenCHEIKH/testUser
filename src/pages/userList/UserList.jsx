import "./userList.css";
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
  
const handleDelete = async (id) => {
  if (window.confirm('Are you sure you want to delete this user?')) {
    await fetch('http://localhost:5000/api/users/'+id, { method: 'DELETE' });
  }

}


  
  const columns = [
    { field: "id", headerName: "ID", width: 40 },

    { field: "name", headerName: "name", width: 120, },
    
    { field: "username", headerName: "Username", width: 120, },
    
    { field: "email", headerName: "Email", width: 200  },

    {
      field: "address",
      headerName: "Address",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            {params.row.address.street}, {params.row.address.suite}, {params.row.address.city}, {params.row.address.zipcode} 
          </div>
        );
      },
    },

    {
      field: "geo",
      headerName: "Geo",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.row.address.geo.lat}, {params.row.address.lng}
          </div>
        );
      },
    },

    { field: "phone", headerName: "Phone", width: 120  },

    { field: "website", headerName: "website", width: 150  },

    { field: "company", headerName: "company", width: 150 , renderCell: (params) => {
      return (
        <div>
          {params.row.company.name}
        </div>
      );
    }, },
    
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/user/" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
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
