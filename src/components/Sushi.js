import React from "react";

function Sushi( { sushis, key, setEaten } ) {

  // const [eatSushi, setEatSushi] = useState(false)

  // function handleOrder() {
  // setEatSushi((eatSushi) => eatSushi = true)
  // }

  // function deleteSushi(food) {
  //   console.log(food)
  //   const removeSushi = sushi.filter((sush) => sush.id !== food.id);
  //    setSushi(removeSushi)
  // }

  // function handleDeleteSushi() {
  //   if (!eatSushi) {
  //     console.log('hi');
  //     fetch(`http://localhost:3001/sushis/${sushis.id}`, {
  //       method: "DELETE"
  //     })
  //     .then(res => res.json())
  //     .then(() => deleteSushi(sushi))

  //   }
  // }

  return (
    <div className="sushi" id={sushis.id}>
      <div className="plate" id={sushis.id} key={key}
      onClick={() => {setEaten(sushis)} 
      // handleDeleteSushi()
      }>
        {/* Tell me if this sushi has been eaten! */}
        {sushis.eaten ? null : (
          <>
          <img
            src={sushis.img_url}
            alt={sushis.name}
            width="100%"
          />
          <br></br>
          <br></br>
      <h4 className="sushi-details">
        {sushis.name} - ${sushis.price}
      </h4>
      </>
        )}
      </div>
    </div>
  );
}

export default Sushi;
