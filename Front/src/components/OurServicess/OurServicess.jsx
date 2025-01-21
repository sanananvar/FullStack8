import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import style from "./style.module.css"
import { favoriteContext } from '../../Context/FavoriteContext'
function OurServicess() {
    const [products, setProducts] = useState([])
    let [searchTerm, setSearchTerm] = useState("")
    let [sortOrder, setSortOrder] = useState("default")
    let { favorites, setFavorites } = useContext(favoriteContext)
    const filteredproducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
        if (sortOrder === 'name-asc') {
            return a.name.localeCompare(b.name);
        } else if (sortOrder === 'name-desc') {
            return b.name.localeCompare(a.name);
        }
        return 0; 
    

            
        })
    function GetData() {
        axios.get("http://localhost:3000/products6")
            .then((res) => {
                setProducts(res.data)
            })

    }
    function addFav(products) {
        let findFav = favorites.find(favorite => favorite.id == products.id)
        if (findFav) {
            alert(
                "This product is already in your favorites"
            )

        } else {
            setFavorites([...favorites, products])
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
                    <select onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="name-asc">Name (A-Z)</option>
                            <option value="name-desc">Name (Z-A)</option>
                        </select>
                    <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className={style.servicess_wrapper}>
                        {filteredproducts.length > 0 ? (
                            filteredproducts.map((req) => (
                                <div className={style.servicess_card}>
                                    <img src={req.image} alt="" />
                                    <h3>{req.name}</h3>
                                    <p>{req.desc}</p>
                                    <button><i onClick={() => addFav(req)} class="bi bi-heart"></i></button>
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
