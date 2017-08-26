var GroceryList = () => (
  <ul>
    <h1>My GroceryList</h1>
    <Cucumbers />
    <Kale />
  </ul>
);

var Cucumbers = () => (
  <li>Cucumbers</li>
);

var Kale = () => (
  <li>Kale</li>
);

// var GroceryListItem = (props) => (

// );

ReactDOM.render(<GroceryList />, document.getElementById('app'));