import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap';
import swal from "sweetalert";
import axios from 'axios';

const ModalEditSlider = (props) => {
  const { show, handleClose, dataEdit, loadData } = props;
  console.log(dataEdit)
  const [link, setLink] = useState("");
  const [picture, setPicture] = useState(null);

  const handleOneImage = (e) => {
    const uploadFile = e.target.files[0];
    setPicture([uploadFile]);
    
  };

  useEffect(() => {
    if (show) {
      setLink(dataEdit.link);
      setPicture(dataEdit.image);  
    }
  }, [dataEdit, show]);
  const handleSaveChanges = () => {
    const formData = new FormData();
    formData.append('link', link);
    formData.append('image', picture[0]);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    axios.post(`/api/slider/update/${dataEdit.id}`, formData, config).then(res => {
      if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          handleClose()
          loadData()
          
      } else {
          swal("Error", res.data.message, "error");
      }
    }).catch(error => {
        swal("Error", "Something went wrong!", "error");
    });

  };

  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sửa sản phẩm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form encType="multipart/form-data">
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              name="link"
              value={link}
              onChange={(event) => setLink(event.target.value)}
            />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ảnh</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleOneImage}
              accept="image/*"
            />
          </Form.Group>
            <div className="mb-3">
              <img src={`http://localhost:8100/${dataEdit.image}`} alt="" style={{ width: '100px', height: '100px' }} />
            </div>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditSlider;
