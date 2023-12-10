import NavBar from "./NavBar";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
    return (
        <header className="navbar">
            <NavBar />
            <ThemeSwitcher />
        </header>
    );
};

export default Header;
