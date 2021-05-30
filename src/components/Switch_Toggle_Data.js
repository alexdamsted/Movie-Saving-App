import React, { Component } from "react";
import { Input, Form, FormGroup, Label } from "reactstrap";

class Switch_Toggle_Data extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form>
        <FormGroup check>
          <Label check>
            <Input onClick={this.props.toggle} type="checkbox" />
            {this.props.labelText}
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

export default Switch_Toggle_Data;
