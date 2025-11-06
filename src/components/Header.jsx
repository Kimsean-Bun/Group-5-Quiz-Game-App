export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <h2>LOGO</h2>
                </div>
                <div className="header-subcontainer">
                    <h2 className="website-name">Trivia Bonanza</h2>
                    <nav className="nav-container">
                        <a href="">Home</a>
                        <a href="">ScoreBoard</a>
                        <a href="">About Us</a>
                        <a href="">Super Secret</a>
                    </nav>
                </div>
            </div>
        </>
    );
}