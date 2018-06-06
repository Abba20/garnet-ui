import React from 'react';
import ReactDOM from 'react-dom';
import './NavigationResponsive.css';
import menu from './menu.svg';

class NavigationResponsive extends React.Component {
    constructor(props) {
        super(props);
    }

    eventHandler(event) {
        const x= document.getElementById("nav2");
        if (x.className === "nav2") {
            x.className += "responsive";
        } else {
            x.className = "nav2";
        }
    }

    render() {
        return (
            <div>
                <nav className = "nav2">
                    <a href= "#Tab1" class="active"> Tab 1</a>    
                    <a href= "#Tab2"> Tab 2</a>
                    <a href= "#Tab3"> Tab 3</a>
                    <a href= "#Tab4"> Tab 4</a>
                    <a href= "#Tab5"> Tab 5</a> 
                    <a href="javascript:void(0);" className="icon" onClick={this.eventHandler}>
                        <img src={menu} className="mLogo" alt="menu" /> 
                    </a>   
                </nav>
            </div>
        );
    }
}

export default NavigationResponsive;

ReactDOM.render(<NavigationResponsive/>, document.getElementById('root'));