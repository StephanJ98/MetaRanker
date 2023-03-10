import React, { useState } from "react";
import styles from "./Tooltip.module.css";

const Tooltip = ({ delay, children, direction, content }) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className={styles.Tooltip_Wrapper}
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Wrapping */}
            {children}
            {active && (
                <div className={`${styles.Tooltip_Tip} ${styles[direction] || styles.top}`}>
                    {/* Content */}
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;