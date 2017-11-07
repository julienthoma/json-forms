import React, { Component } from "react";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import { updateField } from "../actions";

import { connect } from "react-redux";

const typeFieldMap = {
  string: Input,
  bool: Checkbox
};

class FieldSet extends Component {
  updateField = key => value => this.props.dispatch(updateField(key, value));

  render() {
    const { data } = this.props;

    return (
      <div>
        {Object.keys(data).map(key => {
          const obj = data[key];
          const Component = typeFieldMap[obj.type];
          return (
            <div key={obj.key}>
              <div>{obj.label}</div>
              <Component
                value={obj.value}
                updateField={this.updateField(obj.key)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  data: app.data
});

export default connect(mapStateToProps)(FieldSet);
