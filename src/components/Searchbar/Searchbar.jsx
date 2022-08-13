import PropTypes from 'prop-types';
import { useState } from 'react';

import { toast } from 'react-toastify';

import { FaSearch } from 'react-icons/fa';
import { Wrapper, Form, Button, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChangeInput = e => {
    setQuery(e.currentTarget.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter a search term.');
      return;
    }

    onSubmit(query);
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmitForm}>
        <Button type="submit">
          <FaSearch size={12} />
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChangeInput}
        />
      </Form>
    </Wrapper>
  );
};

Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
