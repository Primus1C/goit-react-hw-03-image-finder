import React from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';

export class App extends React.Component {
  state = {
    searchString: '',
    showModal: false,
    //images: [],
    loadingInProgress: false
  }

  componentDidMount() {
    console.log('App searching', this.state.searchString); 
    
    //if (this.state.searchString.length > 0) {
    //  const response = getImages(this.state.searchString);
    //  console.log('response==>', response);
    //}
    
  }

  toggleModal = () => {
    //console.log('showModal',this.state.showModal);
    this.setState(({ showModal }) => ({      
      showModal: !showModal,
    })) 
  }

  handleSearchFormSubmit = data => {
    //console.log('state-searchString', this.state.searchString);
    console.log('App submit ==>', data.trim().replaceAll(' ','+'));
    const normalizedSearch = data.trim().replaceAll(' ','+');
    this.setState({ searchString: normalizedSearch });
  }

  render() {

    const { searchString, showModal } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      >
        <Searchbar
          onSubmitSearchForm={this.handleSearchFormSubmit} />

        <ImageGallery
          //searchString={this.state.searchString} />
          searchString={searchString} />

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

