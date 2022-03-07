import { Component } from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      toast.error('Enter a search term.');
      return;
    }

    onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;