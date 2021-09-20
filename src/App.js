import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";
import Person from "./Components/Person/Person";

function APP() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}

export default APP;
