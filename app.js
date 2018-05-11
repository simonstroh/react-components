class List extends React.Component {
  render() {
    var myStyle = {textDecoration: 'none'}
    return (
      <h1 style={myStyle}>Your Grocery List Items Here</h1>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>
      Grocery List
      </h1>
    )
  }
}

class ReactInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    var text = document.getElementById('input-field').value
    this.props.onInputChange(text)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="input-field"
          type="text" />
        <input type="submit" value="" />
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(text) {
    var listItem = document.createElement('h1')
    listItem.style.textDecoration = 'none'
    listItem.style.cursor = 'pointer'
    listItem.onclick = function() {
      if (this.style.textDecoration === 'none') {
        this.style.textDecoration = 'line-through'
      } else {
        this.style.textDecoration = 'none'
      }
    }
    listItem.innerHTML = text
    document.getElementById('results').appendChild(listItem)
  }

  render() {
    return (
      <div>
        <Header />
        <img
          src="https://stephensontam.files.wordpress.com/2016/09/happy-face-clip-art-smiley-face-clipart-3-clipartcow.jpg?w=940"
          width="100px"
          height="100px" />
        <ReactInput onInputChange={this.handleInputChange} />
        <List />
        <div id="results"></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
// ReactDOM.render(<List />, document.getElementById('list'))
