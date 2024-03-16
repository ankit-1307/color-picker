import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
    const handleNavigation = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${color.hex}`);
                toast.success(`copied #${color.hex}`);
            } catch (e) {
                toast.error(e.message);
            }
        } else {
            toast.error("Clipboard API not supported");
        }
    };
    return (
        <article
            onClick={() => {
                handleNavigation();
            }}
            className={index > 10 ? "color color-light" : "color"}
            style={{ background: `#${color.hex}` }}
        >
            <p className="color-value">{`#${color.hex}`}</p>
            <p className="percent-value">{`${color.weight}%`}</p>
        </article>
    );
};

export default SingleColor;
