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
                    <container className="top">
                        <img src={facebookLogo} className="fLogo" alt="facebookLogo" />
                        <img src={googlePlusLogo} className="gLogo" alt="googlePlusLogo" />
                        <img src={instagramLogo} className="iLogo" alt="instagramLogo" />
                        <img src={linkedinLogo} className="lLogo" alt="linkedinLogo" />
                        <img src={twitterLogo} className="tLogo" alt="twitterLogo" />
                    </container>

                    <container className="middle">
                        <row md="6">
                            <column align="left">
                                <h5>Contact</h5>
                            </column>
                            <column align="right">
                                <h5>Products</h5>
                            </column>
                        </row>
                    </container>

                    <container className="bottom">
                        &copy; {(new Date().getFullYear())} Copyright
                    </container>
                </div>
            </footer>
        );
    }
}

export default StackedFooter;

ReactDOM.render(<StackedFooter/>, document.getElementById('root'));