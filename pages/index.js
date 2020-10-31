import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends Component {
  static getInitialProps() {
    console.log("running getInitialProps")
    return {
      getdata: "this from data get initial props"
    }
  }
  constructor(props) {
    super(props)
    console.log("construct")
    this.state = {
      title: "title state",
      dataprops: this.props.getdata
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
    const dataprops = this.state.dataprops;
    return (
      <div>
        <BaseLayout>
          <h1>Welcome Page! from class component</h1>
          <h3>{title}</h3>
          <h2>{dataprops}</h2>
          <button onClick={this.updateTitle}>Update Title</button>
        </BaseLayout>
      </div >
    )
  }
}
export default Index;