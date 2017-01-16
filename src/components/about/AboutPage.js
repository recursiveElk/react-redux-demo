import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
    render(){
        return (
            <div>
                <h1>About</h1>
                <p>This App uses React, Redux, React Router and other libaries.</p>
                <Link to="/" className="btn btn-primary">Return Home</Link>
            </div>
        );
    }
}

export default AboutPage;