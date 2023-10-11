import React from 'react';
import './input.css';

/**
 * Input Component:
 *
 * The Input component represents an input field with CSS styling.
 *
 * Key Points:
 * - Utilizes CSS styles for visual effects.
 * - Supports required attribute for form validation.
 * - Allows users to input text.
 *
 * Suggestions:
 * - Provide proper input field labels using the 'label' element.
 * - Define the 'htmlFor' attribute for the label element.
 * - Ensure that the 'type' attribute is set correctly for different input types.
 *
 * This component sets up a styled input field.
 */

const Input: React.FC = () => {
    return (
        <article className="w-full">
            <div className="group w-full">
                <input required={true} type="text" className="input"/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="" className="text-[#7a7070]">Name</label>
            </div>
        </article>
    );
}

export default Input;
