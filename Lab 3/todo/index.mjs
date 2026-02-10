import { TasksService } from "./tasksService.mjs";
import { TasksRenderer } from "./tasksRenderer.mjs";

document.addEventListener('DOMContentLoaded', main);

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

  const tasksService = new TasksService();
  const tasksRenderer = new TasksRenderer(tasksEl);

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
}
