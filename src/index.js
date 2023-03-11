import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section_two from "./section_two";
import Section_one from "./firstsection";
// import Section_three from "./thirdsection";
import {Boox} from "./secondsectionstyle"
import SimpleSlider from "./fourthsection";
import Section_six from "./sixthsection";



// const title = "Michael Zaccardo";
// const post = "Vice President of Sports Partnerships";
// const mail = "michael@micdropagency.com";



function Main() {
  return(
    <div>
      <Section_six></Section_six>
      <div className="Sec-sec">
         <h1 className='headx'>Industry Challenges & Solutions</h1>
      <section className="Section-one">
      <Section_two />
      <Section_two />
      <Section_two />
    </section>
    <section className="Section-two">
      <Section_two />
      <Section_two />
      <Section_two />
    </section>
    </div>
      <Section_one></Section_one>

    
    
 
  <SimpleSlider></SimpleSlider>
  <Section_six></Section_six>
    </div>
  );
}



ReactDOM.render(<Main />,document.getElementById('root'));

