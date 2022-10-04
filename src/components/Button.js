import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary' , 'btn--outine'];
const SIZES =['btn--medium', 'btn--large'];

// function Button() {
//   return (
//     <div>Button</div>
//   )
// }

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.include(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.include(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to = 'sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
};