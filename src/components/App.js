import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const [sushi, setSushi] = useState([])
const [beltPosition, setBeltPosition] = useState(0);
const [money, setMoney] = useState(100)
const DISPLAY_COUNT = 4;

// console.log(sushi)

useEffect(() => {
fetch(API)
.then(res => res.json())
.then(sushi => setSushi(sushi))
}, [])

console.log(money)

//eaten: true is a key value that is added into the object as a temporary; it will not be added into db.json file
function setEaten(piece) {

  const remainingMoney = money - piece.price

  if (remainingMoney >=0) {
  setMoney(remainingMoney);

  setSushi(sushi.map(sush => sush.id === piece.id ? {...sush, eaten: true } : sush ))
  }
}

function advanceBelt() {
  //This will change the initial value of beltPosition whenever the button at MoreButton.js is clicked
  //When beltPosition below is changed, the first parameter (after .slice) will be 4 )
  setBeltPosition((beltPosition + DISPLAY_COUNT) % sushi.length);
}

// function sushiExpense() {
//   {sushi.filter(sush => {
//     if (sush.eaten === true) {
//       if (money !== 0) {
//       return setMoney(money - sush.price)
//     } else if (money <= 0) {
//       alert('you have no more money')
//     }
//   }}
//   )}
// }

  return (
    <div className="app">
      <SushiContainer sushi={sushi.slice(beltPosition, beltPosition + DISPLAY_COUNT)} setSushi={setSushi} advanceBelt={advanceBelt} setEaten={setEaten} />
      <Table plates = { sushi.filter(sush => sush.eaten) } money={money}/>
    </div>
  );
}

export default App;
