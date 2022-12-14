import React, { useState, useEffect } from "react";
import Item from "./Item";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const List = ({ tab = "all", item, setItem, done, setDone, yet, setYet }) => {
  const [isEdit, setIsEdit] = useState("");
  const [newInput, setNewInput] = useState("");

//把item儲存到Local Storage
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  //item編輯功能
  const editedHandler = () => {
    const newItem = item.map((i) => {
      const { id } = i;
      if (id === isEdit && newInput) {
        i.content = newInput;
        return i;
      }
      return i;
    });
    setNewInput("");
    setIsEdit("");
    setItem(newItem);
  };

  //根據tab狀態,顯示item
  let itemList;
  if (tab === "all") {
    itemList = item;
  } else if (tab === "done") {
    itemList = done;
  } else if (tab === "yet") {
    itemList = yet;
  }

  const list = itemList.map((i) => {
    const { content, id, isDone } = i;
    return (
      <div key={id}>
        {!(isEdit === id) ? (
          <Item
            content={content}
            id={id}
            setIsEdit={setIsEdit}
            item={item}
            setItem={setItem}
            done={done}
            setDone={setDone}
            yet={yet}
            setYet={setYet}
            isDone={isDone}
          />
        ) : (
          <InputGroup className="my-3">
            <Form.Control
              type="text"
              onChange={(e) => {
                setNewInput(e.target.value);
              }}
              defaultValue={content}
            />
            <FontAwesomeIcon
              icon={faCheck}
              href="#"
              onClick={editedHandler}
              style={{ fontSize: "2rem", cursor: "pointer",padding:"0.4rem" }}
            />
          </InputGroup>
        )}
      </div>
    );
  });
  return <div>{list}</div>;
};

export default List;
