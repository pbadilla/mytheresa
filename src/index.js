import ReactDOM from 'react-dom';
 
ReactDOM.render(
    <p>Hello world</p>,
    document.getElementById('app')
);
 
if (module.hot) {
  module.hot.accept();
}