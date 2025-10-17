import "./App.css";
import Carros from "./components/Carros";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title"; 

function App() {
  const n = 15;
  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <p>Este parágrafo pegou estilo do componente!</p>
      <MyComponent />
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "1px dotted blue",
        }}
      >
        Este elemento foi estilizado inline
      </p>
      {/* Dinâmico css */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      <h2 style={n < 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico 2
      </h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>
      {/* CSS modules */}
      <Title />
      <h1 className="title">Este não recebe título do CSS modules</h1>
      <Carros nome={"Dodge Hellcat"} motor={"6.2L V8 Supercharged"} potencia={"717 hp"} toque={"881 Nm"} tempo={"3.6 segundos"} peso={"2.075 kg"}/>
      <Carros nome={"Dodge Ram 3500"} motor={"6.7L I6 Turbo Diesel"} potencia={"377 hp"} toque={"1.150 Nm - 1.700 rpm"} tempo={"---"} peso={"3.600 kg"} />
      <Carros nome={"Porsche GT3"} motor={"6 cilindros 4L"} potencia={"500-525 cv"} toque={"47 kgf·m (~461-470 N·m)"} tempo={"3.2 segundos"} peso={"1.435 kg"} />
    </div>
  );
}
export default App;