import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLg-button " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLg-title">Lates Transactions</h3>
      <table className="widgetLg-table">
        <tr className="widgetLg-tr">
          <th className="widgetLg-th">Customer</th>
          <th className="widgetLg-th">Data</th>
          <th className="widgetLg-th">Amount</th>
          <th className="widgetLg-th">Status</th>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="/img/b.JPG" alt="" className="widgetLg-img" />
            <span className="widgetLg-name">Akbar Dermawan</span>
          </td>
          <td className="widgetLg-date">2 Jun 2024</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="/img/b.JPG" alt="" className="widgetLg-img" />
            <span className="widgetLg-name">Akbar Dermawan</span>
          </td>
          <td className="widgetLg-date">2 Jun 2024</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="/img/b.JPG" alt="" className="widgetLg-img" />
            <span className="widgetLg-name">Akbar Dermawan</span>
          </td>
          <td className="widgetLg-date">2 Jun 2024</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="/img/b.JPG" alt="" className="widgetLg-img" />
            <span className="widgetLg-name">Akbar Dermawan</span>
          </td>
          <td className="widgetLg-date">2 Jun 2024</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
