import React from 'react';
import { connect } from 'react-redux';
import { descriptionChange, ownerChange, statusChange, dueDateChange } from "../redux/actions"
import '../css/TaskList.css';

class TaskList extends React.Component {
  constructor(props){
    super(props);
  }

  handleDescriptionChange = (id, value) => {
    console.log(id, 'handleDescriptionChange', value)
    this.props.descriptionChange(id, value)
  }

  handleOwnerChange = (id, value) => {
    console.log(id, 'handleOwnerChange', value)

    this.props.ownerChange(id, value)
  }

  handleStatusChange = (id, value) => {
    console.log(id, 'handleStatusChange', value)
    this.props.statusChange(id, value)
  }

  handleDueDateChange = (id, value) => {
    console.log(id, 'handleDueDateChange', value)
    this.props.dueDateChange(id, value)
  }

  render(){
    return (
      Object.keys(this.props.tasks).map(id => {
        return (
          <div key={id} className="row my-1 taskRow">
            <div className="col-sm-6 py-1">
              <input
                className="form-control"
                type="text"
                autoFocus
                value={this.props.tasks[id].description}
                placeholder="What do you want to get done?"
                onChange={(e) => this.handleDescriptionChange(id, e.target.value)}
              />
            </div>
            <div className="col-sm-2 py-1 ownerField">
              {this.props.tasks[id].owner ? <img className="avatar" src={process.env.PUBLIC_URL + '/img/' + this.props.tasks[id].owner + '.png'}/> :  <img className="avatar-default" src={process.env.PUBLIC_URL + '/img/default.png'}/>}
              <select
                className="form-control"
                value={this.props.tasks[id].owner}
                onChange={(e) => this.handleOwnerChange(id, e.target.value)}
              >
                <option disabled selected>Choose</option>
                {this.props.owners.map((person) => {
                  return <option value={person.name} key={person.id}>{person.name}</option>
                })}
              </select>
            </div>
            <div className="col-sm-2 py-1 statusField">
              <select
                className="form-control"
                value={this.props.tasks[id].status}
                onChange={(e) => this.handleStatusChange(id, e.target.value)}
                style={
                  this.props.tasks[id].status === 'On Target'
                  ?
                  {color: 'white', backgroundColor: 'Orange'}
                  :
                  this.props.tasks[id].status === 'Not On Target'
                  ?
                  {color: 'white', backgroundColor: 'Violet'}
                  :
                  this.props.tasks[id].status === 'Stuck'
                  ?
                  {color: 'white', backgroundColor: 'Tomato'}
                  :
                  this.props.tasks[id].status === 'Done!'
                  ?
                  {color: 'white', backgroundColor: 'MediumSeaGreen'}
                  :
                  {color: 'white', backgroundColor: '#36454F'}
                  }
                >
                <option disabled selected>Not Started Yet</option>
                {this.props.status.map((status) => {
                  return <option value={status.title} key={status.id}>{status.title}</option>
                })}
              </select>
            </div>

            <div className="col-sm-2 py-1">
              <input
                className="form-control"
                type="text"
                value={this.props.tasks[id].duedate}
                onChange={(e) => this.handleDueDateChange(id, e.target.value)}
              />
            </div>
          </div>
        )
      })
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {descriptionChange, ownerChange, statusChange, dueDateChange})(TaskList);
