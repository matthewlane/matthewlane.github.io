function createBox() {
  let box = document.createElement('div');
  box.className = 'box';
  box.classList.add('added');
  box.addEventListener('click', function() {
    this.classList.contains('clicked') ?
    this.classList.remove('clicked') :
    this.classList.add('clicked');
  });
  return box;
}

for (let i = 1; i <= 175; i++) {
  const box = document.getElementById('app').appendChild(createBox());
  if (i % Math.floor(Math.random() * 100) === 0) {
    box.classList.add('clicked');
  }
  setTimeout(() => box.classList.remove('added'), i);
}
