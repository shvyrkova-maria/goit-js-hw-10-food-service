export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'), //use
  switch: document.querySelector('.theme-switch__control'), //use
  input: document.querySelector('#theme-switch-toggle'), //use
};

refs.body.classList.toggle(Theme.LIGHT);
onContentLoad();
refs.switch.addEventListener('change', onSwitchChange);

function onContentLoad() {
  refs.body.classList.value = localStorage.getItem('theme');
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.input.setAttribute('checked', 'true');
  }
}

function onSwitchChange() {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  localStorage.setItem('theme', refs.body.classList.value);
}
