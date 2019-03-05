import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
      
    )
  }

  render() {
    return (
      <form className="ui form">
        <Field 
          label="Enter Title"
          name="title"
          component={this.renderInput}
        />
        <Field 
          label="Enter Description"
          name="description"
          component={this.renderInput}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);