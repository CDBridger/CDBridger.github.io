import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React from "react";
import "../styles/layout.css";
import LinkFadeDown from "./link-fade-down";
import { LinkFadeLeft } from "./link-fade-left";
import { LinkFadeRight } from "./link-fade-right";
import SEO from "./seo";



type Props = {
    children: React.ReactNode
    pageTitle: string;
    article?: boolean
}

const Layout: React.FC<Props> = ({children, pageTitle, article}) => {
    const { pathname } = useLocation()

    const isContact = pathname.includes("/contact")
    const isHistory = pathname.includes("/history")
    const isBlog = pathname.includes("/blog")
    const isHome = !isContact && !isHistory && !isBlog

    const homeLinks = () => {
        return(
            <>
                <li className="about-link"><LinkFadeDown url="/"><span style={{color: '#eb75f6'}}>About</span></LinkFadeDown></li>
                <li className="blogs-link"><LinkFadeLeft url="/blogs"><span>Blogs</span></LinkFadeLeft></li>
                <li className="work-link"><LinkFadeLeft url="/history"><span>Work</span></LinkFadeLeft></li>
                <li className="contact-link"><LinkFadeLeft url="/contact"><span>Contact</span></LinkFadeLeft></li>
                <div className="animation start-about" />
            </>
        )
    }

    const blogLinks = () => {
        return(
            <>
                <li className="about-link"><LinkFadeRight url="/"><span >About</span></LinkFadeRight></li>
                <li className="blogs-link"><LinkFadeDown url="/blogs"><span style={{color: '#eb75f6'}}>Blogs</span></LinkFadeDown></li>
                <li className="work-link"><LinkFadeLeft url="/history"><span>Work</span></LinkFadeLeft></li>
                <li className="contact-link"><LinkFadeLeft url="/contact"><span>Contact</span></LinkFadeLeft></li>
                <div className="animation start-blog" />

            </>
        )
    }

    const historyLinks = () => {
        return(
            <>
                <li className="about-link"><LinkFadeRight url="/"><span>About</span></LinkFadeRight></li>
                <li className="blogs-link"><LinkFadeRight url="/blogs"><span>Blogs</span></LinkFadeRight></li>
                <li className="work-link"><LinkFadeDown url="/history"><span style={{color: '#eb75f6'}}>Work</span></LinkFadeDown></li>
                <li className="contact-link"><LinkFadeLeft url="/contact"><span>Contact</span></LinkFadeLeft></li>
                <div className="animation start-work" />
            </>
        )
    }
    
    const contactLinks = () => {
        return(
            <>
                <li className="about-link"><LinkFadeLeft url="/"><span>About</span></LinkFadeLeft></li>
                <li className="blogs-link"><LinkFadeLeft url="/blogs"><span>Blogs</span></LinkFadeLeft></li>
                <li className="work-link"><LinkFadeLeft url="/history"><span>Work</span></LinkFadeLeft></li>
                <li className="contact-link"><LinkFadeDown url="/contact"><span style={{color: '#eb75f6'}}>Contact</span></LinkFadeDown></li>
                <div className="animation start-contact" />
            </>
        )
    }

    return(
        <>
        <SEO title={pageTitle} article={article}/>
        <div className='container'>
            <nav className="links">
                <ul className="nav-links">
                    {isHome ? homeLinks() : isContact ? contactLinks() : isHistory ? historyLinks() : isBlog ? blogLinks() : null}
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                    {children}
            </main>
        </div>
        </>
    )
}

export default Layout