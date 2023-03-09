//variables
var counter=0;
var comCounter=0;
//Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener("click",add);
todoList.addEventListener("click",check_delete);
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        add();
    }
});

//Functions

//Complete and Delete Functionality
function check_delete(e)
{
    //Delete button
    if(e.target.classList[0] === "trash-btn")
    {
        e.target.parentElement.remove();
        //Decreasing total task counter
        counter=counter-1;
        document.getElementById("r-count").innerText=counter;

        
    }
    //Complete button
    if(e.target.classList[0] === "complete-btn")
    {
        e.target.parentElement.classList.toggle('completed');
    }
}
//Add Functionality
function add(e)
{
    if(todoInput.value=='')
    {
        alert("Task Cannot be empty");
        return;
    }
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-items");
    todoLi.innerText=todoInput.value;
    todoDiv.appendChild(todoLi);

    const completedButton = document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check success-btn"></i>';
    completedButton.classList.add("complete-btn");

    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash trash-btn"></i>';
    trashButton.classList.add("trash-btn");

    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value="";
    //Increasing total task counter
    counter=counter+1;
    document.getElementById("r-count").innerText=counter;

}