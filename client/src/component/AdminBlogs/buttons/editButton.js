import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const EditButton = ({ path }) => {
  return (
    <>
      <Link to={path}>
        <Button type="button" variant="outline-primary">
          Edit
        </Button>
      </Link>
    </>
  );
};
export default EditButton;
