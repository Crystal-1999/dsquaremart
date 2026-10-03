import React, { useEffect, useState, useRef } from 'react';

const CursorFollower = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) return null;

    const [isVisible, setIsVisible] = useState(false);
    const auraRef = useRef(null);
    const requestRef = useRef();
    const mousePos = useRef({ x: -100, y: -100 });
    const currentPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const animate = () => {
            currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.2;
            currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.2;

            if (auraRef.current) {
                auraRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', updateCursorPosition);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(requestRef.current);
        };
    }, [isVisible]);

    return (
        <div className={`hidden lg:block transition-opacity duration-500 pointer-events-none z-[9997] fixed inset-0 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
                ref={auraRef}
                className="fixed top-0 left-0 pointer-events-none"
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(14, 165, 233, 0.40) 0%, rgba(14, 165, 233, 0.12) 50%, transparent 80%)',
                    mixBlendMode: 'screen',
                    filter: 'blur(40px)',
                    willChange: 'transform'
                }}
            />
        </div>
    );
};

export default CursorFollower;
