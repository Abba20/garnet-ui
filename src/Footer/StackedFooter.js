import React from 'react';
import ReactDOM from 'react-dom';

import facebookLogo from './facebookLogo.svg';
import googlePlusLogo from './googlePlusLogo.svg';
import instagramLogo from './instagramLogo.svg';
import linkedinLogo from './linkedinLogo.svg';
import twitterLogo from './twitterLogo.svg';    
import './StackedFooter.css';

class StackedFooter extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerSize">
                    <div className="top">
                        <a href= "https://www.facebook.com/"> <img src={facebookLogo} className="fLogo" alt="facebookLogo" /></a> {"  "}
                        <a href= "https://plus.google.com/discover"> <img src={googlePlusLogo} className="gLogo" alt="googlePlusLogo" /></a> {"  "}
                        <a href= "https://www.instagram.com/"> <img src={instagramLogo} className="iLogo" alt="instagramLogo" /></a> {"  "}
                        <a href= "https://www.linkedin.com/"> <img src={linkedinLogo} className="lLogo" alt="linkedinLogo" /></a> {"  "}
                        <a href= "https://twitter.com/"> <img src={twitterLogo} className="tLogo" alt="twitterLogo" /></a> {"  "}
                    </div>

                    <div className="middle">
                            <column align="left">
                                <h5>Contact</h5>
                                <h6>The contact information of the business place</h6>
                            </column>
                            <column align="right">
                                <h5>Products</h5>
                                <h6>The list of products sold by the business</h6>
                            </column>
                    </div>

                    <div className="bottom">
                        &copy; {(new Date().getFullYear())} Copyright
                    </div>
                </div>
            </footer>
        );
    }
}

export default StackedFooter;

ReactDOM.render(<StackedFooter/>, document.getElementById('root'));