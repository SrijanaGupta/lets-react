//creating hierarichal structure in HTML via React
const parent = React.createElement('div', {id:'parent'}, 
    React.createElement('div', {id:'child'}, [
        {}
    ]
    ))

React.createElement('h1', {id:"heading"}, 'Hello World from React!!');
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);