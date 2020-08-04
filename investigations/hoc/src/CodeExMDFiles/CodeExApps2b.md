### Text Code Example (for Appetizers2aCodeEx)

```javascript
class Appetizer extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.toggle}>{this.props.on ? "Hide" : ``"Show"}  </button>
          <div style={{visibility: this.props.on ? "visible" : "hidden"}}>
            <ul className="teasers">
              <li className="items">Stuffed Clams</li>
              <li className="items">Fried Mozzerella Sticks</li>
              <li className="items">Stuff Mushrooms</li>
              <li className="items">Fried Clams</li>
            </ul>
          </div>
      </div>
    )
  }
}

const SuperMenu = withToggler(Appetizer)
export default SuperMenu