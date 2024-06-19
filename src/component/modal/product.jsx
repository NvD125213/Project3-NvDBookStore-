import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap';
import swal from "sweetalert";
import axios from 'axios';

const ModalEditProduct = (props) => {
  const { show, handleClose, dataEdit, option, loadData } = props;
  console.log(dataEdit)
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [author, setAuthor] = useState('');
  const [discount, setDiscount] = useState(0);

  const [description, setDescription] = useState("");
  const [parentID, setParentID] = useState("");
  const [picture, setPicture] = useState(null);

  const handleOneImage = (e) => {
    const uploadFile = e.target.files[0];
    setPicture([uploadFile]);
    
  };

  useEffect(() => {
    if (show) {
      setName(dataEdit.name);
      setPrice(dataEdit.price);
      setQuantity(dataEdit.quantity);
      setDescription(dataEdit.description);
      setParentID(dataEdit.parentID || "");
      setPicture(dataEdit.image);  
      setAuthor(dataEdit.author);
      setDiscount(dataEdit.discount)
    }
  }, [dataEdit, show]);
  const handleSaveChanges = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('author', author);
    formData.append('discount', discount);

    formData.append('description', description);
    formData.append('parentID', parentID);
    formData.append('image', picture[0]);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    axios.post(`/api/product/update/${dataEdit.id}`, formData, config).then(res => {
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
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Giá (vnd)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Số lượng (quyển)</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </Form.Group>  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tác giả</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Discount (đơn vị: %)</Form.Label>
            <Form.Control
              type="number"
              name="discount"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
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
              <img src={`http://localhost:8100/${dataEdit.image}`} alt="Product" style={{ width: '100px', height: '100px' }} />
            </div>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ghi chú</Form.Label>
            <Form.Control as="textarea" rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Danh mục cha</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="parentID"
              value={parentID}
              onChange={(event) => setParentID(event.target.value)}
            >
              <option value="">Danh mục lớn nhất</option>
              {option.map(item => (
                <option key={item.id} value={item.id}>
                  {item.display_name}
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
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditProduct;
