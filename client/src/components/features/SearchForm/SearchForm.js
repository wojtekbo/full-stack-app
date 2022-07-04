import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchPhrase, setSearchPhrase] = useState('');
  const submitForm = e => {
    e.preventDefault();
    setSearchPhrase('');
    navigate(`/search/${searchPhrase}`);
  };
  return (
    <Form onSubmit={e => submitForm(e)} className="d-flex w-50">
      <FormControl type="text" value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)} placeholder="Search" className="me-2" aria-label="Search" />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
