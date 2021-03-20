import './App.css';
import React, { useState } from 'react';

var randomtheme=require('./gamejamthemes');

// The added element component
const AddedElement = () => <div><p>{randomtheme.prototype.randomItem()}</p><p>{randomtheme.prototype.randomItem()}</p><p>{randomtheme.prototype.randomItem()}</p></div>

function App() {

    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <p>You clicked {count} times</p>
                    <div>{ <AddedElement/> }</div>

                    <button class="button" onClick={() => setCount(count + 1)}>
                        Game theme please!
                    </button>

                </div>

            </header>
        </div>
    );
}


export default App;
