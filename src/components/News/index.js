import React from 'react'
import { Col } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"


export default function News() {


  return (
    
      <div className="news-bg" id='newsbg'>
        <Col className='main'>
          <br />
          <h1>Aktualności</h1>
          <NewsInfiniteScroll />
        </Col>
      </div>
  )
}


class NewsInfiniteScroll extends React.Component {
  state = {
    items: Array.from({ length: 40 }),
    hasMore: false
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  render() {
    return (
      <div className='scrollDiv'>
        <hr />
        <InfiniteScroll className='infiniteScrollDiv row justify-content-around gx-0'
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={620}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <Card key={index}/>
            // <div style={style} key={index}>
            //   div - #{index}
            // </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}


function Card({ bgImg }) {
  return (
    <>
    <div className="newsCard col-xs-11 col-sm-11 col-md-5 col-lg-3" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg)'}}>
      <div className="blankDiv" />
      <div className='cardText'>
        Mewa
      </div>
    </div>
    </>
  )
}