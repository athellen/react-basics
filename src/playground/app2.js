// JSX - Javascript XML
var app = {
    title: 'Todo App',
    subtitles: 'business goals',
    options: ['life goals', 'career goals']
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitles}</p>
        <p>{app.options.length >0 ? 'Here are the options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
var user = {
    name: 'Andria',
    age: '22',
    location: 'Saudi Arabia'
};

function getLocation(location){
    return <p>City: {location}</p>
}

let count = 0;
const addOne = () => {
    count++;
   renderCounter();
};

const minusOne = () => {
    count--;
    renderCounter();
};

const reset = () => {
    count = 0;
    renderCounter();
};


//in javascript the curly brackets is used when you want an expression from an outside scope
var appRoot = document.getElementById('app');
const renderCounter = () => {
    var templatetwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

ReactDOM.render(templatetwo, appRoot);
};
renderCounter();