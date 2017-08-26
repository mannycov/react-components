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
      done: false,
      fontWeight: 'normal'
    };
  }

  // When a list item is clicked, toggle the `done` boolean and the component's `render` method will run again

  onListItemClick() {
    this.setState({
      done: !this.state.done,
    });
  }

  mouseEnter() {
    this.setState({
      fontWeight: 'bold'
    });
  }

  mouseLeave() {
    this.setState({
      fontWeight: 'normal'
    });
  }

  // state is false
  // on mouse enter change the state to true
  // set the fontWeight to bold

  // when the fontWeight is bold the state is true
  // on mouse leave change the state to false
  // set the fontWeight to normal

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.fontWeight
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>{this.props.item}</li>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

