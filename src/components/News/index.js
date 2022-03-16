import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

const news = [
{
  title: "Lorem Ipsum1",
  description: "Lorem Ipsum1",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum2",
  description: "Lorem Ipsum2",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum3",
  description: "Lorem Ipsum3",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum4",
  description: "Lorem Ipsum4",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum5",
  description: "Lorem Ipsum5",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum6",
  description: "Lorem Ipsum6",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum1",
  description: "Lorem Ipsum1",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum2",
  description: "Lorem Ipsum2",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum3",
  description: "Lorem Ipsum3",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum4",
  description: "Lorem Ipsum4",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum5",
  description: "Lorem Ipsum5",
  image: "./bg.jpg"
},
{
  title: "Lorem Ipsum6",
  description: "Lorem Ipsum6",
  image: "./bg.jpg"
},
]



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

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class NewsInfiniteScroll extends React.Component {
  state = {
    items: Array.from({ length: 40 }),
    hasMore: true
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


function Card() {
  return (
    <>
    <div className="newsCard col-xs-11 col-sm-11 col-md-5 col-lg-3">
      Test
    </div>
    </>
  )
}