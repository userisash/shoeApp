import React from "react";

export function Home(){

  function handleLocation(){
    window.location = '/shoesPage'
  }

    return(
        <div className="home">
        <h1>we offer the newest sheos on the market</h1>
        <div className="des">the best brands in the wolrd
            <button onClick={handleLocation}>Go To Shop</button>
        </div>
        </div>
    )
}