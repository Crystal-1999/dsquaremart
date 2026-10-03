import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Reveal = ({ children, className = "", threshold = 0.1, delay = 0, y = 20, duration = 1000 }) => {
    const [ref, isVisible] = useScrollReveal(threshold);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
                transition: `all ${duration}ms cubic-bezier(0.5, 0, 0, 1) ${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default Reveal;
