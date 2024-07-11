const parent = React.createElement('div', {id:'parent'}, React.createElement('div', {id:'child'}, React.createElement('h1',{}, "I'm a H1 tag in a div")))

React.createElement('h1', {id:"heading"}, 'Hello World from React!!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);