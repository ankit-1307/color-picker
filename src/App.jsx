import { useEffect, useState } from "react";
import ColorList from "./components/ColorList";
import { Form } from "./components/Form";
import values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    const [color, setColor] = useState("#f15025");
    const [colors, setColors] = useState(new values("#f15025").all(5));
    const handleColors = (col) => {
        setColor(() => {
            return col;
        });
    };
    useEffect(() => {
        console.log("heool");

        setColors((prevColor) => {
            try {
                const newColor = new values(color).all(9);
                return newColor;
            } catch (e) {
                toast.error("invalid color value");
                return colors;
            }
        });
    }, [color]);
    // toast.success("Copied Successfully");
    return (
        <main>
            <Form handleColors={handleColors} />
            <ColorList colors={colors} />
            <ToastContainer position="top-center" />
        </main>
    );
}

export default App;
