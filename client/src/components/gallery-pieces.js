import React from 'react'
import {connect} from 'react-redux'

import './gallery-pieces.css'

export default class GalleryArtPiece extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);

    this.State = {
      imgA: this.props.imgA,
      imgB: this.props.imgB
    }

  }


  render() {
    
    return (
      <div className="body">
        <div id="art">
          <div className="container container1">
            <div className="art piece1 rotate-scale-up" style={{backgroundImage: `${this.props.imgA}`}}></div>
          </div>
          <div className="container container2">
            <div className="art piece2 rotate-scale-up" style={{backgroundImage: `${this.props.imgA}`}}></div>
          </div>
          <div className="container container3">
            <div className="art piece3 rotate-scale-up" style={{backgroundImage: `${this.props.imgA}`}}></div>
          </div>
          <div className="container container4">
            <div className="art piece4 rotate-scale-up" style={{backgroundImage: `${this.props.imgA}`}}></div>
          </div>
        </div>

        <div id="art2">
          <div className="container container5">
            <div className="art2 piece5 rotate-scale-up" style={{backgroundImage: `${this.props.imgB}`}}></div>
          </div>
          <div className="container container6">
            <div className="art2 piece6 rotate-scale-up" style={{backgroundImage: `${this.props.imgB}`}}></div>
          </div>
          <div className="container container7">
            <div className="art2 piece7 rotate-scale-up" style={{backgroundImage: `${this.props.imgB}`}}></div>
          </div>
          <div className="container container8">
            <div className="art2 piece8 rotate-scale-up" style={{backgroundImage: `${this.props.imgB}`}}></div>
          </div>
        </div>
      </div>
    )
  }
}

GalleryArtPiece = connect()(GalleryArtPiece);
