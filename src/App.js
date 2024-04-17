import { useState } from "react";
function App() {
  return <Myapp />;
}

function Myapp() {
  let [first, setFirst] = useState(1);
  let [second, setsecond] = useState(0);
  const date = new Date().toDateString();

  function handlestepplus() {
    setFirst(first + 1);
  }
  function handlestepmwens() {
    if (first > 1) setFirst(first - 1);
  }

  function counthandleplus() {
    setsecond(second + 1);
  }
  function counthandlemwens() {
    setsecond(second - 1);
  }
  const currentDate = new Date();
  const daysToAdd = second;
  currentDate.setDate(currentDate.getDate() + daysToAdd);
  const updatedDate = currentDate.toDateString();

  return (
    <div className="container">
      <div className="second">
        <button onClick={handlestepmwens}>-</button>
        <span> Step: {first} </span>
        <button onClick={handlestepplus}>+</button>
        <br></br>
        <button onClick={counthandlemwens}>-</button>
        <span> Count: {second} </span>
        <button onClick={counthandleplus}>+</button>
      </div>
      <>
        {second > 0 && (
          <p>
            {`${second} days from`} Today is {updatedDate}
          </p>
        )}

        {second === 0 && <p>Today is {date}</p>}
      </>
    </div>
  );
}
export default App;
