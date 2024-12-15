import React from "react";
import "./featuredInfo.css";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="featured-money">$12,15</span>
          <span className="featured-money-rate">
            -11.4 <ArrowDownward className="featured-icon negatif" />
          </span>
        </div>
        <span className="featured-sub">Compared to last mounth</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$4,15</span>
          <span className="featured-money-rate">
            -1.4 <ArrowDownward className="featured-icon negatif" />
          </span>
        </div>
        <span className="featured-sub">Compared to last mounth</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,15</span>
          <span className="featured-money-rate">
            +2.4 <ArrowUpward className="featured-icon " />
          </span>
        </div>
        <span className="featured-sub">Compared to last mounth</span>
      </div>
    </div>
  );
}
