function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class TasksRenderer {
  constructor(rootEl) {
    this.rootEl = rootEl;
  }

  disableButtons(taskEl) {
    taskEl.querySelectorAll('button').forEach(btn => btn.disabled = true);
  }

  renderTasks(tasksService) {
    // if (lastTasksSnapshot === tasks) return;
    const rootEl = this.rootEl;

    rootEl.innerHTML = '';
    tasksService.sort();
    console.log(tasksService.tasks);

    if (!tasksService.tasks.length) {
      rootEl.innerHTML = `<p class="no-tasks">No tasks yet</p>`;
      return;
    }

    tasksService.tasks.forEach(task => {
      const taskTimeAddedText = new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'short'
      }).format(new Date(task.timeAdded));

      const newLiHtml = `
     <li class="task ${task.completed ? "completed" : ""} ${task.prioritized ? "prioritized" : ""}">
       <div class="tasks-control">
         <button class="tasks-prioritize-btn"><img alt="prioritize" src="data:image/png;base64,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"></button>
         <button class="tasks-complete-btn">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19.5479 7.26653L20.1812 6.49258L19.4072 5.85934L17.8593 4.59286L17.0853 3.95963L16.4521 4.73358L8.66618 14.2497L6.2 12.4001L5.4 11.8001L4.8 12.6001L3.6 14.2001L3 15.0001L3.8 15.6001L8.56691 19.1752L9.33382 19.7504L9.94087 19.0085L19.5479 7.26653Z" stroke="#222222" stroke-width="2"/></svg>
         </button>
       </div>
        <div class="task-content">
          <h2 class="task-title">${task.title}</h2>
          ${task.description ? `
            <pre class="task-description">${task.description}</pre>` :
        ``
      }
          <p class="added-time">${taskTimeAddedText}</p>
        </div>
       <button class="task-delete-btn">
         <svg width="32" height="32" viewBox="-2.5 0 61 61" xmlns="http://www.w3.org/2000/svg"><defs><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path fill-rule="evenodd" d="M36 26v10.997c0 1.659-1.337 3.003-3.009 3.003h-9.981c-1.662 0-3.009-1.342-3.009-3.003v-10.997h16zm-2 0v10.998c0 .554-.456 1.002-1.002 1.002h-9.995c-.554 0-1.002-.456-1.002-1.002v-10.998h12zm-9-5c0-.552.451-1 .991-1h4.018c.547 0 .991.444.991 1 0 .552-.451 1-.991 1h-4.018c-.547 0-.991-.444-.991-1zm0 6.997c0-.551.444-.997 1-.997.552 0 1 .453 1 .997v6.006c0 .551-.444.997-1 .997-.552 0-1-.453-1-.997v-6.006zm4 0c0-.551.444-.997 1-.997.552 0 1 .453 1 .997v6.006c0 .551-.444.997-1 .997-.552 0-1-.453-1-.997v-6.006zm-6-5.997h-4.008c-.536 0-.992.448-.992 1 0 .556.444 1 .992 1h18.016c.536 0 .992-.448.992-1 0-.556-.444-1-.992-1h-4.008v-1c0-1.653-1.343-3-3-3h-3.999c-1.652 0-3 1.343-3 3v1z" filter="url(#a)"/></svg>
       </button>
     </li>
    `;
      rootEl.insertAdjacentHTML('beforeend', newLiHtml);
      const taskEl = rootEl.lastElementChild;

      const deleteBtn = taskEl.querySelector('.task-delete-btn');
      const completeBtn = taskEl.querySelector('.tasks-complete-btn');
      const prioritizeBtn = taskEl.querySelector('.tasks-prioritize-btn');

      deleteBtn.addEventListener('click',  async () => {
        this.disableButtons(taskEl);
        taskEl.classList.add('deleting');
        const rootStyles = getComputedStyle(document.documentElement);
        const ms = (parseFloat(rootStyles.getPropertyValue('--deleting-transition-duration')) || 0) * 1000;
        await wait(ms);

        tasksService.removeTask(task);
        taskEl.remove();
        this.renderTasks(tasksService);
      });

      completeBtn.addEventListener('click',  async () => {
        this.disableButtons(taskEl);
        if (!task.completed) {
          taskEl.classList.add('completing');
        } else {
          taskEl.classList.add('de-completing');
        }
        const rootStyles = getComputedStyle(document.documentElement);
        const ms = (parseFloat(rootStyles.getPropertyValue('--completing-transition-duration')) || 0) * 1000;
        await wait(ms);
        console.log(ms)

        if (!task.completed) {
          task.completed = true;
        } else {
          task.completed = false;
        }
        taskEl.classList.remove('completing', 'de-completing');
        this.renderTasks(tasksService);
      });

      prioritizeBtn.addEventListener('click',  async () => {
        this.disableButtons(taskEl);
        if (!task.prioritized) {
          taskEl.classList.add('prioritizing');
        } else {
          taskEl.classList.add('de-prioritizing');
        }
        const rootStyles = getComputedStyle(document.documentElement);
        const ms = (parseFloat(rootStyles.getPropertyValue('--prioritizing-transition-duration')) || 0) * 1000;
        await wait(ms);

        if (!task.prioritized) {
          task.prioritized = true;
        } else {
          task.prioritized = false;
        }
        taskEl.classList.remove('prioritizing', 'de-prioritizing');
        this.renderTasks(tasksService);
      });
    })
  }
}
