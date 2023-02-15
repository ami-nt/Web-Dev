let input = document.getElementById("new-task");
// console.log(input.value);
let addBut = document.getElementsByTagName("button")[0];
let tasks = document.getElementById("tasks");

addBut.addEventListener("keyup", () => {
    if(input.value.trim() != 0 ){
        addBut.classList.add(" active");
    } else{
        addBut.classList.remove(" active");
    }
})

addBut.addEventListener("click", () => {
    // console.log(input.value);
    if(input.value.trim() != 0){
        let newTask = `
        <div class="item">
            <input type="checkbox" class="check">
            <p> ${input.value} </p>
            <div class="trash">
                <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>
        `
        tasks.innerHTML += newTask;
        input.value = "";
    } else{
        alert("!!!");
    }
})

// console.log(tasks);
tasks.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-trash-can")){
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener("click", (e) => {
    if(e.target.classList.contains("check")){
        if(e.target.parentElement.classList.contains("completed")){
            e.target.parentElement.classList.remove("completed");
        } else {
            e.target.parentElement.classList.add("completed");
        }
    }
})

