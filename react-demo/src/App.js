import React, {useEffect, useState} from 'react';
import './App.css';

function App(props) {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [count, setCount] = useState(props.intialCount);

    useEffect(() => {
        // Use effects to update the title
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="app-group">
            <h1 id="app-title">You clicked {count} times</h1>
            <button className="app-button" onClick={() => setCount(count + 1)}>
                Increase count
            </button>
        </div>
    );
}

export default App;
