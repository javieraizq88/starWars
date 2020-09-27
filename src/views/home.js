import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../components/store/appContext";
import Titulo from "./titulo";

const Home = props => {
    const { store } = useContext(Context);
    const { people } = store;

    console.log(people)
    return ( 
        <>
            <div id="container-home-starwars" >



                <div className="card-group" >
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://lumiere-a.akamaihd.net/v1/images/Sith_7abb7b3c.jpeg?region=369%2C0%2C900%2C900&width=480" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=123%2C0%2C864%2C864&width=480" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://lumiere-a.akamaihd.net/v1/images/01_194dfed7.jpeg?region=224%2C0%2C576%2C576&width=480" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-lashgn_719bef9d.jpeg?region=0%2C0%2C1200%2C675" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLAUg8wPXTabhE2uenCinJc-IkB607f5mzGdOKUpqZH-K1Gtlu" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlRo9f3QeZ2HfygAzbgbZHg4BfKNpre_eZuysD9jwXBotldV29" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQlC0-VRfVSfArnhoHZGt8iCBE0ash5jqgSB5bhQiS-uCDWNfM" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnv2-5xQrJBjGNOosj6znfqVa38iaBUVfTWa61xj8cT9h7CMhF" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=353%2C38%2C498%2C498&width=480" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVquJ9ClQnn2xnTeIKV6GYfYEE5lZWvknSdBZihycMBx2Ifpma" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://lumiere-a.akamaihd.net/v1/images/kylo-ren-main-tros-a_6d77fd1e.jpeg?region=280%2C0%2C720%2C720&width=480" />
                    <img className="card-img col-md-2 col-xs-3"
                        alt=""
                        id="imagen-home-starwars"
                        src="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C356%2C746%2C374" />
                </div>
            </div >
        </>
    


    )
}

export default Home;