
const SideBar = {
  bar: document.querySelector('#sidebar'),
  menu: document.querySelector('#menu'),
  closeIcon: document.querySelector('#close'),

  open: function() {
    SideBar.bar.style.width = '250px';
  },

  close: function() {
    SideBar.bar.style.width = '0';
  }, 

  init: function() {
    this.menu.addEventListener('click', this.open);
    this.closeIcon.addEventListener('click', this.close);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  SideBar.init();
})

