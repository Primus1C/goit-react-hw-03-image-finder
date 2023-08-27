import React from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
//import { PixabayAPI } from '../api/pixabay';

export class App extends React.Component {
  state = {
    searchString: '',
    showModal: false,
    images: [],
    loadingInProgress: false
  }

  componentDidMount() {
    console.log('searching',this.state.searchString);
    
      //const response = pixabayAPI.getImages(this.state.searchString);
    
  }

  toggleModal = () => {
    //console.log('showModal',this.state.showModal);
    this.setState(({ showModal }) => ({      
      showModal: !showModal,
    })) 
  }

  handleSearch = ({ target }) => { 
    const normalizedSearch = target.value.trim();
    console.log('searching',target);
    this.setState({searchString: normalizedSearch})
  }

  render() {

    const { searchString, showModal } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      >
        <Searchbar
          onSubmit={this.handleSearch} />

       

        {/* {showModal && (<Modal onClose={this.toggleModal}>
          <h1>modal title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellat possimus assumenda consectetur dignissimos fuga quis hic, porro neque quas ratione libero vero dolore aliquam atque dolor autem rerum dolores?</p>  
        </Modal>)}
         */}
        
        <Button />
        
      </div>
    );
  };
}

