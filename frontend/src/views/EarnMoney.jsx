import Coin from "../components/Coin";
import "./EarnMoney.css"

function EarnMoney() {
  

  const coins = [];

  for (let i = 0; i < 100; i++) {
    coins.push(<Coin key={i} />);
  }

  return (
    <>
      {/* <h1>Earn Coins</h1> */}
      <section className="coinWrapper">
        {coins}      
      </section>
    </>
  )
}

export default EarnMoney;

/* const rows = [];
for (let i = 0; i < numrows; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ObjectRow key={i} />);
}
return <tbody>{rows}</tbody>; */