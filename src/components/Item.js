import React from "react";
import { Form, Card, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const Item = ({ content, id, setIsEdit, item, setItem, isDone = false }) => {
  //刪除功能
  const deleteHandler = (e) => {
    e.preventDefault();
    const newItem = item.filter((element) => element.id !== id);
    setItem(newItem);
  };

  //判斷item是否狀態
  const checkHandler = (e) => {
    let newItem = item.map((i) => {
      if (i.id === id) {
        if (e.target.checked) {
          i.isDone = true;
        } else {
          i.isDone = false;
        }
      }

      return i;
    });

    setItem(newItem);
  };

  return (
    <Card>
      <Form.Check
        type="checkbox"
        id={`check-${id}`}
        className="d-flex align-items-center"
      >
        <Form.Check.Input
          type="checkbox"
          className="m-0"
          onChange={checkHandler}
          checked={isDone}
        />
        <Form.Check.Label className="w-100">
          <Card.Body id={id} className="d-flex justify-content-between">
            <span className={isDone ? "text-decoration-line-through" : ""}>
              {content}
            </span>
            <Stack direction="horizontal" gap={3}>
              <FontAwesomeIcon
                icon={faPen}
                href="#"
                onClick={() => {
                  setIsEdit(id);
                }}
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
              />
              <FontAwesomeIcon
                icon={faTrash}
                href="#"
                onClick={deleteHandler}
                style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" }}
              />
            </Stack>
          </Card.Body>
        </Form.Check.Label>
      </Form.Check>
    </Card>
  );
};

export default Item;
