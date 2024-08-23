const React = require("react");

const Banner = ({ title = "Default Title", subTitle = "Default Subtitle" }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subTitle}</p>
    </div>
  );
};

module.exports = Banner;
