import React from 'react'
import style from "./style.module.css"
function Servicess() {
    return (
        <>
            <section id='services'>
                <div className={style.services}>
                    <div className={style.services_wrapper}>

                        <div className={style.top}>
                            <div className={style.service_card}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/001-wallet.svg" alt="" />
                                <h3>Money Savings</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veritatis minus! uuntur?</p>
                            </div>
                            <div className={style.service_card}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/004-cart.svg" alt="" />
                                <h3>Money Savings</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veritatis minus! uuntur?</p>
                            </div>
                            <div className={style.service_card}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/006-credit-card.svg" alt="" />
                                <h3>Money Savings</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veritatis minus! uuntur?</p>
                            </div>

                        </div>
                        <div className={style.bottom}>
                            <div className={style.bot_img}>
                                <img src="https://preview.colorlib.com/theme/banker/images/about_2.jpg.webp" alt="" />
                            </div>
                            <div className={style.supplies}>
                                <h3>

                                    Amortization Computation
                                </h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <ul>
                                    <li><i class="bi bi-check"></i>
                                    Lorem, ipsum dolor.</li>
                                    <li><i class="bi bi-check"></i>
                                    Lorem, ipsum dolor.</li>
                                    <li><i class="bi bi-check"></i>
                                    Lorem, ipsum dolor.</li>
                                </ul>
                                <div className={style.salam}>
                                    <input type="text" placeholder='enter your email' />
                                    <button>submit</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicess
