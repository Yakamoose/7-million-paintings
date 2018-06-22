import React from 'react';
import axios from "axios";
import {connect} from 'react-redux';

import './art.css';

//insert eno image urls too!!!
let images = [
  // `url('https://source.unsplash.com/collection/1178910/1000x1000')`,
  // `url('https://source.unsplash.com/collection/641239/1000x1000')`,
  // `url('https://source.unsplash.com/collection/772323/1000x1000')`,
  // `url('https://source.unsplash.com/collection/1045118/1000x1000')`,
  // `url('https://source.unsplash.com/collection/1178910/1000x1000')`,
  // `url('https://source.unsplash.com/collection/641239/1000x1000')`,
  // `url('https://source.unsplash.com/collection/772323/1000x1000')`,
  // `url('https://source.unsplash.com/collection/1045118/1000x1000')`,
  // `url('https://source.unsplash.com/collection/1178910/1000x1000')`,
  // `url('https://source.unsplash.com/collection/641239/1000x1000')`,


  `url('https://i.ytimg.com/vi/r9t8kQrNbTw/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/VRkNrWp6tLg/hqdefault.jpg')`,
  `url('https://i.ytimg.com/vi/-PrvEjhnxy8/hqdefault.jpg')`,
  `url('http://www.losanjealous.com/img/77mil3.jpg')`,
  `url('https://pbs.twimg.com/media/CsR9p8SUIAETIFW.jpg')`,
  `url('http://www.culture24.org.uk/asset_arena/8/90/5098/v0_master.jpg')`,
  `url('http://cdm.link/files//2007/06/eno.jpg')`,
  `url('https://i.pinimg.com/originals/15/db/d0/15dbd01c3bafd6d3f520653037df4ca1.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vfllOIx4L4A47XqKnXXkPCiZn1lZxxUj3pW88OwBD8gh4WRW')`,
  `url('http://balticplus.uk/images/14251/7/820x695_s0_f0_n1_cffffff_m0_q90/0/0/?_=vZPDO')`,
  `url('https://i.ytimg.com/vi/iWo8DYKLBzw/maxresdefault.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9ZkW_alqXOZjJSN5coQyP48FqEAf5wOrIseFDQuZopnph_S5')`,
  `url('http://www.moredarkthanshark.org/images/77million_iteration3.jpg')`,
  `url('http://iandimusic.com/weeklynoise/wp-content/uploads/2011/11/77m-10k-members-painting-brian-eno-09_1.jpg')`,
  `url('https://pbs.twimg.com/media/CsR9p8SUIAETIFW.jpg')`,
  `url('http://balticplus.uk/images/14251/7/820x695_s0_f0_ce6e6e6_m0_q90/0/0/brian-eno-77-million-paintings/?_=dkH3L')`,
  `url('http://d3ct8f39dj9jhs.cloudfront.net/wp-content/uploads/2017/06/a-b-IMG_4520-77-extra-closeup-1.jpeg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDjYUkBNON3iof56azkZOTbLpkJ3LbmylKfYBpywZvebyXY-I')`,
  `url('http://www.beyondchron.org/wp-content/uploads/news_images/2007/eno2a.jpg')`,
  `url('http://balticplus.uk/images/14248/7/820x695_s0_f0_ce6e6e6_m0_q90/0/0/brian-eno-77-million-paintings/?_=Jh%2FZ5')`,
  `url('http://artweek.la/upload/2654/venice.jpg')`,
  `url('http://media.longnow.org/files/2/longphoto-77million-006.jpg')`,
  `url('https://laughingsquid.com/wp-content/uploads/brian_eno_77_million.jpg')`,
  `url('https://i.pinimg.com/originals/40/6e/09/406e09cad4c17252211d3cd2c5d2a66d.jpg')`,
  `url('https://i.pinimg.com/236x/e3/d0/00/e3d0006e7bcfd4dafb649db13df35592--matt.jpg')`,
  `url('https://pbs.twimg.com/media/DQpxs0WVAAcegtm.jpg')`,
  `url('https://i.ytimg.com/vi/eoTA9mu3L3k/maxresdefault.jpg')`,
  `url('https://cdn.dialogues.org/100555/external/5744d3d2e4b01e48b16d6d74/bg_tn_01jvc2c75p_100555.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp95vLxutwSdPuu5-zK2zh-9oDH3IGi-ONftCXZ1BXmKJgwvTs')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYR-DQN7Yo1yTUTNBnvpwfsBujDoREZ6XYLn3E7oXMelvAqV6OQ')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxl2W62-xaFnhlmu5w7KeZc0te2gN9dw0JoYWnEDx-_vIUIcRG')`,
  `url('https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2010/5/18/1274198207059/77-Million-Paintings-by-B-009.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=89c73fe35b668188b62a918150206d89')`,
  `url('https://i.ytimg.com/vi/nTm5j2dexXg/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/IguCBjbVBLM/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/_06fTFFMoi0/hqdefault.jpg')`,
  `url('https://patternsandco.files.wordpress.com/2017/09/brian-eno-thursday-afternoon-61-minute-version.jpg?w=525')`,
  // `url('https://source.unsplash.com/collection/772323/1000x1000')`,
  `url('https://i.ytimg.com/vi/r9t8kQrNbTw/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/VRkNrWp6tLg/hqdefault.jpg')`,
  `url('https://i.ytimg.com/vi/-PrvEjhnxy8/hqdefault.jpg')`,
  `url('http://www.losanjealous.com/img/77mil3.jpg')`,
  `url('https://pbs.twimg.com/media/CsR9p8SUIAETIFW.jpg')`,
  `url('http://www.culture24.org.uk/asset_arena/8/90/5098/v0_master.jpg')`,
  `url('http://cdm.link/files//2007/06/eno.jpg')`,
  `url('https://i.pinimg.com/originals/15/db/d0/15dbd01c3bafd6d3f520653037df4ca1.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vfllOIx4L4A47XqKnXXkPCiZn1lZxxUj3pW88OwBD8gh4WRW')`,
  `url('http://balticplus.uk/images/14251/7/820x695_s0_f0_n1_cffffff_m0_q90/0/0/?_=vZPDO')`,
  `url('https://i.ytimg.com/vi/iWo8DYKLBzw/maxresdefault.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9ZkW_alqXOZjJSN5coQyP48FqEAf5wOrIseFDQuZopnph_S5')`,
  `url('http://www.moredarkthanshark.org/images/77million_iteration3.jpg')`,
  `url('http://iandimusic.com/weeklynoise/wp-content/uploads/2011/11/77m-10k-members-painting-brian-eno-09_1.jpg')`,
  `url('https://pbs.twimg.com/media/CsR9p8SUIAETIFW.jpg')`,
  `url('http://balticplus.uk/images/14251/7/820x695_s0_f0_ce6e6e6_m0_q90/0/0/brian-eno-77-million-paintings/?_=dkH3L')`,
  `url('http://d3ct8f39dj9jhs.cloudfront.net/wp-content/uploads/2017/06/a-b-IMG_4520-77-extra-closeup-1.jpeg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDjYUkBNON3iof56azkZOTbLpkJ3LbmylKfYBpywZvebyXY-I')`,
  `url('http://www.beyondchron.org/wp-content/uploads/news_images/2007/eno2a.jpg')`,
  `url('http://balticplus.uk/images/14248/7/820x695_s0_f0_ce6e6e6_m0_q90/0/0/brian-eno-77-million-paintings/?_=Jh%2FZ5')`,
  `url('http://artweek.la/upload/2654/venice.jpg')`,
  `url('http://media.longnow.org/files/2/longphoto-77million-006.jpg')`,
  `url('https://laughingsquid.com/wp-content/uploads/brian_eno_77_million.jpg')`,
  `url('https://i.pinimg.com/originals/40/6e/09/406e09cad4c17252211d3cd2c5d2a66d.jpg')`,
  `url('https://i.pinimg.com/236x/e3/d0/00/e3d0006e7bcfd4dafb649db13df35592--matt.jpg')`,
  `url('https://pbs.twimg.com/media/DQpxs0WVAAcegtm.jpg')`,
  `url('https://i.ytimg.com/vi/eoTA9mu3L3k/maxresdefault.jpg')`,
  `url('https://cdn.dialogues.org/100555/external/5744d3d2e4b01e48b16d6d74/bg_tn_01jvc2c75p_100555.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp95vLxutwSdPuu5-zK2zh-9oDH3IGi-ONftCXZ1BXmKJgwvTs')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYR-DQN7Yo1yTUTNBnvpwfsBujDoREZ6XYLn3E7oXMelvAqV6OQ')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxl2W62-xaFnhlmu5w7KeZc0te2gN9dw0JoYWnEDx-_vIUIcRG')`,
  `url('https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2010/5/18/1274198207059/77-Million-Paintings-by-B-009.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=89c73fe35b668188b62a918150206d89')`,
  `url('https://i.ytimg.com/vi/nTm5j2dexXg/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/IguCBjbVBLM/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/_06fTFFMoi0/hqdefault.jpg')`,
  `url('https://patternsandco.files.wordpress.com/2017/09/brian-eno-thursday-afternoon-61-minute-version.jpg?w=525')`,
  // `url('https://source.unsplash.com/collection/772323/1000x1000')`
  `url('https://i.ytimg.com/vi/r9t8kQrNbTw/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/VRkNrWp6tLg/hqdefault.jpg')`,
  `url('https://i.ytimg.com/vi/-PrvEjhnxy8/hqdefault.jpg')`,
  `url('http://www.losanjealous.com/img/77mil3.jpg')`,
  `url('https://pbs.twimg.com/media/CsR9p8SUIAETIFW.jpg')`,
  `url('http://www.culture24.org.uk/asset_arena/8/90/5098/v0_master.jpg')`,
  `url('http://cdm.link/files//2007/06/eno.jpg')`,
  `url('https://i.pinimg.com/originals/15/db/d0/15dbd01c3bafd6d3f520653037df4ca1.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vfllOIx4L4A47XqKnXXkPCiZn1lZxxUj3pW88OwBD8gh4WRW')`,
  `url('http://balticplus.uk/images/14251/7/820x695_s0_f0_n1_cffffff_m0_q90/0/0/?_=vZPDO')`,
  `url('https://i.ytimg.com/vi/iWo8DYKLBzw/maxresdefault.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9ZkW_alqXOZjJSN5coQyP48FqEAf5wOrIseFDQuZopnph_S5')`,
  `url('http://www.moredarkthanshark.org/images/77million_iteration3.jpg')`,
  `url('http://iandimusic.com/weeklynoise/wp-content/uploads/2011/11/77m-10k-members-painting-brian-eno-09_1.jpg')`,
  `url('https://pbs.twimg.com/media/CsR9p8SUIAETIFW.jpg')`,
  `url('http://balticplus.uk/images/14251/7/820x695_s0_f0_ce6e6e6_m0_q90/0/0/brian-eno-77-million-paintings/?_=dkH3L')`,
  `url('http://d3ct8f39dj9jhs.cloudfront.net/wp-content/uploads/2017/06/a-b-IMG_4520-77-extra-closeup-1.jpeg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDjYUkBNON3iof56azkZOTbLpkJ3LbmylKfYBpywZvebyXY-I')`,
  `url('http://www.beyondchron.org/wp-content/uploads/news_images/2007/eno2a.jpg')`,
  `url('http://balticplus.uk/images/14248/7/820x695_s0_f0_ce6e6e6_m0_q90/0/0/brian-eno-77-million-paintings/?_=Jh%2FZ5')`,
  `url('http://artweek.la/upload/2654/venice.jpg')`,
  `url('http://media.longnow.org/files/2/longphoto-77million-006.jpg')`,
  `url('https://laughingsquid.com/wp-content/uploads/brian_eno_77_million.jpg')`,
  `url('https://i.pinimg.com/originals/40/6e/09/406e09cad4c17252211d3cd2c5d2a66d.jpg')`,
  `url('https://i.pinimg.com/236x/e3/d0/00/e3d0006e7bcfd4dafb649db13df35592--matt.jpg')`,
  `url('https://pbs.twimg.com/media/DQpxs0WVAAcegtm.jpg')`,
  `url('https://i.ytimg.com/vi/eoTA9mu3L3k/maxresdefault.jpg')`,
  `url('https://cdn.dialogues.org/100555/external/5744d3d2e4b01e48b16d6d74/bg_tn_01jvc2c75p_100555.jpg')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp95vLxutwSdPuu5-zK2zh-9oDH3IGi-ONftCXZ1BXmKJgwvTs')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYR-DQN7Yo1yTUTNBnvpwfsBujDoREZ6XYLn3E7oXMelvAqV6OQ')`,
  `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxl2W62-xaFnhlmu5w7KeZc0te2gN9dw0JoYWnEDx-_vIUIcRG')`,
  `url('https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2010/5/18/1274198207059/77-Million-Paintings-by-B-009.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=89c73fe35b668188b62a918150206d89')`,
  `url('https://i.ytimg.com/vi/nTm5j2dexXg/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/IguCBjbVBLM/maxresdefault.jpg')`,
  `url('https://i.ytimg.com/vi/_06fTFFMoi0/hqdefault.jpg')`,
  `url('https://patternsandco.files.wordpress.com/2017/09/brian-eno-thursday-afternoon-61-minute-version.jpg?w=525')`
  // `url('https://source.unsplash.com/collection/772323/1000x1000')`,

]

const length = images.length;

var lineUp=[];
for (let i=0;i<length;++i) lineUp[i]=i;
lineUp = shuffle(lineUp);

var lineUpB=[];
for (let i=0;i<length;++i) lineUpB[i]=i;
lineUpB = shuffle(lineUpB);

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function getUrlImageA(item, index) {
  var elems = document.getElementsByClassName('art');
  for (var i = 0; i < elems.length; i++) {
    return images[item];
  }
}

function getUrlImageB(item, index) {
  var elems = document.getElementsByClassName('art2');
  for (var i = 0; i < elems.length; i++) {
    return images[item];
  }
}



export class Art extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      imageA: "url('https://source.unsplash.com/collection/1178910/1000x1000')",
      imageB: "url('https://source.unsplash.com/collection/641239/1000x1000')",
      introMessage: 'Click image to save it to your gallery'
    };
    this.handleClick = this.handleClick.bind(this);

  };

  componentDidMount() {

    const component = this;
    lineUp.forEach(function(item, index) {
      setTimeout(function() {
        let imageA = getUrlImageA(item, index);
        component.setState({imageA});
      }, index * (8000))
    });

    lineUpB.forEach(function(item, index) {
      setTimeout(function() {
        let imageB = getUrlImageB(item, index);
        component.setState({imageB});
      }, index * 6000)
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicked');
    console.log(this.state)
    this.setState({introMessage: ''});
    let imgA = this.state.imageA;
    // imgA = imgA.slice(5, (imgA.length-2));

    let imgB = this.state.imageB;
    // imgB = imgB.slice(5, (imgB.length-2));
    console.log(imgA,imgB);

    let data = {
      imgA,
      imgB
    }

    axios.put(`http://localhost:8080/save-image/${localStorage.userId}`, data)
      .then((res) => {
        console.log(res.data);
        alert('Image saved to gallery!  Click OK to continue viewing.')
      })
  }
  // in return use like this         <p>{this.state.imageA}</p>

  render() {
    console.log(this.props.images)

    return (
      <div id="toClick">

        <div className="art-body" onClick={this.handleClick}>
          <div id="art">
            <div className="container container1">
              <div className="art piece1 rotate-scale-up" style={{backgroundImage: `${this.state.imageA}`}}></div>
            </div>
            <div className="container container2">
              <div className="art piece2 rotate-scale-up" style={{backgroundImage: `${this.state.imageA}`}}></div>
            </div>
            <div className="container container3">
              <div className="art piece3 rotate-scale-up" style={{backgroundImage: `${this.state.imageA}`}}></div>
            </div>
            <div className="container container4">
              <div className="art piece4 rotate-scale-up" style={{backgroundImage: `${this.state.imageA}`}}></div>
            </div>
          </div>

          <div id="art2">
            <div className="container container5">
              <div className="art2 piece5 rotate-scale-up" style={{backgroundImage: `${this.state.imageB}`}}></div>
            </div>
            <div className="container container6">
              <div className="art2 piece6 rotate-scale-up" style={{backgroundImage: `${this.state.imageB}`}}></div>
            </div>
            <div className="container container7">
              <div className="art2 piece7 rotate-scale-up" style={{backgroundImage: `${this.state.imageB}`}}></div>
            </div>
            <div className="container container8">
              <div className="art2 piece8 rotate-scale-up" style={{backgroundImage: `${this.state.imageB}`}}></div>
            </div>
          </div>
        </div>
        <p className="clickText">{this.state.introMessage}</p>

      </div>
    );
  }
}

// <button className="btn" onClick={this.handleClick}>SAVE THIS IMAGE</button>

// const mapStateToProps = (state) => ({
//   imageA: state.imageA,
//   imageB: state.imageB
// })
//
// export default connect(mapStateToProps)(Art);

export default connect()(Art);
