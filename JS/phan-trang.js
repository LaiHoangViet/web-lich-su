    const c = document.querySelector('.phan-trang')
    const indexs = Array.from(document.querySelectorAll('.index'))
    let cur = -1
    indexs.forEach((index, i) => {
      index.addEventListener('click', (e) => {
    // clear
    c.className = 'phan-trang'
    void c.offsetWidth; // Reflow
    c.classList.add('open')
    c.classList.add(`i${i + 1}`)
    if (cur > i) {
      c.classList.add('flip')
    }
    cur = i
  })
    })