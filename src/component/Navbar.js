import React,{ Component } from 'react'
import './Home.css';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {

    state = {clicked:false}
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
    return (
        <div>
            <nav className="navbar">
                <Link to="#"><img className="logo" src="https://static1.squarespace.com/static/5c17af22b1059880765e0b8d/t/5c17b7f4758d463b971d3a46/1592197429666/?format=1500w" alt="logo"/></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-items'}>
                    <li className="nav-links"><Link to="#">COVID-19</Link></li>
                    <li className="dropdown nav-links">
                        <span>ABOUT</span>
                        <div className="dropdown-content">
                            <Link id="dropdown-content-item" to="#">STAFF</Link><br/>
                            <Link id="dropdown-content-item" to="#">OFFICE</Link>
                        </div>
                    </li>
                    <li className="dropdown nav-links">
                        <span>PATIENTS</span>
                        <div className="dropdown-content">
                            <Link to="#">INSURANCE</Link><br/>
                            <Link to="#">MEMBERSHIP</Link>
                        </div>
                    </li>
                    <li className="nav-links"><Link to="#">CONTACT</Link></li>
                    <li className="nav-links"><Link to="#"><button className="btn">BOOK NOW</button></Link></li>
                </ul>
            </nav>
        </div>
    )
}
}