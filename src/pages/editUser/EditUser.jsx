import "./editUser.css";
import { useState, useEffect } from "react";
export default function EditUser() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [geoLat, setGeoLat] = useState("");
  const [geoLng, setGeoLng] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [CompanyCatchPhrase, setCompanyCatchPhrase] = useState("");
  const [bs, setCompanyBs] = useState("");
  const id = window.location.href.split("/")[4][0];

 

  useEffect(() => {
   fetchUser();
  },[]);  
  
const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const user = await response.json();
    setUser(user);
  }
  catch(err) {
    console.log(err);
  }
}



function updateUser() {
  
    user.name = name;
    user.username = username;
    user.email = email;
    user.address.street = street;
    user.address.suite = suite;
    user.address.city = city;
    user.address.zipcode = zipcode;
    user.address.geo.lat = geoLat;
    user.address.geo.lng = geoLng;
    user.phone = phone;
    user.website = website;
    user.company.name = companyName;
    user.company.catchPhrase = CompanyCatchPhrase;
    user.company.bs = bs;
    console.log(user.address);
    fetch("https://jsonplaceholder.typicode.com/users/"+id, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        fetchUser();
      })
    })
  }
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1>Edit User</h1>
      </div>        
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" >
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  defaultValue={user.name}
                  onChange={(e)=>{setName(e.target.value)}}
                />
              </div>
                                                 
            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton" onClick={updateUser}>Update</button>
            </div>
          </form>
        </div>
      </div>
  );
}
