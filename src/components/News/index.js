import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export default function News() {


  return (
    
      <div className="news-bg" id='news'>
        <Col className='main'>
          <br />
          <h1>Aktualności</h1>
          <NewsInfiniteScroll />
        </Col>
      </div>
  )
}

function NewsInfiniteScroll() {
  const [items, setItems] = useState(Array.from({ length: 10 }))
  const [hasMore, setHasMore] = useState(true)
  const { height, width } = getWindowDimensions();
  function fetchMoreData() {
    if (items.length >= 90) {
      setHasMore(false)
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setItems([...items + Array.from({ length: 40 })])
    }, 500);
  };
  return (
    <div className='scrollDiv'>
      <hr />
      <InfiniteScroll className='infiniteScrollDiv row justify-content-around gx-0'
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Ładowanie...</h4>}
        height={height - 150}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Przejrzałeś już wszystkie aktualności.</b>
          </p>
        }
      >
        {items.map((i, index) => (
          <Card key={index}/>
        ))}
      </InfiniteScroll>
    </div>
  );
}


function Card({ bgImg }) {
  return (
    <>
    <div className="newsCard col-xs-11 col-sm-11 col-md-5 col-lg-3" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg)'}}>
      <div className='cardText'>
        Mewa
      </div>
    </div>
    </>
  )
}