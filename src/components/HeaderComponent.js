import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap'
class Header extends Component {
  constructor(props){
    super(props);
  }
    render(){
 return (
    <>
        <Navbar dark >
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <Jumbotron>
            <div className="container">
              <div className='row row-header'>
                <div className='col-12 col-sm-6'>
                <h1>Ristorante Con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. OUrlipsmaking creations will tickle your culinary sense</p>
                </div>
              </div>
            </div> 
            </Jumbotron>
    </>
 );
}

}

export default Header
