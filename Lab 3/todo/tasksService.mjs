export class TasksService {
  constructor({ tasks = [], loadFromLocalStorage = false }) {
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
    this.tasks = null;

    if (loadFromLocalStorage) {
      const version = localStorage.getItem('version');
      if (version !== window.APP_VERSION) {
        this.resetLocalStorage();
        localStorage.setItem('version', window.APP_VERSION);
        // we should not update version here but for simplicity we will
        // Better practice is to create a centrelized localStorageService
        // which will synchronize all other existing frontend services
        // with current version. I am lazy so I will leave it as it is
      }

      const data = localStorage.getItem('tasks');
      try {
        this.tasks = JSON.parse(data);
      } catch (e) {
        this.resetLocalStorage();
      }
    } else {
      this.tasks = tasks;
    }
  }

  resetLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify([]));
  }
  saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  taskCmp = (a, b) =>
    a.completed - b.completed ||
    b.prioritized - a.prioritized ||
    new Date(a.timeAdded).getTime() - new Date(b.timeAdded).getTime();


  addTask(task) {
    this.tasks.push(task);
    this.saveToLocalStorage();
  }

  popTask(index) {
    this.tasks.splice(index, 1);
    this.saveToLocalStorage();
  }

  removeTask(task) {
    this.popTask(this.tasks.indexOf(task));
    this.saveToLocalStorage();
  }

  sort() {
    this.tasks.sort(this.taskCmp);
    this.saveToLocalStorage();
  }
}