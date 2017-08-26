var GroceryList = () => (
  <div>
    <h1>My GroceryList</h1>
    <GroceryListItem items={['Kale', 'Cucumbers', 'Cheetos']}/>
  </div>
);

var GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));