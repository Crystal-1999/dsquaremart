import React, { useState } from 'react';
import '../styles/animations.css';

const AnimatedChar = ({ char, hoverColor, enableHover }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <span
            onMouseEnter={() => enableHover && setIsHovering(true)}
            onAnimationEnd={() => setIsHovering(false)}
            className={`inline-block transition-transform duration-200 cursor-default ${enableHover && hoverColor ? `hover:${hoverColor}` : ''
                } ${isHovering ? 'animate-rubberBand' : ''}`}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    );
};

const AnimatedText = ({ text, className = "", hoverColor = "text-primary", enableHover = true }) => {
    return (
        <span className={`${className}`}>
            {text.split(/(\s+)/).map((part, index) => {
                if (part.match(/\s+/)) {
                    return <span key={index} className="whitespace-pre inline-block">{part}</span>;
                }
                return (
                    <span key={index} className="inline-block whitespace-nowrap">
                        {part.split("").map((char, charIndex) => (
                            <AnimatedChar
                                key={charIndex}
                                char={char}
                                hoverColor={hoverColor}
                                enableHover={enableHover}
                            />
                        ))}
                    </span>
                );
            })}
        </span>
    );
};

export default AnimatedText;
