import React, { useEffect, useState, useCallback } from 'react'
import classNames from "classnames";

const Cursor = () => {
    const [position, setPosition] = useState({ x: -999, y: -999 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a, div.cursorHover").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };
    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered
        }
    );


    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`)
            media.addEventListener('change', e => updateTarget(e))

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
                setTargetReached(true)
            }

            return () => media.removeEventListener('change', e => updateTarget(e))
        }, [])

        return targetReached;
    };

    const isMobile = () => {
        const ua = navigator.userAgent;
        return /Android|Mobi/i.test(ua);
    };

    const isBreakpoint = useMediaQuery(1920)

    // if (isBreakpoint) return null;
    if (typeof navigator !== 'undefined' && isMobile()) return null;

    return <div className={cursorClasses}
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`
        }} />
}
export default Cursor;