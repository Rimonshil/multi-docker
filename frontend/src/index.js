import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Hello from Frontend</h1>
            <p>Fetching data from the backend...</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

