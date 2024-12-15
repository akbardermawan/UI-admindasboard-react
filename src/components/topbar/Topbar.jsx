import React from "react";
import "./topbar.css";
// material Ui Icon
import Notif from "@mui/icons-material/NotificationsNone";
import Language from "@mui/icons-material/Language";
import Settings from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">Akbaradmin</span>
        </div>
        <div className="top-right">
          <div className="topbar-icons">
            <Notif className="notif-icon" />
            <span className="icon-bag">2</span>
          </div>
          <div className="topbar-icons">
            <Language className="notif-icon" />
            <span className="icon-bag">2</span>
          </div>
          <div className="topbar-icons">
            <Settings className="notif-icon" />
            <span className="icon-bag">2</span>
          </div>
          <div className="topbar-avatar">
            <img src="/img/b.JPG" alt="Avatar" className="avatar " />
          </div>
        </div>
      </div>
    </div>
  );
}
