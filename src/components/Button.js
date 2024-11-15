import { useState } from "react";

const Button = ({ text, icon, color, hoverColor, onClick, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonHoverStyle = {
    backgroundColor: hoverColor,
  };
  
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
        color: 'white',
        cursor: onClick && 'pointer',
        borderWidth: 0,
        borderRadius: 3,
        ...(isHovered ? buttonHoverStyle : {}),
      }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {icon && <img style={{height: 14}} src={icon} alt="button icon" />}
      <p style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>
        {text}
      </p>
    </button>
  );
}

export default Button;