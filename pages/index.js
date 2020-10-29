import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends Component {
  constructor() {
    super()
    console.log("construct")
    this.state = {
      title: "title state"
    }
    // this.updateTitle = this.updateTitle.bind(this)
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  updateTitle() {
    this.setState({
      title: "updated title state"
    })
  }

  render() {
    console.log("render")
    console.log("this.updateTitle", this.updateTitle)
    const title = this.state.title;
    return (
      <div>
        <BaseLayout>
          <h1>Welcome Page! from class component</h1>
          <h3>{title}</h3>
          <button onClick={this.updateTitle}>Update Title</button>
        </BaseLayout>
      </div >
    )
  }
}
export default Index;