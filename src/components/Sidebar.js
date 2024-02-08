import MenuButton from "./MenuButton.js";
import { useState, useContext } from 'react';
import { CategoryContext } from "../App";

const buttons = [
    { name: "Dashboard", href: "#"},
    { name: "Transactions", href: "#"},
    { name: "Insights", href: "#"},
    { name: "Visualize Data", href: "#"}
]

function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(1);
    const {activeContent, setActiveContent} = useContext(CategoryContext);

    const handleButtonClick = (index, buttonName) => {
        setActiveIndex(index);
        setActiveContent(buttonName);
    }

    return (
        <nav className="sidebar-element">
            <div className="logo-section sidebar-section">
                <h3>BDGT</h3>
                <h3>MNGM</h3>
            </div>
            <section className="sidebar-buttons sidebar-section">

                {buttons.map((button, index) => (
                    <MenuButton 
                        key={index}
                        props={button}
                        isActive={index === activeIndex}
                        content={activeContent}
                        onClick={() => handleButtonClick(index, button.name)}
                    />
                ))}

            </section>
            <section className="account-buttons sidebar-section"></section>
        </nav>
    )
}

export default Sidebar;