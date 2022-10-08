import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer( { sushi, advanceBelt, setEaten } ) {

  // const [orderSushi, setOrderSushi] = useState([])

  // function addMore(){
  //   setOrderSushi((orderSushi) => orderSushi = false)
  // }

  return (
    <div className="belt">
      {sushi.map(sushis =>
      <Sushi sushis={sushis} key={sushis.id} setEaten={setEaten} />)}
      <MoreButton sushi={sushi} advanceBelt={advanceBelt} />
    </div>
  );
}

export default SushiContainer;
