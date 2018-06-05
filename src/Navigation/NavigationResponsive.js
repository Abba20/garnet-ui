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
                    <a href= "#Tab1" class="active"> Link 1</a>    
                    <a href= "#Tab2"> Link 2</a>
                    <a href= "#Tab3"> Link 3</a>
                    <a href= "#Tab4"> Link 4</a>
                    <a href= "#Tab5"> Link 5</a>       
                </nav>
            </div>
        );
    }
}

export default NavigationResponsive;

ReactDOM.render(<NavigationResponsive/>, document.getElementById('root'));