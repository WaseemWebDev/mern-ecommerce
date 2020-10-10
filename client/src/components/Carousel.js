import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'


export default function Slider() {
    const [index, setIndex] = useState(0);
          
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div >
           <Container><Row>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1o2L0PRr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://laz-img-cdn.alicdn.com/images/ims-web/TB10JDpURr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp"
                    alt="Second slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              
              </Carousel>
            
          
          
              </Row></Container>
        </div>
        
    )
}

