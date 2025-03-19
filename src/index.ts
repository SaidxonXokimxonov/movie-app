import { state } from './constants.js';

const table = document.createElement('table');
function createThead() {
  table.classList.add('border', 'border-gray-400', 'text-left', 'w-[50%]');
  const thead = document.createElement('thead');
  const titleRow = document.createElement('tr');
  const titles = ['Title', 'Genre', 'Stock', 'Rate'];

  titles.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.classList.add('p-[10px]', 'text-left');
    titleRow.appendChild(th);
  });

  thead.appendChild(titleRow);
  table.appendChild(thead);
}

function renderFunction() {
  pagenation();
  createThead();
  createTbody();
  document.body.appendChild(table);
}

function createTbody() {
  const tbody = document.createElement('tbody');

  state.movies.forEach(movie => {
    const row = document.createElement('tr');
    row.classList.add('border-t', 'border-gray-300');

    const keys = Object.keys(movie);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== "id") {
        const td = document.createElement('td');
        td.textContent = movie[keys[i] as keyof typeof movie].toString();
        td.classList.add('p-[10px]');
        row.appendChild(td);
      }
    }

    const heartAction = document.createElement('td');
    const heartBtn = document.createElement('button');
    heartBtn.classList.add('active:scale-110');
    const heartImg = document.createElement('img');
    heartImg.src = '../images/bg-white-heart.png';
    heartBtn.appendChild(heartImg);
    heartAction.appendChild(heartBtn);
    let helper = true;
    heartBtn.addEventListener('click', function () {
      if (helper) {
        heartImg.src = '../images/bg-black-heart.png';
      } else {
        heartImg.src = '../images/bg-white-heart.png';
      }
      helper = !helper;
    });
    row.appendChild(heartAction);

    const btnAction = document.createElement('td');
    btnAction.classList.add('p-[10px]', 'text-center');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('py-[6px]', 'px-3', 'text-white', 'bg-red-400', 'rounded-[4px]', 'active:scale-95');
    deleteBtn.textContent = 'Delete';

    btnAction.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function () {
      row.remove();
    });
    row.appendChild(btnAction);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);
}

// Tugallanmagan
function pagenation(){
  let btns = [];
  const div = document.createElement("div");
  div.classList.add("flex", "border", "border-blue-400", "rounded-[2px]");
  for(let i = 1; i <= 3; i++){
    const btn = document.createElement("button");
    btn.classList.add("w-6", "grid", "place-items-center", "focus:bg-blue-400", "focus:text-white");
    if(i === 2){
      btn.classList.add("border-l", "border-r", "border-blue-400");
    }
    btn.textContent = `${i}`;
    div.appendChild(btn);
    btns.push(btn);
  }
  document.querySelector("body")?.appendChild(div);
}

renderFunction();
