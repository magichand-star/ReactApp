import React from "react"
import { render } from "react-dom"

//import App1Container from "./containers/App1Container"

class App extends React.Component {
  render() {
    return (
      <h1>React and Django Application</h1>
    )
  }
}

render(<App/>, document.getElementById('App'))