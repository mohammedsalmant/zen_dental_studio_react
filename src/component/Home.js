import React from 'react';
import NavBar from './Navbar';
import WORDS from './carousel';
import MAP from './map';
import OurValues from './ourValues';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div >
            <div className="top">
                
                <NavBar />
                
                
                <div className="top1">
                    <img id="topimg1" src="https://images.squarespace-cdn.com/content/v1/5c17af22b1059880765e0b8d/1545057629069-UXUI39YFTU7QZG69X2ZX/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/
                            image-asset.jpeg?format=1500w" alt="topimg1"/>
                    <p id="topp1">Where your smile means more.</p>
                    <p id="topp2">Treat your smile, treat your soul.</p>
                    <button className="btn2">BOOK AN APPOINMENT</button>
                    <img id="topimg2" src="https://images.squarespace-cdn.com/content/v1/5c17af22b1059880765e0b8d/1546930283031-7H63E348DQSABFMJ1FV6/ke17ZwdGBToddI8pDm48kJ43oF3SmGioB7nTJwYtIrx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZvpXSFy9dgRlvPqH_ywZ3afxTor8oVRfQjmOdGN6VZCbd_6_chhqv-nBOr8t60dZw/ZENDENTALSTUDI
                             O_20180729_150751_6845.jpg?format=1000w" alt="topimg2"/>
                </div>
            </div>
            <div>
                <div className="middle">
                        <img id="middleimg" src="https://images.squarespace-cdn.com/content/v1/5c17af22b1059880765e0b8d/1545059351506-HS1HNQSFDKCUYNRAU7NS/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/ZENDENTALSTUDIO_20180729_145000
                        _       6824+copy.jpg?format=1500w" alt="middleimg"/>
                        <p id="middlep">At Zen Dental Studio, we believe a beautiful smile starts from within. Equipped with latest technology, our expert staff provides exceptional dental care within a space designed for personal rejuvenation and renewal.</p>
                </div>
            </div>
            
            <OurValues />
            
            <div className="our-services">
                <h1 id="our-services-h1">Our Services</h1>
                <p id="our-services-p">At Zen Dental Studio, nothing is more important than the highest quality of care. From state-of-the-art equipment to regular doctor training, our team remains at the forefront of modern dentistry. We incorporate the latest medical developments to ensure our patients’ care is fast, painless, and effective. </p>
                <h3 id="our-services-h3">SERVICES OFFERED</h3>
                <div className="our-services-h2">
                    <h2>Restorative</h2>
                    <h2>Preventative</h2>
                    <h2>Cosmetic</h2>
                    <h2>Invisalign</h2>
                    <h2>Whitening</h2>
                </div>
            </div>

            <div className="our-patients">
                <h1 id="our-services-h1">Our Patients</h1>
                <p id="our-services-p">Because we believe so deeply in the transformative power of a smile, we strive to ensure access to exceptional care for all clients, with and without insurance. Our guiding principle is to treat everyone with respect and compassion, working together to help you shine</p>
                <button className="btn3">ACCEPTED INSURENCES AND MEMBERSHIP PLANS</button>
            </div>  
            
            
            <div className="kind-words">
                <div className="kind-word-content">
                    <h3 id="kind-words-h3">KIND WORDS FROM OUR PATIENTS</h3>
                    <WORDS />
                </div>
            </div>

            <div className="em-tag">
                <em className="em-tag=1"> Have questions before you book an appointment?</em><br/><br/>
                <em  className="em-tag-2">We’re happy to answer your questions.</em>
                <button className="btn4">GET IN TOUCH</button>    
            </div>
            
            
            <div className="map">< MAP/></div>
            
            
            <div className="footer">
                <div className="footer-first">
                    <h3 id="info-h3">INFO</h3>
                    <div id="hr-1"><hr/></div>
                    
                    <h2 >
                        <Link id="info-h2" to="#">About</Link><br/>
                        <Link id="info-h2" to="#">Patients</Link><br/>
                        <Link id="info-h2" to="#">Contact</Link><br/>
                    </h2>
                    <button className="btn5">BOOK AN APPOINMENT</button>
                </div>
                
                <div className="footer-middle">
                    <h3 id="info-h3">SERVICES</h3>
                    <div id="hr-2"><hr/></div>
                    <h2  id="info-h2">
                        Restorative<br/>
                        Preventative<br/>
                        Cosmetic<br/>
                        Invisalign<br/>
                        Whitening<br/>
                    </h2>
                </div>
                
                
                <div className="footer-last">
                    <div>
                        <h3 id="info-h3">SOCIAL</h3>
                        <div id="hr-3"><hr/></div>
                        <h2 >
                            <Link id="info-h2" to="#">Facebook</Link><br/>
                            <Link id="info-h2" to="#">Instagram</Link><br/>
                        </h2>
                    </div>
                    <div>
                        <h3 id="info-h3">ADDRESS + CONTACT</h3>
                        <hr/>
                        <Link to="#">hello@zendentalsf.com</Link>
                        <h3 className="footer-last-h3">
                            254 5th Street<br/>
                            San Francisco<br/>
                            CA 94103<br/>
                            <Link to="#">Get directions →</Link>
                        </h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
