function MenuButton({props, isActive, onClick}) {
    const classArray = isActive ? "menu-button text-font standard-button mb-active" : "menu-button text-font standard-button mb-inactive";

    const buttonName = props.name;
    const buttonLink = props.href;

    return (
        <a className="link-menu-button" href={buttonLink}>
            <button className={classArray} onClick={onClick}>
                {buttonName}
                <div className="bottom-menu-button"></div>
            </button>
        </a>
    )
}

export default MenuButton;