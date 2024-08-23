const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Banner = require('../src');



test('renders Banner component with provided props', () => {
  render(<Banner title="Test Title" subTitle="Test Subtitle" />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
});
