import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Button, Icon, Input } from './Searchbar.styled';

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
    <Form onSubmit={onSubmitForm}>
      <Button type="submit">
        <Icon />
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
  );
};

export default Searchbar;
