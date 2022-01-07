import { Component } from "react";

class buttonWithClass extends Component {
    constructor () {
        super();
        this.state = {
          greeting: "Hello",
          title: "Main Title"
        }
      }
    render() {
        return (
            <div>
                <hi> {this.state.title} </hi>
                <p>{this.state.greeting}</p>
                <button onClick={ () => this.setState( {caption: "bye"} ) }>Click me</button>
                <button onClick={ () => this.setState( {title: "Main bye"} ) }>Click me</button>
            </div>
        )
    }
}
 
export default buttonWithClass;