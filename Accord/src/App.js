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
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AccordItem>
      ))}

      <AccordItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="About React"
        num={11}
        key={6}
      >
        <p>About React</p>
        <ul>
          <li>UI into components</li>
          <li>State Management</li>
        </ul>
      </AccordItem>
    </div>
  );
}

function AccordItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
    // setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item  ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;
