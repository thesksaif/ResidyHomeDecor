import React from 'react';
import { FaEllipsisH, FaShoppingCart, FaUserFriends, FaDollarSign } from 'react-icons/fa';

const InfoCard = ({ type, title, amount, percentage, increaseDecrease, timeFrame }) => {
  let icon;
  switch (type) {
    case 'sales':
      icon = <FaShoppingCart />;
      break;
    case 'customers':
      icon = <FaUserFriends />;
      break;
    case 'revenue':
      icon = <FaDollarSign />;
      break;
    default:
      icon = null;
  }

  let timeFrameText;
  switch (timeFrame) {
    case 'day':
      timeFrameText = 'Today';
      break;
    case 'month':
      timeFrameText = 'This Month';
      break;
    case 'year':
      timeFrameText = 'This Year';
      break;
    default:
      timeFrameText = '';
  }

  return (
    <div className="col-xxl-4 col-md-6">
      <div className={`card info-card ${type}-card`}>
        <div className="filter">
          <a className="icon" href="#" data-bs-toggle="dropdown"><FaEllipsisH /></a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
              <h6>Filter</h6>
            </li>
            <li><a className="dropdown-item" href="#">Today</a></li>
            <li><a className="dropdown-item" href="#">This Month</a></li>
            <li><a className="dropdown-item" href="#">This Year</a></li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title} <span>| {timeFrameText}</span></h5>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              {icon}
            </div>
            <div className="ps-3">
              <h6>{amount}</h6>
              <span className="text-success small pt-1 fw-bold">{percentage}</span> <span className="text-muted small pt-2 ps-1">{increaseDecrease}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
