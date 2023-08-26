import React from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

const API_KEY = '6095343-d47de4ae86d54fd6f681d759d';

export class App extends React.Component {
  state = {
    searchString: '',
    showModal: false,
  }

  toggleModal = () => {
    //console.log('showModal',this.state.showModal);
    this.setState(({ showModal }) => ({      
      showModal: !showModal,
    })) 
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
        <Searchbar />

        {showModal && (<Modal onClose={this.toggleModal}>
          <h1>modal title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellat possimus assumenda consectetur dignissimos fuga quis hic, porro neque quas ratione libero vero dolore aliquam atque dolor autem rerum dolores?</p>  
        </Modal>)}

      </div>
    );
  };
}

