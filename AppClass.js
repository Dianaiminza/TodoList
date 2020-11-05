import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default class AppClass extends Component {
  constructor(prtate) => ({
      allTasks: [prevState.newTask, ...prevState.allTasks],
      newTask: {}
    }));
  }

  handleDelete(taskIdToRemove){
    this.setState((prevState) => ({
      ...prevState,
      allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove)
    }));
  }

  render() {
    return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TasksList
          allTasks={this.state.allTasks}
          handleDelete={this.handleDelete}
        />
      </main>
    );
  }
}
