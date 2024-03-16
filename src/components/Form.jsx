import React, { useState } from "react";

export const Form = ({ handleColors }) => {
    const [color, setColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        handleColors(color);
    };
    return (
        <section className="container">
            <h4>color generator</h4>
            <form className="color-form " onSubmit={handleSubmit}>
                <input
                    className=" "
                    type="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                ></input>
                <input
                    type="text"
                    value={color}
                    placeholder="#f12025"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                ></input>
                <button
                    className="btn"
                    style={{ background: color }}
                    type="submit"
                >
                    submit
                </button>
            </form>
        </section>
    );
};
