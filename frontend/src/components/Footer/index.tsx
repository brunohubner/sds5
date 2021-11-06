import { memo } from "react"
import "./styles.css"

function Footer() {
    
    return (
        <footer className="footer mt-auto pt-3 pb-1 bg-dark">
            <div className="container">
                <p className="text-light ">
                    por &nbsp;
                    <a href="https://github.com/brunohubner" 
                        target="_blank" 
                        rel="noreferrer">Bruno Hubner</a></p>
            </div>
        </footer>
    )
}

export default memo(Footer)