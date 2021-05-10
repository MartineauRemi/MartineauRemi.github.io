import React from 'react'
import {FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa'


export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <ul className="footer__social-medias">
                <li><a href=""><FaGithub /></a></li>
                <li><a href=""><FaLinkedinIn /></a></li>
                <li><a href=""><FaTwitter /></a></li>
            </ul>
            <ul className="footer__links">
                <li><a href="#hero">Accueil</a></li>
                <li><a href="#about">À Propos</a></li>
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
            <div className="footer__copyrights">
                <div><a href="#hero">Created and Designed By Rémi Martineau © 2021.</a></div>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </footer>
    )
}
