import { useEffect } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  useEffect(() => {}, [data]);

  return (
    <>
      This react app is fetching data from a local json file and displaying it
      <div className="flex">
        {data.map((item) => {
          return (
            <div className="card">
              <div>
                <h4>Name: {item.name}</h4>
                <div>Type: {item.type}</div>
                <div>
                  HP:{" "}
                  <span className={item.hp > 50 ? "red" : "blue"}>
                    {item.hp}
                  </span>
                </div>
                <div>Attack: {item.attack}</div>
                <div>Defense: {item.defense}</div>
                <div>Speed: {item.speed}</div>
                <div
                  style={{
                    marginTop: "10px",
                    color: "darkblue",
                  }}
                >
                  Moves:{" "}
                  {item.moves.map((item) => (
                    <span
                      style={{
                        fontStyle: "italic",
                      }}
                    >
                      {item},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
