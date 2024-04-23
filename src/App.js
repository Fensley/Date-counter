import { useState } from "react";
function App() {
  return <Myapp />;
}

function Myapp() {
  let [first, setFirst] = useState(1);
  let [second, setsecond] = useState(0);
  const date = new Date().toDateString();

  function handlestepplus(e) {
    setFirst(first + 1);
    setFirst(+e.target.value);
  }

  function counthandleplus() {
    setsecond(second + first);
  }
  function counthandlemwens() {
    setsecond(second - first);
  }
  function resetclick() {
    setFirst(1);
    setsecond(0);
  }
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + second);
  const updatedDate = currentDate.toDateString();

  return (
    <div className="container">
      <div className="second">
        <span>
          <input
            onChange={(e) => handlestepplus(e)}
            type="range"
            value={first}
          />
          {first}
        </span>

        <br></br>
        <button onClick={counthandlemwens}>-</button>
        <input
          className="second-input"
          type="text"
          placeholder={second}
          disabled
        />

        <button onClick={counthandleplus}>+</button>
      </div>
      <>
        {second > 0 && (
          <p>
            {`${second} days from`} Today is {updatedDate}
          </p>
        )}
        {second === 0 && <p>Today is {date}</p>}
        {second < 0 && (
          <p>
            {Math.abs(second)} days ago was {updatedDate}
          </p>
        )}
        {second > 0 && (
          <button className="btn" onClick={resetclick}>
            Reset
          </button>
        )}
      </>
    </div>
  );
}
export default App;
