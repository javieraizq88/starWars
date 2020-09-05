import React, { useContext } from "react";
import { Context } from "../components/store/appContext";

const Home = props => {
    const { store } = useContext(Context);
    const { people } = store;

    console.log(people)
    return (
        <>
            <div className="m-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLAUg8wPXTabhE2uenCinJc-IkB607f5mzGdOKUpqZH-K1Gtlu" alt="Home img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlRo9f3QeZ2HfygAzbgbZHg4BfKNpre_eZuysD9jwXBotldV29" alt="Home img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQlC0-VRfVSfArnhoHZGt8iCBE0ash5jqgSB5bhQiS-uCDWNfM" alt="Home img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnv2-5xQrJBjGNOosj6znfqVa38iaBUVfTWa61xj8cT9h7CMhF" alt="Home img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKW5PWRfKi2NA6GkidyAqFMh9UVWRTOUZRO3FSXRqWd8lDduZF" alt="Home img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR83ZEQyVnMP7RLu4wB389vCHEz3ypVYjuNYlS-AFuMnCWIMDo6" alt="Home img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVquJ9ClQnn2xnTeIKV6GYfYEE5lZWvknSdBZihycMBx2Ifpma" alt="Home img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaP1ZNrEJbYtn9x7D0p4v2KNDHRtz8Wi6Ye_cHv3ww0MWaDCuW" alt="Home img"/>    
            </div>
        </>
    )
}

export default Home;