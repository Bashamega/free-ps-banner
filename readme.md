# Free Palestine Banner

The `Free Palestine Banner` is a customizable React component designed to provide a stylish and flexible banner for your website or application. This package allows you to easily integrate a free palestine banner in your web app with configurable text, button options, and styles.

## Features

- **Customizable Title**: Set a custom title for the banner or use the default message.
- **Conditional Button Display**: Show or hide the button based on the `showButton` prop.
- **Custom Button Text**: Define custom text for the button.
- **Custom Button Link**: Set a custom URL for the button.
- **Custom Button Class**: Apply additional styling to the button with a custom CSS class.
- **Custom Banner Class**: Add a custom CSS class to the entire banner component.
- **Pre-defined Styles**: Includes default styles for layout, text, and buttons.

## Installation

Install the `free-ps-banner` npm package using npm or yarn:

```bash
npm install free-ps-banner
```

or

```bash
yarn add free-ps-banner
```

## Usage

To use the `Banner` component in your React project:

1. **Import the Component:**

   ```tsx
   import Banner from 'banner-component';
   import React from 'react';
   ```

2. **Add the Component to Your JSX:**

   ```tsx
   function App() {
   	return (
   		<div className="App">
   			<Banner
   				title="Support Human Rights"
   				showButton={true}
   				customButtonText="Contribute Now"
   				customButtonLink="https://example.com/donate"
   				customButtonClassName="my-button-class"
   				customClassName="my-banner-class"
   			/>
   		</div>
   	);
   }

   export default App;
   ```

## Props

- **`title?: string`** - Optional: Set the banner's title text.
- **`showButton?: boolean`** - Optional: Show or hide the button (default is `true`).
- **`customButtonText?: string`** - Optional: Set custom text for the button.
- **`customButtonLink?: string`** - Optional: Set a custom URL for the button.
- **`customButtonClassName?: string`** - Optional: Apply a custom CSS class to the button.
- **`customClassName?: string`** - Optional: Apply a custom CSS class to the entire banner.

## Development

To contribute or make changes to this package:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Bashamega/free-ps-banner
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!
