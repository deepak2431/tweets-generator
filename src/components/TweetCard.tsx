import React from "react";

interface IProps {
  tweetContent: string;
}

const TweetCard: React.FC<IProps> = ({ tweetContent }) => {
  return (
    <div className="tweet_card">
      <h3 style={{ marginLeft: "50px", marginTop: "50px" }}>
        Tweet Generated using the input keywords
      </h3>
      <div className="tweet_container">
        <div className="tweet_content">
          {tweetContent.split("\n").map((item, idx) => {
            return (
              <span key={idx}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
