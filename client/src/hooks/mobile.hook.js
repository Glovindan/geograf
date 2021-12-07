import { useState, useEffect } from 'react';

export const useMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        if (width < 920) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [width])

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

    return { isMobile }
}