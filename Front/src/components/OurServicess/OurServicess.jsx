import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import style from "./style.module.css"
import { favoriteContext } from '../../Context/FavoriteContext'
function OurServicess() {
    const [products, setProducts] = useState([])
    let {favorites ,setFavorites}=useContext(favoriteContext)
    function GetData() {
        axios.get("http://localhost:3000/products6")
            .then((res) => {
                setProducts(res.data)
            })

    }
    function addFav(products) {
        let findFav=favorites.find(favorite => favorite.id==products.id)
        if(findFav){
            alert(
                "This product is already in your favorites"
            )

        }else{
            setFavorites([...favorites,products])
        }

        
    }
    useEffect(() => {
        GetData()
    }, [])
    return (
        <>
            <section id='OurServicess'>
                <div className={style.servicess}>
                    <div className={style.servicess_title}>
                        <h2>Our Services</h2>

                    </div>
                    <div className={style.servicess_wrapper}>
                        {products.length > 0 ? (
                            products.map((req) => (
                                <div className={style.servicess_card}>
                                    <img src={req.image} alt="" />
                                    <h3>{req.name}</h3>
                                    <p>{req.desc}</p>
                                    <button><i onClick={()=>addFav(req)} class="bi bi-heart"></i></button>
                                    <a href="">learn more</a>

                                </div>
                            ))
                        ) : (
                            <p className={style.empty}>Bosdur Gardas</p>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServicess
