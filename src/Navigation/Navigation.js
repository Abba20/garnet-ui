import React from 'react';
import ReactDOM from 'react-dom';
import './Navigation.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle= this.toggle.bind(this);
    }

    toggle() {
        let link = document.getElementsByClassId('.sScreens');
        if (link.style.display === 'block') {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        } 
    }


    render() {
        return (
            <div>
                <nav className="rNav">
                    
                    {/*<div className="bigScreens">
                        <div className="bScreens">
                            <a href="https://reactjs.org/"> Tab 1 </a>
                            <a href="https://reactjs.org/docs/hello-world.html"> Tab 2 </a>
                            <a href="https://reactjs.org/"> Tab 3 </a>
                            <a href="https://reactjs.org/docs/hello-world.html"> Tab 4 </a>
                            <a href="https://reactjs.org/"> Tab 5 </a>
                        </div>
        </div> */}

                    <div className="smallScreens">
                        <i className="collapse"></i>
                        <div className="sScreens">
                            <a href="https://reactjs.org/docs/hello-world.html"  className="active" onClick={this.toggle}> Tab 1 </a>
                            <a href="https://reactjs.org/" onClick={this.toggle}> Tab 2 </a>
                            <a href="https://reactjs.org/docs/hello-world.html" onClick={this.toggle}> Tab 3 </a>
                            <a href="https://reactjs.org/" onClick={this.toggle}> Tab 4 </a>
                            <a href="https://reactjs.org/docs/hello-world.html" onClick={this.toggle}> Tab 5 </a>
                        </div>
                    </div>

                </nav>
            </div>
        );
    }
}

//ReactDOM.render(<Navigation />, document.querySelector('navbar'));
ReactDOM.render(<Navbar/>, document.getElementById('root'));

export default Navbar;