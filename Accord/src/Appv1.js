import "./App.css";
import { useState } from "react";

const data = [
  {
    title:
      "Lorem ipsum  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title:
      "Lorem ipsum  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title:
      "Lorem ipsum  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function App() {
  return (
    <div className="App">
      <Accord data={data} />
    </div>
  );
}
function Accord({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordItem title={el.title} text={el.text} num={i} key={i} />
      ))}
    </div>
  );
}

function AccordItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item  ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default App;
