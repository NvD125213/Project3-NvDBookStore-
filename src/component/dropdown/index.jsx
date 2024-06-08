import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DropdownComponent = ({ title, items, onSelect }) => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={title}
      onSelect={onSelect}
    >
      {items.map((item, index) => (
        <Dropdown.Item key={index} eventKey={item.value}>
          {item.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownComponent;
