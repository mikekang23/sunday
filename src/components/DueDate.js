import React from 'react';
import { connect } from 'react-redux';
import { dueDateChange } from "../redux/actions"

import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class DueDate extends React.Component {
  constructor(props){
    super(props);
    console.log(props.tasks[props.taskId].duedate);
    // this.state = {
    //   startDate: new Date()
    // }
  }

  handleChange = date => {
    this.props.dueDateChange(this.props.taskId, date)
    // 
    // this.setState({
    //  startDate: date
    // });
  };

  componentDidUpdate(){
    console.log('Component Updated: ', this.props.tasks[this.props.taskId].duedate);
  }

  render() {
    return (
     <DatePicker
      className="form-control"
      selected={this.props.tasks[this.props.taskId].duedate}
      onChange={this.handleChange}
     />
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {dueDateChange})(DueDate);
