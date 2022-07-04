import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
  return (
    <Form className="d-flex w-50">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchForm;
