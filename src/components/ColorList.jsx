import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
const ColorList = ({ colors }) => {
    return (
        <section className="colors">
            {colors.map((eachColor, index) => {
                return (
                    <SingleColor
                        color={eachColor}
                        key={nanoid()}
                        index={index}
                    />
                );
            })}
        </section>
    );
};

export default ColorList;
