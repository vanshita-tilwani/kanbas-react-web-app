import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {FaEllipsisVertical} from "react-icons/fa6"
const ThreeDotsMenu = ({onEdit, onDelete, onPublish, onUnpublish, isPublished}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dropdown show={open} onToggle={() => setOpen(!open)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaEllipsisVertical  />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button" onClick={onEdit}>Edit</Dropdown.Item>
        <Dropdown.Item as="button" onClick={onDelete}>Delete</Dropdown.Item>
        <Dropdown.Item as="button" onClick={isPublished ? onUnpublish : onPublish}>{isPublished ? "Unpublish" : "Publish"}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ThreeDotsMenu;
