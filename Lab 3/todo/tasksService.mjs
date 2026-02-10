export class TasksService {
  constructor(tasks = []) {
    /**
     *
     * @type {{
     *   title: string,
     *   description: string
     *   prioritized: boolean
     *   completed: boolean
     *   timeAdded: string
     * }[]}
     */
    this.tasks = tasks;
  }

  taskCmp = (a, b) =>
    a.completed - b.completed ||
    b.prioritized - a.prioritized ||
    new Date(a.timeAdded).getTime() - new Date(b.timeAdded).getTime();


  addTask(task) {
    this.tasks.push(task);
  }

  popTask(index) {
    this.tasks.splice(index, 1);
  }

  removeTask(task) {
    this.popTask(this.tasks.indexOf(task));
  }

  sort() {
    this.tasks.sort(this.taskCmp);
  }
}