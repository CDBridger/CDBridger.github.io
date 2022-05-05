import { Link } from "gatsby";
import React from "react"
import  "../styles/layout.scss"


type Props = {
    children: React.ReactNode
    pageTitle: string;
}

const Layout: React.FC<Props> = ({children, pageTitle}) => {
    return(
        <div className='container'>
            <title>{pageTitle}</title>
            <nav>
                <ul className="nav-links">
                    <li className="nav-link-item"><Link to="/" className="navLinkText">Home</Link></li>
                    <li className="nav-link-item"><Link to="/about" className="navLinkText">About</Link></li>
                    <li className="nav-link-item"><Link to="/blogs" className="navLinkText">Blogs</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout