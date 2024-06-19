import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap';

const ModalEditCategory = (props) => {
  const { show, handleClose, dataEdit, options, handleSave } = props;
  console.log(options)
  const [name, setName] = useState("");
  
  const [parentID, setParentID] = useState("");

  useEffect(() => {
    if (show) {
      setName(dataEdit.name);
      setParentID(dataEdit.parentID || "");
    }
  }, [dataEdit, show]);

  const onSave = () => {
    handleSave(dataEdit.id, name, parentID);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sửa danh mục</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tên danh mục</Form.Label>
            <Form.Control
              type="text"
              value={name}
              name="name"
              onChange={(event) => setName(event.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Danh mục cha</Form.Label>
            <Form.Select 
              aria-label="Default select example"
              value={parentID}
              name="parentID"
              onChange={(event) => setParentID(event.target.value)}
            >
              <option value="">Danh mục lớn nhất</option>
              {options.map(option => (
                <option key={option.id} value={option.id}>
                  {option.display_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditCategory;
