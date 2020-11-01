import Axios from 'axios';
import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class Index extends Component {
  static async getInitialProps() {
    let userData = {}
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
    } catch (error) {
      console.error(error)
    }

    return {
      getdata: "this from data get initial props",
      userData
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

  updateTitle = () => {
    this.setState({
      title: "updated title state"
    })
  }

  render() {
    const { userData } = this.props;
    const title = this.state.title;
    const dataprops = this.state.dataprops;
    return (
      <div>
        <BaseLayout>
          <h1>Welcome Page! from class component</h1>
          <h3>{title}</h3>
          <h3>{userData.title}</h3>
          <h2>{dataprops}</h2>
          <button onClick={this.updateTitle}>Update Title</button>
        </BaseLayout>
      </div >
    )
  }
}
export default Index;