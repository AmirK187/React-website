import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../Assets/img/about.jpg';
import TimeLine from '../Common/TimeLine';


class About extends Component {
    render(){
        return(
          <div>
          <Header

          title= "About Us"
          subtitle= "It's a Good Story"
          buttonText= "Tell me more"
          showButton={false}
          image= {image}

          />
         <TimeLine />

           
        </div>
        )
    }
}

export default About;