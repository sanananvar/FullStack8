import React from 'react'
import style from "./style.module.css"
function About() {
    return (
        <>
            <section id='AboutUs'>
                <div className={style.About}>
                    <h2 className={style.title}>About Us</h2>
                    <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit</p>
                    <div className={style.about_wrapper}>
                        <div className={style.a_img}>
                            <img src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg.webp" alt="" />
                        </div>
                        <div className={style.content}>
                            <h3>We Solve Your Financial Problem</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
