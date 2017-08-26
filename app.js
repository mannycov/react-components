var App = () => (
  <div>
    <h1>My GroceryList</h1>
    <GroceryList items={['Cucumbers', 'Kale', 'Cheetos']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
      )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  // When a list item is clicked, toggle the `done` boolean and the component's `render` method will run again

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));

