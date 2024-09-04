import React, { useState } from 'react';
import { FaEllipsisH, FaCircle } from 'react-icons/fa';

const ActivityCard = () => {
  // State to manage the dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="card">
      <div className="filter">
        <a className="icon" href="#" onClick={toggleDropdown}>
          <FaEllipsisH />
        </a>
        {dropdownOpen && (
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
              <h6>Filter</h6>
            </li>
            <li><a className="dropdown-item" href="#">Today</a></li>
            <li><a className="dropdown-item" href="#">This Month</a></li>
            <li><a className="dropdown-item" href="#">This Year</a></li>
          </ul>
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">Recent Activity <span>| Today</span></h5>

        <div className="activity">
          {/* Activity items */}
          <div className="activity-item d-flex">
          <div class="activite-label">32 min</div>
            <FaCircle className="activity-badge text-success align-self-start" />
            <div className="activity-content">
              Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
            </div>
          </div>

          <div className="activity-item d-flex">
            <div className="activite-label">56 min</div>
            <FaCircle className="activity-badge text-danger align-self-start" />
            <div className="activity-content">
              Voluptatem blanditiis blanditiis eveniet
            </div>
          </div>

          <div className="activity-item d-flex">
            <div className="activite-label">2 hrs</div>
            <FaCircle className="activity-badge text-primary align-self-start" />
            <div className="activity-content">
              Voluptates corrupti molestias voluptatem
            </div>
          </div>

          <div className="activity-item d-flex">
            <div className="activite-label">1 day</div>
            <FaCircle className="activity-badge text-info align-self-start" />
            <div className="activity-content">
              Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
            </div>
          </div>

          <div className="activity-item d-flex">
            <div className="activite-label">2 days</div>
            <FaCircle className="activity-badge text-warning align-self-start" />
            <div className="activity-content">
              Est sit eum reiciendis exercitationem
            </div>
          </div>

          <div className="activity-item d-flex">
            <div className="activite-label">4 weeks</div>
            <FaCircle className="activity-badge text-muted align-self-start" />
            <div className="activity-content">
              Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ActivityCard;
