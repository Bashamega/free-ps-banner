import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Banner from '../Banner';

describe('Banner Component', () => {
	test('renders with default title', () => {
		render(<Banner />);
		expect(
			screen.getByText('We do not support Genocide - Free Palestine 🇵🇸'),
		).toBeInTheDocument();
	});

	test('renders with custom title', () => {
		const customTitle = 'Custom Title';
		render(<Banner title={customTitle} />);
		expect(screen.getByText(customTitle)).toBeInTheDocument();
	});

	test('renders button by default', () => {
		render(<Banner />);
		expect(screen.getByRole('link', { name: /DONATE/i })).toBeInTheDocument();
	});

	test('does not render button when showButton is false', () => {
		render(<Banner showButton={false} />);
		expect(screen.queryByRole('link')).not.toBeInTheDocument();
	});

	test('renders custom button text', () => {
		const customButtonText = 'Custom Button Text';
		render(<Banner customButtonText={customButtonText} />);
		expect(
			screen.getByRole('link', { name: customButtonText }),
		).toBeInTheDocument();
	});

	test('renders custom button link', () => {
		const customButtonLink = 'https://example.com';
		render(<Banner customButtonLink={customButtonLink} />);
		expect(screen.getByRole('link')).toHaveAttribute('href', customButtonLink);
	});

	test('applies custom button className', () => {
		const customButtonClassName = 'custom-button-class';
		render(<Banner customButtonClassName={customButtonClassName} />);
		expect(screen.getByRole('link')).toHaveClass(customButtonClassName);
	});

	test('applies custom container className', () => {
		const customClassName = 'custom-container-class';
		render(<Banner customClassName={customClassName} />);
		expect(screen.getByRole('banner')).toHaveClass(customClassName);
	});

	test('renders default button link if customButtonLink is not provided', () => {
		render(<Banner />);
		expect(screen.getByRole('link')).toHaveAttribute(
			'href',
			'https://www.palestinercs.org/ar/Donation',
		);
	});
});
