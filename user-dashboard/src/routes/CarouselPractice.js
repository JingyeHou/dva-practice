import React from 'react';
import { connect } from 'dva';
import { Alert, Badge, Card, Divider, Row, Col, Modal, Button, Carousel, Icon } from 'antd'
class CarouselPractice extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goto = this.goto.bind(this)
      }
      next() {
        this.carousel.next();
      }
      previous() {
        this.carousel.prev();
      }

      goto() {
          this.carousel.goTo(0)
      }
    render(){
        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: true,
          };
      return (
       
        <div>
      
        <Carousel ref={node => this.carousel = node } {...props}>
          <div key={1}><h3>1</h3></div>
          <div key={2}><h3>2</h3></div>
          <div key={3}><h3>3</h3></div>
          <div key={4}><h3>4</h3></div>
          <div key={5}><h3>5</h3></div>
          <div key={6}><h3>6</h3></div>
        </Carousel>
        <div style={{textAlign: 'center'}}>
          <button onClick={this.previous}>  <Icon type="double-left" theme="outlined" /></button>
          <button onClick={this.next}>Next</button>
          <button onClick={this.goto}>1</button>
        </div>
      </div>
      );
    }
  }
   
  export default connect()(CarouselPractice);