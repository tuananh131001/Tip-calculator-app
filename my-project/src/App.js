import "./App.css";
import "./components/Card";
import Card from "./components/Card";
function App() {
  return (
    <>
      {" "}
      <div className=" bg-lightGrayishCyan h-screen">
        <div className="heading flex justify-center items-center pt-5 h-1/6">
          <h1 className="text-veryDarkCyan text-center font-extrabold break-words w-5ch">
            S P L I T T E R
          </h1>
        </div>
        <Card />
      </div>
    </>
  );
}

export default App;
