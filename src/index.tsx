import React from 'react';

interface BannerProps {
  title?: string;
  subTitle?: string;
}

const Banner: React.FC<BannerProps> = ({ title = "Default Title", subTitle = "Default Subtitle" }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subTitle}</p>
    </div>
  );
};

export default Banner; // Default export