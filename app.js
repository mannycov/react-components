var GroceryList = (props) => (
  <ul>
    <h1>My GroceryList</h1>
    {props.items.map(item =>
      <GroceryListItem item={item} />
      )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li>{this.props.item}</li>
    );
  }

}

ReactDOM.render(<GroceryList />, document.getElementById('app'));