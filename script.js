function insert() {
  let input = document.querySelector(`input`),
    moon = document.querySelector(`.moon`),
    list = document.querySelector(`.list .container`);
  console.log(moon.getAttribute(`style`));
  // insert new todo item
  document.body.addEventListener(`keypress`, (event) => {
    if (event.key === `Enter`) {
      if (input.value !== ``) {
        let todoDiv = document.createElement(`div`),
          checkIcon = document.createElement(`img`),
          todoContent = document.createTextNode(input.value),
          counter = document.querySelectorAll(`.counter span`),
          counterValue = Number(
            document.querySelector(`.counter span`).innerHTML
          );
        todoP = document.createElement(`p`);
        todoP.appendChild(todoContent);
        todoDiv.append(todoP);
        todoDiv.classList.add(`todo-div`);
        list.insertBefore(todoDiv, list.firstChild);
        // create circle
        let circle = document.createElement(`span`);
        circle.classList.add(`circle`);
        todoDiv.appendChild(circle);
        input.value = ``;
        // cross icon
        let cross = document.createElement(`img`);
        cross.setAttribute(`src`, `./images/icon-cross.svg`);
        todoDiv.appendChild(cross);
        cross.classList.add(`cross`);
        cross.style.display = `none`;
        // counter up
        counterValue++;
        counter.forEach(element => {
        element.innerHTML = counterValue;
        });
        // check icon
        checkIcon.setAttribute(`src`, `./images/icon-check.svg`);
        todoDiv.appendChild(checkIcon);
        checkIcon.classList.add(`check`);
        checkIcon.style.display = `none`;
        if (moon.getAttribute(`style`) === `display: block;`) {
          todoDiv.style.backgroundColor = `hsl(236, 33%, 92%)`;
          todoDiv.style.color = `hsl(235, 19%, 35%)`;
          todoDiv.style.borderBottomColor = `hsl(236, 9%, 61%)`
        } else {
          todoDiv.style.backgroundColor = ``;
          todoDiv.style.color = ``;
          todoDiv.style.borderBottomColor = ``
        }
      }
    }
    // display cross on hover
    let todoDiv = document.querySelector(`.todo-div`);
    let cross = document.querySelector(`.cross`);
    if (todoDiv !== null) {
      todoDiv.addEventListener(`mouseenter`, () => {
        cross.style.display = `block`;
      });
      // remove item
      cross.addEventListener(`click`, () => {
        let counter = document.querySelectorAll(`.counter span`);
        todoDiv.remove();
        // counter down
        let counterValue = document.querySelectorAll(
          `.todo-div:not(.completed)`
        ).length;
        counter.forEach(element => {
        element.innerHTML = counterValue;
        });
      });
      // hidden cross
      todoDiv.addEventListener(`mouseleave`, () => {
        cross.style.display = `none`;
      });
    }
    // active cricle
    let circle = document.querySelector(`.todo-div .circle`),
      check = document.querySelector(`.todo-div .check`),
      text = document.querySelector(`.todo-div p`),
      todo = document.querySelectorAll(`.todo`);
    if (circle !== null) {
      circle.addEventListener(`click`, () => {
        let counter = document.querySelector(`.counter span`);
        check.style.display = `block`;
        circle.style.backgroundImage = `linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))`;
        text.style.textDecoration = `line-through`;
        text.style.color = `hsl(236, 16%, 32%)`;
        todoDiv.classList.add(`completed`);
        // counter down
        let counterValue = document.querySelectorAll(
          `.todo-div:not(.completed)`
        ).length;
        counter.innerHTML = counterValue;
      });
    }
    if (circle !== null) {
      check.addEventListener(`click`, () => {
        check.style.display = `none`;
        circle.style.backgroundImage = ``;
        text.style.textDecoration = ``;
        text.style.color = ``;
        todoDiv.classList.remove(`completed`);
      });
    }
  });
}
insert();
// clear completed item
let clearCompleted = document.querySelectorAll(`.clear`);
clearCompleted.forEach(clearButton => {
  clearButton.addEventListener(`click`, () => {
    let completedDiv = document.querySelectorAll(`.todo-div.completed`);
    completedDiv.forEach((element) => {
      element.remove();
    });
  });
});


function filter() {
  let all = document.querySelectorAll(`.all`),
    active = document.querySelectorAll(`.active`),
    completed = document.querySelectorAll(`.completed`);
  // active filter
  active.forEach(element => {
    element.addEventListener(`click`, () => {
      let completedDiv = document.querySelectorAll(`.todo-div.completed`),
        notCompleted = document.querySelectorAll(`div.todo-div:not(.completed)`);
      completedDiv.forEach((element) => {
        element.style.display = `none`;
      });
      notCompleted.forEach((element) => {
        element.style.display = `flex`;
      });
      active.classList.add(`blue`);
      all.classList.remove(`blue`);
      completed.classList.remove(`blue`);
    });
  });

  // completed filter
  completed.forEach(element => {
    element.addEventListener(`click`, () => {
      let notCompleted = document.querySelectorAll(
          `div.todo-div:not(.completed)`
        ),
        completedDiv = document.querySelectorAll(`.todo-div.completed`);
      notCompleted.forEach((element) => {
        element.style.display = `none`;
      });
      completedDiv.forEach((element) => {
        element.style.display = `flex`;
      });
      active.classList.remove(`blue`);
      all.classList.remove(`blue`);
      completed.classList.add(`blue`);
    });
  });
  
  // all filter
  all.forEach(element => {
    element.addEventListener(`click`, () => {
      let completedDiv = document.querySelectorAll(`.todo-div.completed`),
        notCompleted = document.querySelectorAll(`div.todo-div:not(.completed)`);
      completedDiv.forEach((element) => {
        element.style.display = `flex`;
      });
      notCompleted.forEach((element) => {
        element.style.display = `flex`;
      });
      active.classList.remove(`blue`);
      all.classList.add(`blue`);
      completed.classList.remove(`blue`);
    });
  });

}
filter();

function theme() {
  let moon = document.querySelector(`.moon`),
    sun = document.querySelector(`.sun`),
    header = document.querySelector(`header`),
    input = document.querySelector(`input`),
    circle = document.querySelector(`.circle`),
    main = document.querySelector(`.main`),
    all = document.querySelector(`.all`),
    active = document.querySelector(`.active`),
    completed = document.querySelector(`.completed`),
    clear = document.querySelector(`.clear`),
    mainArray = [all, active, completed,clear];
  // Light Theme
  sun.addEventListener(`click`, (element) => {
    let todoDiv = document.querySelectorAll(`.todo-div`);
    moon.style.display = `block`;
    sun.style.display = `none`;
    header.style.backgroundImage = `url(./images/bg-desktop-light.jpg)`;
    document.body.style.backgroundColor = `hsl(0, 0%, 98%)`;
    input.style.backgroundColor = `hsl(236, 33%, 92%)`;
    input.style.color = `hsl(235, 19%, 35%)`;
    circle.style.backgroundColor = `hsl(236, 33%, 92%)`;
    main.style.backgroundColor = `hsl(236, 33%, 92%)`;
    main.style.color = `hsl(236, 9%, 61%)`;
    mainArray.forEach(element => {
      element.classList.replace(`hover-dark`, `hover-light`);
    });
    todoDiv.forEach((element) => {
      element.style.backgroundColor = `hsl(236, 33%, 92%)`;
      element.style.color = `hsl(235, 19%, 35%)`;
      element.style.borderBottomColor = `hsl(236, 9%, 61%)`
    });
  });
  // Dark Theme
  moon.addEventListener(`click`, () => {
    let todoDiv = document.querySelectorAll(`.todo-div`);
    moon.style.display = `none`;
    sun.style.display = `block`;
    header.style.backgroundImage = ``;
    document.body.style.backgroundColor = ``;
    input.style.backgroundColor = ``;
    input.style.color = ``;
    circle.style.backgroundColor = ``;
    main.style.backgroundColor = ``;
    main.style.color = ``;
    mainArray.forEach(element => {
      element.classList.replace(`hover-light`, `hover-dark`);
    });
    todoDiv.forEach((element) => {
      element.style.backgroundColor = ``;
      element.style.color = ``;
      element.style.borderBottomColor = ``
    });
  });
}

theme();
