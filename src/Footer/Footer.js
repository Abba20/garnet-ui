import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <footer className="foot">
                <div>
                    <container>
                        <h6>I am a simple footer</h6>  
                    </container>
                </div>
            </footer>
        );
    }
}

export default Footer;

ReactDOM.render(<Footer/>, document.getElementById('root'));