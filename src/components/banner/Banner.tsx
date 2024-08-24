import React from 'react';

interface Props {
	title?: string;
	showButton?: boolean;
	customButtonText?: string;
	customButtonLink?: string;
	customButtonClassName?: string;
	customClassName?: string;
}

const styles: {
	container: React.CSSProperties;
	clipPathStyle1: React.CSSProperties;
	clipPathStyle2: React.CSSProperties;
	textContainer: React.CSSProperties;
	text: React.CSSProperties;
	strong: React.CSSProperties;
	svg: React.CSSProperties;
	link: React.CSSProperties;
	linkHover: React.CSSProperties;
	linkFocusVisible: React.CSSProperties;
	flexEnd: React.CSSProperties;
} = {
	container: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		gap: '1.5rem',
		overflow: 'hidden',
		backgroundColor: '#f9fafb',
		padding: '0.625rem 1.5rem',
		fontFamily: 'Arial, sans-serif',
	},
	clipPathStyle1: {
		position: 'absolute',
		left: 'max(-7rem,calc(50%-52rem))',
		top: '50%',
		zIndex: -10,
		transform: 'translateY(-50%)',
		filter: 'blur(2rem)',
		clipPath:
			'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
		aspectRatio: '577/310',
		width: '36.0625rem',
		background: 'linear-gradient(to right, #ff80b5, #9089fc)',
		opacity: 0.3,
	},
	clipPathStyle2: {
		position: 'absolute',
		left: 'max(45rem,calc(50%+8rem))',
		top: '50%',
		zIndex: -10,
		transform: 'translateY(-50%)',
		filter: 'blur(2rem)',
		clipPath:
			'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
		aspectRatio: '577/310',
		width: '36.0625rem',
		background: 'linear-gradient(to right, #ff80b5, #9089fc)',
		opacity: 0.3,
	},
	textContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		gap: '0.5rem',
	},
	text: {
		fontSize: '0.875rem',
		lineHeight: '1.5rem',
		color: '#1f2937',
	},
	strong: {
		fontWeight: '600',
	},
	svg: {
		margin: '0 0.5rem',
		display: 'inline',
		height: '0.125rem',
		width: '0.125rem',
		fill: 'currentColor',
	},
	link: {
		borderRadius: '9999px',
		backgroundColor: '#111827',
		padding: '0.25rem 0.875rem',
		fontSize: '0.875rem',
		fontWeight: '600',
		color: '#fff',
		boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
		textDecoration: 'none',
	},
	linkHover: {
		backgroundColor: '#374151',
	},
	linkFocusVisible: {
		outline: '2px solid transparent',
		outlineOffset: '2px',
		outlineColor: '#111827',
	},
	flexEnd: {
		flex: 1,
		justifyContent: 'flex-end',
	},
};

function Banner(props: Props) {
	return (
		<div
			style={styles.container}
			className={props.customClassName}
			role="banner"
		>
			<div style={styles.textContainer}>
				<h1 style={styles.text}>
					{props?.title
						? props.title
						: 'We do not support Genocide - Free Palestine 🇵🇸'}
				</h1>
				{props?.showButton != false && (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={
							props.customButtonLink
								? props.customButtonLink
								: 'https://www.palestinercs.org/ar/Donation'
						}
						style={styles.link}
						className={props.customButtonClassName}
					>
						{props?.customButtonText ? (
							props.customButtonText
						) : (
							<p>
								DONATE <span aria-hidden="true">→</span>
							</p>
						)}
					</a>
				)}
			</div>
			<div style={styles.flexEnd}></div>
		</div>
	);
}

export default Banner;
