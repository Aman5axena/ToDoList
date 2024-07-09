const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector("#back-btn");
const menuBtn = document.querySelector("#menu-icon");


const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBckdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    blackBckdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active"); 
}

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBckdrop.addEventListener("click", toggleAddTaskForm);

//categories and tasks

let categories = [
    {
      title: "Personal",
      img: "boy.png",
    },
    {
      title: "Work",
      img: "briefcase.png",
    },
    {
      title: "Shopping",
      img: "shopping.png",
    },
    {
      title: "Coding",
      img: "web-design.png",
    },
    {
      title: "Health",
      img: "healthcare.png",
    },
    {
      title: "Fitness",
      img: "dumbbell.png",
    },
    {
      title: "Education",
      img: "education.png",
    },
    {
      title: "Finance",
      img: "saving.png",
    },
];
  
let tasks = [
  {
    id: 1,
    task: "Go to market",
    category: "Shopping",
    completed: false,
  },
  {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    completed: false,
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    completed: false,
  },
  {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    completed: false,
  },
  {
    id: 6,
    task: "Do a 20-minute HIIT workout",
    category: "Fitness",
    completed: false,
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    completed: false,
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "Send follow-up emails",
    category: "Work",
    completed: false,
  },
  {
    id: 12,
    task: "Work on a coding side project",
    category: "Coding",
    completed: false,
  },
  {
    id: 13,
    task: "Try a new healthy recipe",
    category: "Health",
    completed: false,
  },
  {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
  },
  {
    id: 15,
    task: "Read an article about a new topic",
    category: "Education",
    completed: false,
  },
  {
    id: 16,
    task: "Set up automatic bill payments",
    category: "Finance",
    completed: false,
  },

  {
    id: 17,
    task: "Buy new clothes",
    category: "Shopping",
    completed: false,
  },
  {
    id: 18,
    task: "Meditate for 10 minutes",
    category: "Personal",
    completed: false,
  },
  {
    id: 19,
    task: "Prepare agenda for team meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 20,
    task: "Debug a software issue",
    category: "Coding",
    completed: false,
  },
  {
    id: 21,
    task: "Try a new recipe for lunch",
    category: "Health",
    completed: false,
  },
  {
    id: 22,
    task: "Go for a run",
    category: "Fitness",
    completed: false,
  },
  {
    id: 23,
    task: "Learn a new language online",
    category: "Education",
    completed: false,
  },
  {
    id: 24,
    task: "Read about history",
    category: "Education",
    completed: false,
  },
  {
    id: 25,
    task: "Review investment portfolio",
    category: "Finance",
    completed: false,
  },
];


let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".catogories");
const categoriesTitle = document.querySelector(".category-title");
const totalcategoriesTasks = document.querySelector(".category-tasks");
const categoriesImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totalTasks");

const calculateTotal = () => {
    const categoryTasks = tasks.filter(
      (task) => 
        task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    totalcategoriesTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
      // tasks
      const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === category.title.toLowerCase()
      );

      // create div
      const div = document.createElement("div");
      div.classList.add("category");
      div.addEventListener("click", () => {
        wrapper.classList.add("show-category");
          selectedCategory = category;  
        categoriesTitle.innerHTML = category.title;
        categoriesImg.src = `image/${category.img}`;
        calculateTotal();
        //rerender tasks when category change
        renderTasks();
      });
      div.innerHTML = `<div class="left">
                            <img src="image/${category.img}" 
                            alt="${category.title}">
                            <div class="content">
                            <h1>${category.title}</h1>
                            <p>${categoryTasks.length} Tasks</p>
                        </div>
                        </div>
                        <div class="options">
                            <div class="toggle-btn">
                                <i class='bx bx-dots-vertical-rounded' id="toggle-btn"></i>
                            </div>
                        </div>`;
        
      categoriesContainer.appendChild(div);
    }); 
};

const tasksContainer = document.querySelector(".tasks");

const renderTasks = () => {
    tasksContainer.innerHTML = "";
    const categoryTasks = tasks.filter(
      (task) => 
        task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    
    //no task scene
    if(categoryTasks.length === 0){
      tasksContainer.innerHTML = `
      <p class="no-task">No tasks for this category</p>
      `
    } else {
      //there are tasks
      categoryTasks.forEach((task) => {
        const div = document.createElement("div");
        div.classList.add("task-wrapper");
        const label = document.createElement("label");
        label.classList.add("task");
        label.setAttribute("for", task.id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = task.id;
          checkbox.checked = task.completed;

          //completion functionality of clickbox
          checkbox.addEventListener("change", () => {
            const index = tasks.findIndex((t) => t.id === task.id);
            //cahnge true or false
            tasks[index].completed = !tasks[index].completed;
            //save in local
            saveLocal();
          });

        div.innerHTML = `
          <div class="delete">
            <i class='bx bx-trash' id="delete"></i>
          </div>
        `;

        label.innerHTML = `
          <span class="checkmark">
            <i class='bx bx-check' id="checkmark"></i>
          </span>
          <p>${task.task}</p>
        `;

        label.prepend(checkbox);
        div.prepend(label);
          tasksContainer.appendChild(div);

          //delete tasks

          const deletBtn = div.querySelector(".delete");
          deletBtn.addEventListener("click", () => {
            const index = tasks.findIndex((t) => t.id === task.id);

            //remove task by click
            tasks.splice(index, 1);
            saveLocal();
            renderTasks();
          })
      });

      renderCategories();
      calculateTotal();
    }
};

//save and get from local storage
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
const getLocal = () => {
  const localTasks = JSON.parse(localStorage.getItem("tasks"));

  //if task found
  if(localTasks){
    tasks = localTasks;
  }
};

// add functinality to add new taks


// render all categories in select
const categorySelect = document.querySelector("#category-select");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");

const taskInput = document.querySelector("#task-input");

cancelBtn.addEventListener("click", toggleAddTaskForm);

addBtn.addEventListener("click", () => {
  const task = taskInput.value;
  const category = categorySelect.value;

  if(task === ""){
    alert("Please enter a task");
  } else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category,
      completed: false,
    };
    tasks.push(newTask);
    taskInput.value = "";
    saveLocal();
    toggleAddTaskForm();
    renderTasks();
  }
});

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelect.appendChild(option);
});

getLocal();
calculateTotal();
renderTasks();


// const goBtn = document.querySelector(".nex");
// const front = document.querySelector(".front");
// const background = document.querySelector(".screen-backdrop");

// goBtn.addEventListener('click', () => {
//   front.style.display = 'none';
//   front.style.transition = 'none';
// });

const frontElement = document.querySelector('.front');
const goButton = document.querySelector('.nex');

goButton.addEventListener('click', () => {
  frontElement.classList.add('fade-out');
  frontElement.addEventListener('transitionend', () => {
    frontElement.style.display = 'none';
  });
});