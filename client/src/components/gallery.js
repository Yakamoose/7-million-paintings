import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import GalleryArtPiece from './gallery-pieces';

import './gallery.css';



export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: {}
    };
  }

  componentDidMount() {
    const component = this;
    const userId = localStorage.userId;
    console.log(userId);

    axios.get(`http://localhost:8080/user/${userId}`)
      .then((res) => {
        const gallery = res.data.gallery;
        console.log(res.data.gallery[0]);
        console.log(res.data.gallery[1]);
        const imgA = '"'+res.data.gallery[0].imgA+'"';
        const imgB = '"'+res.data.gallery[0].imgB+'"';
        component.setState({gallery});
      })
    }
    // <GalleryArtPiece imgA={this.state.imgA} imgB={this.state.imgB} />;

  render() {
    let pieces = [];
    for(let i = 0; i < this.state.gallery.length; i++) {
      console.log(this.state.gallery[i]);
      pieces[i] =  <GalleryArtPiece imgA={this.state.gallery[i].imgA} imgB={this.state.gallery[i].imgB} />;
    }


    const lib = this.state;
    console.log(pieces);

    return (
      <div className="gallery">
        {pieces}
      </div>

    )
  }
}
