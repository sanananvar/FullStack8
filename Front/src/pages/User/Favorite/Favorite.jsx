import React, { useContext } from 'react'
import style from "./style.module.css"
import { favoriteContext } from '../../../Context/FavoriteContext'
import {Helmet} from "react-router-dom"
function Favorite() {
    let { favorites, setFavorites } = useContext(favoriteContext)
    function handleDeleteFav(id) {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
        setFavorites(updatedFavorites);
      }
    return (
        <>
        <Helmet>
            <title>
                Favorite
            </title>
        </Helmet>
            <section id='Fav'>
                <div className={style.favorite}>
                    <div className={style.favorite__title}>Favorite</div>
                    <div className={style.favorite_wrapper}>
                        {
                            favorites.length > 0 ? (
                                favorites.map((item) => (
                                    <div className={style.favorite_card}>

                                        <img src={item.image} alt="" />
                                        <h3>{item.name}</h3>
                                        <p>{item.desc}</p>
                                        <button><i onClick={()=>handleDeleteFav(item.id)} class="bi bi-heartbreak-fill"></i></button>
                                        <a href="">learn more</a>

                                    </div>
                                )
                                )) : (
                                <p>
                                    No favorites yet
                                </p>
                            )
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Favorite
