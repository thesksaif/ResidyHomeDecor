import React from 'react';
import photo from '../assets/images/man.png';
import { FaStar } from 'react-icons/fa';
import '../css/FeedbackSection.css';
const FeedbackSection = () => {
  return (
    <div className="feedback-section">
      <div className="container">
        <div className="row py-4 ">
          <div className="col-md-12">
            <div className="feedback-title p-2 ">
              People Say The Nicest Things
            </div>
            <div className="feedback-desc text-center ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ut non consequatur quos tenetur veniam cupiditate, Vero
                quod tenetur optio.
              </p>
            </div>
            <div className="row mt-2 pt-4 d-flex justify-content-center">
              <div className="col-md-4">
                <div className="feedback-card text-center">
                  <img
                    src={photo}
                    width={60}
                    alt="Max Stewart"
                    className="founder-image rounded-circle mr-3"
                  />
                  <div className="star-icon">
                    {[...Array(5)].map((star, index) => {
                      if (index < 4) {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            className="star-yellow"
                          />
                        );
                      } else {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            className="star-muted"
                          />
                        );
                      }
                    })}
                  </div>
                  <div className="founder-name">
                    <h6 className="font-weight-bold ">Max Stewart</h6>
                    <p className="text-muted">FOUNDER</p>
                  </div>
                  <p className="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium temporibus numquam, earum voluptates, ipsum
                    quasi nam quaerat veritatis nostrum, dolores doloremque ab
                    nobis est voluptas deleniti corporis sunt consequatur
                    expedita?
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feedback-card text-center">
                  <img
                    src={photo}
                    width={80}
                    alt="Max Stewart"
                    className="founder-image rounded-circle mr-3"
                  />
                  <div className="star-icon">
                    {[...Array(5)].map((star, index) => {
                      if (index < 4) {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            className="star-yellow"
                          />
                        );
                      } else {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            className="star-muted"
                          />
                        );
                      }
                    })}
                  </div>
                  <div className="founder-name">
                    <h6 className="font-weight-bold ">Max Stewart</h6>
                    <p className="text-muted">FOUNDER</p>
                  </div>
                  <p className="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium temporibus numquam, earum voluptates, ipsum
                    quasi nam quaerat veritatis nostrum, dolores doloremque ab
                    nobis est voluptas deleniti corporis sunt consequatur
                    expedita?
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feedback-card text-center">
                  <img
                    src={photo}
                    width={80}
                    alt="Max Stewart"
                    className="founder-image rounded-circle mr-3"
                  />
                  <div className="star-icon">
                    {[...Array(5)].map((star, index) => {
                      if (index < 4) {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            className="star-yellow"
                          />
                        );
                      } else {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            className="star-muted"
                          />
                        );
                      }
                    })}
                  </div>
                  <div className="founder-name ">
                    <h6 className="font-weight-bold ">Max Stewart</h6>
                    <p className="text-muted">FOUNDER</p>
                  </div>
                  <p className="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium temporibus numquam, earum voluptates, ipsum
                    quasi nam quaerat veritatis nostrum, dolores doloremque ab
                    nobis est voluptas deleniti corporis sunt consequatur
                    expedita?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedbackSection;
