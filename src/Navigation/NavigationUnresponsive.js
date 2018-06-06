import React from 'react';
import ReactDOM from 'react-dom';
import './NavigationUnresponsive.css';

class NavigationUnresponsive extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="nav1">
                    <a class="active" href="#Tab1">Tab1</a>
                    <a href="#Tab2">Tab2</a>
                    <a href="#Tab3">Tab3</a>
                    <a href="#Tab4">Tab4</a>
                </nav>
            </div>
        );
    }
}

ReactDOM.render(<NavigationUnresponsive/>, document.getElementById('root'));

export default NavigationUnresponsive;