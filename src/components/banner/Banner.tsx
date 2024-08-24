import React from 'react';

// Define the props interface
interface BannerProps {
  title: string;
  subtitle?: string;  // subtitle is optional
}

// Functional component with typed props
export function Banner({ title, subtitle }: BannerProps) {
  // Define inline styles directly within the component
  const bannerStyle: React.CSSProperties = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '2px solid #ccc',
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '2.5em',
  };

  const subtitleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '1.2em',
  };

  return (
    <div style={bannerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  );
}