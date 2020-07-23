import * as React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch('/api/home').then(()=>{})
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App