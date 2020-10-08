import React, { Component } from 'react';  
import Carousel from 'react-carousel-liron';
export default class DemoCarousel extends Component {
  render() {   
    const divp = {
        color: '#3A4145',
        width: "67%",
        marginRight:"17%",
      };     
    const divh1={
        color: "black",
        fontSize: "20px",
        marginLeft: "-87%",
        fontWeight: "300",
    };

    return (
      <div className="container">
        <Carousel>
            <div>
              
                <h1 style={divh1}>Vanessa C</h1>
                <p style={divp}>The staff from receptionist to hygienist to doctor were all so lovely, warm, attentive, helpful and took time to explain everything thoroughly. Highly recommend this office for dental needs!</p>
            </div>
            <div>
                <h1 style={divh1}>Bruno T</h1>
                <p style={divp}>Great Service and super professional! Very relaxed atmosphere makes going to the dentist a enjoyable experience. Totally recommended.</p>
            </div> 
            <div>
                <h1 style={divh1}>Jeff G</h1>
                <p style={divp}>I’m primarily writing this because I was running late to my first appointment and things couldn’t have gone better when I arrived . All the staff was extremely kind, calm, and friendly. The hygienist as well as the doctor was professional and explained everything in an understandable way. I highly recommend this place.</p>
            </div> 
            <div>
                <h1 style={divh1}>Shuting G</h1>
                <p style={divp}>This is the first time I visited the studio and it’s actually a well-designed place, very modern and elegant and clean! The dentists are friendly and professional and the space feel relaxed (because you get to lie down watching Netflix!) visits to the dentist usually don’t mean good news but I would definitely recommend this studio</p>
            </div>              
        </Carousel>
      </div>
    );
  }
}



