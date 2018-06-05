import React from 'react';
import ReactDOM from 'react-dom';
import './NavigationResponsive.css';

class NavigationResponsive extends React.Component {
    constructor(props) {
        super(props);
    }

    eventHandler(event) {

    }

    render() {
        return (
            <div>
                <nav className = "nav2">
                    <a >
                        <i class="fa fa-bars"></i>
                    </a>
                    <a href= "#Tab1" class="active"> Tab 1</a>    
                    <a href= "#Tab2"> Tab 2</a>
                    <a href= "#Tab3"> Tab 3</a>
                    <a href= "#Tab4"> Tab 4</a>
                    <a href= "#Tab5"> Tab 5</a>       
                </nav>
            </div>
        );
    }
}

export default NavigationResponsive;

ReactDOM.render(<NavigationResponsive/>, document.getElementById('root'));