import { TasksService } from "./tasksService.mjs";
import { TasksRenderer } from "./tasksRenderer.mjs";

document.addEventListener('DOMContentLoaded', main);
window.APP_VERSION = '1.0.0';

/**
 * @type {HTMLElement}
 */
let tasksEl,
  tasksForm,
  taskTitleInputEl,
  taskDescriptionInputEl;

function main() {
  tasksEl = document.querySelector('.tasks-container');
  tasksForm = document.querySelector('.tasks-form');
  taskTitleInputEl = tasksForm.querySelector('.task-title-input');
  taskDescriptionInputEl = tasksForm.querySelector('.task-title-input');

  tasksForm.addEventListener("submit", handleFormSubmit);

  const tasksService = new TasksService({
    loadFromLocalStorage: true
  });
  const tasksRenderer = new TasksRenderer(tasksEl);

  // mocking
  const MOCK_TASKS = [
    {
      title: "Project Kickoff",
      description: "Define project scope and initial architecture for the Task Dashboard.",
      timeAdded: "2026-02-10T08:00:00.000Z", // 8:00 AM
      completed: true,
      prioritized: true
    },
    {
      title: "Setup ES Modules",
      description: "Resolve 'Uncaught SyntaxError' by configuring type: module in package.json.",
      timeAdded: "2026-02-10T08:45:00.000Z", // 8:45 AM
      completed: true,
      prioritized: false
    },
    {
      title: "Implement Mock Service",
      description: "Create a tasksService with addTask and getAllTasks functionality.",
      timeAdded: "2026-02-10T09:15:00.000Z", // 9:15 AM
      completed: false,
      prioritized: true
    },
    {
      title: "UI Design Polish",
      description: "Adjust CSS Grid layouts and ensure responsive behavior on mobile devices that Kanich would love.",
      timeAdded: "2026-02-10T09:30:00.000Z", // 9:30 AM
      completed: false,
      prioritized: false
    },
    {
      title: "Data Persistence",
      description: "Integrate LocalStorage to ensure tasks persist across browser refreshes.",
      timeAdded: "2026-02-10T09:45:00.000Z", // 9:45 AM (Just now)
      completed: false,
      prioritized: false
    }
  ];
  // for (const task of MOCK_TASKS) {
  //   tasksService.addTask(task);
  // }
  tasksRenderer.renderTasks(tasksService);

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(tasksForm);
    let taskTitle = formData.get('task-title');
    let taskDescription = formData.get('task-description');
    if (!taskTitle) return;

    tasksService.addTask({
      title: taskTitle,
      description: taskDescription,
      timeAdded: new Date().toISOString(),
      completed: false,
      prioritized: false
    });

    tasksRenderer.renderTasks(tasksService);
  }

  document.querySelector('header a').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  });
}
