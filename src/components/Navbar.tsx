function Navbar() {
    return(
        <nav>
            <ul className="start">
                <div className="logo">
                    <li><a href="#sectionS"><img src="images/logo-preto.png" alt=""/></a></li>
                </div>
                <div className="item-nav">
                    <li><a href="#section1"><strong>Sessão 1</strong></a></li>
                </div>
                <div className="item-nav">
                    <li><a href="#section2"><strong>Sessão 2</strong></a></li>
                </div>
            </ul>
        </nav>
    );
}
export default Navbar;