import React from 'react';

// Define the prop types for the PrimaryButton component.
interface PrimaryButtonProps {
  color: string;     // Color of the button text (required)
  text: string;      // Button text (required)
  bgColor?: string;  // Background color of the button (optional, default is 'brown')
}

/**
 * PrimaryButton Component:
 *
 * The PrimaryButton component represents a primary action button with customizable colors.
 * It accepts the following props:
 * - color: Color of the button text (required).
 * - text: Button text (required).
 * - bgColor: Background color of the button (optional, default is 'brown').
 *
 * Key Points:
 * - The component uses the provided color and background color classes to style the button.
 * - It can be used to create primary action buttons in various parts of the application.
 * - The button text is centered vertically and horizontally.
 *
 * Suggestions:
 * - Ensure that the color prop corresponds to valid tailwind CSS text color classes.
 * - Use appropriate text and background colors for consistency with the overall design.
 *
 * Overall, the component provides a reusable primary action button with customizable colors.
 */

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ color, text, bgColor = 'brown' }) => {
  const textColorClass = `text-${color}`;
  const bgColorClass = `bg-${bgColor}`;

  return (
    <div className="flex">
      <button
        className={`px-3 py-2 my-3 flex items-center justify-center font-extrabold rounded-lg cursor-pointer relative ${textColorClass} ${bgColorClass}`}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
