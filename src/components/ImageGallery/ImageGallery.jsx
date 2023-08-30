import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import { getImages } from 'api/pixabay';
import './ImageGallery.css';

export default class ImageGallery extends React.Component {
  state = {
    images: [],
    searchString: '',
  }

  componentDidUpdate(prervProps, prevState) {
    if (prervProps.searchString !== this.props.searchString) {
      const data = getImages({ strQuery: this.props.searchString, page: 1 });
      console.log(data)
      //this.setState({images:data.value.hits});
    }

  }
  

  async componentDidMount() {
    /*
    console.log('render', this.props.searchString)
    const data = await getImages({ strQuery:this.props.searchString, page:1 });
    //const { total, totalHits, hits } = data;
    this.setState({images:data.hits});
    //console.log(total, totalHits, hits)
    */
  }
  
  render() {

    return (
      <ul className="ImageGallery">
        {this.state.images.map(({id,webformatURL,tags,largeImageURL}) => { 
          return (
            <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
          )
        }
        
        )}  
      </ul>
    )
  }
}

