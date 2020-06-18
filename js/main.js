'use strict';
{

  function colorSelect(box) {
    const targetBox = document.querySelector(`${box}`);
    const arr = [];
    for (let i = 0; i < 6; i++ ){
      let n = Math.floor(Math.random() * 14) + 1;
      if (n > 8) {
        const al = ['a', 'b', 'c', 'd', 'e', 'f'];
        let num = n - 9;
        // console.log(num);
        n = al[`${num}`]
      }
      arr.push(n);
    }
    // console.log(arr);
    let str = arr.join('');
    let color = `#${str}`
    targetBox.style.backgroundColor = color;
    targetBox.style.border = color;
    targetBox.textContent = color;

    // console.log(str);
    // let box1 = document.querySelector('.box01');
    // console.log(box1);

    // box1.style.backgroundColor = `#${str}`;
    // box1.textContent = `#${str}`
  }

  const button = document.querySelector('.button');
  const bg = document.querySelector('.bg');
  button.addEventListener('click', () => {
    for (let i = 1; i <= 6; i++) {
      colorSelect(`.box${i}`);
    };
    colorSelect('.button');
    colorSelect('.bg');
  });

}
