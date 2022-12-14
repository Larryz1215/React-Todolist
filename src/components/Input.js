import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { v4 } from "uuid";
const Input = ({ input, setInput, item, setItem }) => {
  //輸入功能
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  //按鈕送出功能
  const clickHandler = (e) => {
    if (e.target.value !== "") {
      setItem([...item, { content: input, id: v4(), isDone: false }]);
      setInput("");
    }
  };
  //按下Enter送出功能
  const handleKeyDown = (event) => {
    if (event.target.value !== "") {
      if (event.key === "Enter") {
        setItem([...item, { content: input, id: v4(), isDone: false }]);
        setInput("");
      }
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        onChange={inputHandler}
        value={input}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={clickHandler}>新增</Button>
    </InputGroup>
  );
};

export default Input;
