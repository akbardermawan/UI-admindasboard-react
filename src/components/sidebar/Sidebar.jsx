import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Line from "@mui/icons-material/LineStyle";
import Timeline from "@mui/icons-material/Timeline";
import TrendingUp from "@mui/icons-material/TrendingUp";
import PersonOutline from "@mui/icons-material/PersonOutline";
import Storefront from "@mui/icons-material/Storefront";
import AttachMoney from "@mui/icons-material/AttachMoney";
import Equalizer from "@mui/icons-material/Equalizer";
import MailOutline from "@mui/icons-material/MailOutline";
import DynamicFeed from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import WorkOutline from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dasboard</h3>
          <ul className="sidebar-list">
            <a href="/">
              <li className="sidebar-list-item">
                <Line />
                Home
              </li>
            </a>
            <li className="sidebar-list-item">
              <Timeline />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <a href="/users">
              <li className="sidebar-list-item">
                <PersonOutline />
                User
              </li>
            </a>
            <a href="/products">
              <li className="sidebar-list-item">
                <Storefront />
                Products
              </li>
            </a>
            <li className="sidebar-list-item">
              <AttachMoney />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <Equalizer />
              Report
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutline />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutline />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <ReportIcon />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
