import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import { addTask } from "./redux/actions";
import { getTasks } from './redux/selectors';

// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data.msg)
        this.setState({
          msg: data.msg
        })
      })
  }

  handleAddTask = () => {
    this.props.addTask()
    console.log(this.props)
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        {this.state.msg}
        asdf
        <div className="container py-4">
          <div className="row py-3">
            <button
              type="button" className="btn btn-outline-primary"
              onClick={this.handleAddTask}
            >
              New Task
            </button>
          </div>
          <div className="row py-2">
            <div className="col-sm-6 py-2">
              Description
            </div>
            <div className="col-sm-2 py-2">
              Owner
            </div>
            <div className="col-sm-2 py-2">
              Status
            </div>
            <div className="col-sm-2 py-2">
              Due Date
            </div>
          </div>
          <TaskList />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const tasks = getTasks(state);
  return {tasks}
}

export default connect(mapStateToProps, {addTask})(App);
