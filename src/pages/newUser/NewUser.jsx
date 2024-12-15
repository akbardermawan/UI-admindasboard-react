import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUser-title">New User</h1>
      <form action="" className="newUser-form">
        <div className="newUser-item">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Akbar Dermawan" />
        </div>
        <div className="newUser-item">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Akbar Dermawan" />
        </div>
        <div className="newUser-item">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Akbar@gmail.com" />
        </div>
        <div className="newUser-item">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUser-item">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+62 334 637 823 " />
        </div>
        <div className="newUser-item">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Jawa Timur | Indonesia" />
        </div>
        <div className="newUser-item">
          <label htmlFor="">Gender</label>
          <div className="newUser-gander">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newUser-item">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newUser-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUser-button">Create</button>
      </form>
    </div>
  );
}
