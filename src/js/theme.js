export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch__control'),
  input: document.querySelector('#theme-switch-toggle'),
};

onContentLoad();
refs.switch.addEventListener('change', onSwitchChange);

function onContentLoad() {
  refs.body.classList.value = localStorage.getItem('theme');
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.input.setAttribute('checked', 'true');
  }
  if (refs.body.classList.contains(' ')) {
    refs.body.classList.toggle(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function onSwitchChange() {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  localStorage.setItem('theme', refs.body.classList.value);
}
