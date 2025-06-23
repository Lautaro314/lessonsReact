import logo from '../assets/logo.png';

export function Navbar () {

    const nombreDelComercio = "THE POWER";

    return (<>
            <header className="header">
                <img src= {logo} alt="Logo del shop" />
                <h1>{nombreDelComercio}</h1>
                <nav>
                    <ul>
                        <li><a href="">CAMPERAS</a></li>
                        <li><a href="">JEANS</a></li>
                        <li><a href="">BUZOS</a></li>
                    </ul>
                </nav>
                <img src="" alt="" />
            </header>
        </>)
}


export default Navbar