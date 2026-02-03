const nameInput = document.querySelector('form input[name="name"]');
const ageInput = document.querySelector('form input[name="age"]');
const btn = document.querySelector('form button[type="submit"]');
const formEl = document.querySelector('form');


function deleteMessageEls() {
  document.querySelectorAll('.message').forEach(el => el.remove());
}
function appearElement(el) {
  setTimeout(() => {
    el.classList.remove('disappeared');
    el.classList.add('appeared');
  });
}
function somefun(el) {
  setTimeout(() => {
    el.classList.add('fun');
  })
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let username, age;
  try {
    username = nameInput.value;
    age = +ageInput.value;
  } catch (e) {
    return;
  }
  if (!username || !age) return;

  const welcomingHtml = `
    <p class="message welcoming disappeared">
      Welcome to the class, <span class="username">${username}</span>!
    </p>
  `;
  const badHtml = `
    <p class="message bad disappeared">
      Sorry <span class="username">${username}</span>, but you are too young for this :(
    </p>
  `;

  deleteMessageEls();

  formEl.classList.add('moved-up');
  if (age >= 18) {
    formEl.insertAdjacentHTML('afterend', welcomingHtml);
    appearElement(document.querySelector('.message'));
    setTimeout(() => {
      somefun(document.querySelector('.message'))
    }, 1000)
    } else {
    formEl.insertAdjacentHTML('afterend', badHtml);
    appearElement(document.querySelector('.message'));
  }
})
