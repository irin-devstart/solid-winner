import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    name: "",
    selected: false,
  });
  const [name, setName] = useState("");

  const handleAdd = () => setPerson((prev) => ({ ...prev, name }));
  const handleSelect = () => setPerson((prev) => ({ ...prev, selected: true }));

  const user = useMemo(
    () => ({
      name: person.name,
      selected: person.selected,
    }),
    [person.name, person.selected]
  );
  useEffect(() => {
    console.log("The state has changed, useEffect running!");
  }, [user]);

  //State akan running, karna
  //Object and Array non-premitive type data (jadi useEffect menganggap ada erubahan terus) cara nya bisa pakai useMemo

  return (
    <div className="App">
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <button onClick={handleSelect}>Select</button>
      </div>
      {`{name: ${person.name}} , 
      Select: ${person.selected.toString()} `}
    </div>
  );
}

export default App;
