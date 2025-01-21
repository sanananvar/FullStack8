import React, { useContext, useEffect, useState } from 'react'
import style from "./style.module.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router';
import { favoriteContext } from '../../../Context/FavoriteContext';
function UserNavbar() {
    let {favorites }=useContext(favoriteContext)
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate()
    function goToFav() {
        navigate("/fav")
        
    }
    function goToHome() {
        navigate("/")
        
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={isScrolled ? `${style.header} ${style.scrolled}` : style.header}>
                <div className={style.header_wrapper}>
                    <div className={style.name}>Banker.</div>
                    <div className={style.navlist}>
                        <ul>
                            <li onClick={goToHome}>HOME</li>
                            <li>ABOUT US</li>
                            <li>BLOG</li>
                            <li>CONTACT</li>
                            <li><i onClick={goToFav} class="bi bi-balloon-heart"></i>
                            <span>({favorites.length})</span></li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserNavbar
