import React from "react";
import { Link } from "react-router-dom";
import "./user.css";
import PersonOutline from "@mui/icons-material/PersonOutline";
import CalendarToday from "@mui/icons-material/CalendarToday";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import MailOutline from "@mui/icons-material/MailOutline";
import LocationSearching from "@mui/icons-material/LocationSearching";
import Publish from "@mui/icons-material/Publish";

export default function User() {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-add-button">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img src="/img/b.JPG" alt="" className="user-show-img" />
            <div className="user-show-top-title">
              <span className="user-show-username">Anna Backer</span>
              <span className="user-show-title">Software Enginer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Detail</span>
            <div className="user-show-info">
              <PersonOutline className="user-show-icon" />
              <span className="user-show-info-title">Akbar Dermawan</span>
            </div>
            <div className="user-show-info">
              <CalendarToday className="user-show-icon" />
              <span className="user-show-info-title">17 Agustus 1998</span>
            </div>

            <span className="user-show-title">Contact Detail</span>
            <div className="user-show-info">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-info-title">+62 334 637 823</span>
            </div>
            <div className="user-show-info">
              <MailOutline className="user-show-icon" />
              <span className="user-show-info-title">akbar@gmail.com</span>
            </div>
            <div className="user-show-info">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-info-title">Jember</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form action="" className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="user-update-input"
                  placeholder="Akbar Dermawan"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="user-update-input"
                  placeholder="Akbar Dermawan"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="birthDay">Birth Date</label>
                <input
                  type="date"
                  id="birthDay"
                  name="birthDay"
                  className="user-update-input"
                  placeholder="17 Agustus 1998"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="user-update-input"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="user-update-input"
                  placeholder="Jember"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img src="/img/b.JPG" alt="" className="user-update-img" />
                <label htmlFor="">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
