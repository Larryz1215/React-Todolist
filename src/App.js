import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Tab from "./components/Tab";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(() => {
    //從Local Storage,取出資料設定item
    const savedTodos = localStorage.getItem("item");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [done, setDone] = useState([]);
  const [yet, setYet] = useState([]);

  //設定item狀態為 Done,Yet
  useEffect(() => {
    if (item.length !== 0) {
      const newDone = item.filter((i) => i.isDone === true);
      const newYet = item.filter((i) => i.isDone === false);

      setDone(newDone);
      setYet(newYet);
    } else {
      setDone([]);
      setYet([]);
    }
  }, [item]);

  return (
    <>
      <Container>
        <Row>
          <Col xs="7" className="mx-auto">
            <div className="py-3">
              <h1 className="text-center">Todo List</h1>
              <Input
                input={input}
                setInput={setInput}
                item={item}
                setItem={setItem}
              />
              <Tab
                item={item}
                done={done}
                yet={yet}
                setItem={setItem}
                setDone={setDone}
                setYet={setYet}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
