import React from "react";
import "./widgetSm.css";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSm-title">New Join Member</span>
      <ul className="widgetSm-list">
        <li className="widgetSm-list-item">
          <div className="widgetSm-list-item-container">
            <img src="/img/b.JPG" alt="" />
            <div className="widgetSm-user">
              <span className="widgetSm-user-name">Akbar Dermawan</span>
              <span className="widgetSm-user-title">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSm-button">
            <RemoveRedEye className="widgetSm-icon" /> Display
          </button>
        </li>

        <li className="widgetSm-list-item">
          <div className="widgetSm-list-item-container">
            <img src="/img/b.JPG" alt="" />
            <div className="widgetSm-user">
              <span className="widgetSm-user-name">Akbar Dermawan</span>
              <span className="widgetSm-user-title">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSm-button">
            <RemoveRedEye className="widgetSm-icon" /> Display
          </button>
        </li>

        <li className="widgetSm-list-item">
          <div className="widgetSm-list-item-container">
            <img src="/img/b.JPG" alt="" />
            <div className="widgetSm-user">
              <span className="widgetSm-user-name">Akbar Dermawan</span>
              <span className="widgetSm-user-title">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSm-button">
            <RemoveRedEye className="widgetSm-icon" /> Display
          </button>
        </li>

        <li className="widgetSm-list-item">
          <div className="widgetSm-list-item-container">
            <img src="/img/b.JPG" alt="" />
            <div className="widgetSm-user">
              <span className="widgetSm-user-name">Akbar Dermawan</span>
              <span className="widgetSm-user-title">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSm-button">
            <RemoveRedEye className="widgetSm-icon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
