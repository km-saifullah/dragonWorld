import React from "react";
import feedbackData from "../../data/feedbacks";
import Feedback from "../../components/feedback/Feedback";
import "./feedbacks.css";

const Feedbacks = () => {
  return (
    <div className="feedbacks">
      <div className="container">
        <div className="feedbacks_heading">
          <h3>Customer Feedback</h3>
        </div>
        <div className="feedback_list">
          {feedbackData.map((feedback, index) => (
            <Feedback
              key={index}
              clientName={feedback.clientName}
              designation={feedback.designation}
              msg={feedback.msg}
              photo={feedback.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
