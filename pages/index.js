import React, { Component } from 'react'
import { Button } from "reactstrap";
import BaseLayout from '../src/components/layouts/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {
  constructor(props) {
    super(props)
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


  render() {
    return (
      <div>
        <BaseLayout>
          <Button color="danger">Danger!</Button>
        </BaseLayout>
      </div >
    )
  }
}
export default Index;