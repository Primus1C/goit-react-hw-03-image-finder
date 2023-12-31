import React from 'react';
import './Searchbar.css';
import {FaSistrix} from 'react-icons/fa'
import { toast } from 'react-toastify';

export default class Searchbar extends React.Component {
  state = {
    search: '',
  };

  handleChange = evt => { 
    this.setState({ search: evt.currentTarget.value });
  }
 
  handleSubmit = evt => {
    evt.preventDefault();
    //console.log('evt=>>', evt)
    if (this.state.search.trim()==='') {
      //alert('No text entered');
      toast.error('No text entered!');
      return;
    }
    this.props.onSubmitSearchForm(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return (
      <header className='Searchbar'>
        <form className='SearchForm' onSubmit={this.handleSubmit}>
          <button
            type='submit'
            className='SearchForm-button'
          >
            <FaSistrix className='react-icons'/>
            <span className='SearchForm-button-label'>Search</span>
          </button>
          <input
            className='SearchForm-input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}


/*
export default function Searchbar({ onSubmit }) {

    return (
      <header className='Searchbar'>
        <form className='SearchForm' onSubmit={onSubmit('test')}>
          <button type='submit' className='SearchForm-button'>
            <span className='SearchForm-button-label'>Search</span>
          </button>
          <input
            className='SearchForm-input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </form>
      </header>
    )
}
*/
