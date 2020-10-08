import React, { Component } from 'react'
import './Home.css'

export default class ourValues extends Component {
    
    state = {
        clicked1:false,
        clicked2:false,
        clicked3:false,
        clicked4:false,
    }
    
    handleClick1 = () =>{
        this.setState({clicked1: !this.state.clicked1})
    }
    handleClick2 = () =>{
        this.setState({clicked2: !this.state.clicked2})
    }
    handleClick3 = () =>{
        this.setState({clicked3: !this.state.clicked3})
    }
    handleClick4 = () =>{
        this.setState({clicked4: !this.state.clicked4})
    }
    
    render() {
        
           
            
        return (
            <div>
                 <div className="ourvalues">
                    <h3 id="our-values-h3">OUR VALUES</h3>
                    <div className="ourValues-content">
                        <h2 className="our-service-h2" onClick={this.handleClick1}><strong>+</strong>Transparency</h2>

                        <p className={this.state.clicked1 ? 'ourValues-p1-active' : 'ourValues-p1'}>The best patient is an educated patient. You deserve full transparency, so we carefully explain each treatment every step of the way.</p>                    
                        <p className={this.state.clicked1 ? 'ourValues-p1-active' : 'ourValues-p1'}>We'll make sure you know why you are being prescribed a treatment and the precise cost of every procedure before it begins. Your treatment doesn't end until you are fully satisfied with the care you've received.</p>
                        
                        
                       
                        <h2  className="our-service-h2" onClick={this.handleClick2}><strong>+</strong>Excellence</h2>
                       
                        <p className={this.state.clicked2 ? 'ourValues-p2-active' : 'ourValues-p2'}>You deserve exceptional dental care, so we tackle every treatment with our full attention and expertise. Our state-of-the-art dental equipment allows us to better diagnose your specific needs, and treat them quickly and painlessly.</p>
                        <p className={this.state.clicked2 ? 'ourValues-p2-active' : 'ourValues-p2'}>And you'll be in good hands. Our doctor completes over 100 hours of additional training each year, perfecting her skills and incorporating the latest developments in dental medicine.</p>
                        
                        
                        <h2 className="our-service-h2" onClick={this.handleClick3}><strong>+</strong>Service</h2>
                       
                        <p className={this.state.clicked3 ? 'ourValues-p3-active' : 'ourValues-p3'}>A trip to the dentist’s office should be a source of serenity, not anxiety.</p>
                        <p className={this.state.clicked3 ? 'ourValues-p3-active' : 'ourValues-p3'}>We’ve cut out the paperwork and streamlined the entire dentist experience. Book your appointments and complete your forms online. You can check in on an iPad when you arrive, and receive a clearly itemized invoice before your leave.</p>
                        <p className={this.state.clicked3 ? 'ourValues-p3-active' : 'ourValues-p3'}>Need an escape during your treatment? Watch Netflix or Hulu while we work our magic.</p>
                        
                        
                        
                        <h2 className="our-service-h2" onClick={this.handleClick4}><strong>+</strong>Mindfulness</h2>
                        
                        <p className={this.state.clicked4 ? 'ourValues-p4-active' : 'ourValues-p4'}>Beautiful smiles begin on the inside, which is why our commitment to exceptional dentistry demands we honor your soul as well.</p>
                        <p className={this.state.clicked4 ? 'ourValues-p4-active' : 'ourValues-p4'}>We have designed a space to serve as an oasis of escape, with modern design, a matcha tea station, as well as a meditation cell to help you achieve mindfulness and tranquility.</p>

                    </div>
                   
                    <img id="our-values-img"src="https://images.squarespace-cdn.com/content/v1/5c17af22b1059880765e0b8d/1545232073891-TPBK1JL73VEVTIO74NMP/ke17ZwdGBToddI8pDm48kE1EKP5nE2dqxxpl0U3vO1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMKbQac2x_EhXwQfdpwbJc3thZqdrwzmTIwdo7Z_FIdYyyN25EoqSd7E7Ez3rYi6n/Zen+Dental+Office+Space?format=750w" alt=""/>
                </div>
            </div>
        )
    }
}
