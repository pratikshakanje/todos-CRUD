const cl = console.log;

const BASE_URL = "https://jsonplaceholder.typicode.com"

const TODOS_URL = `${BASE_URL}/todos`

let xhr = new XMLHttpRequest()

xhr.open("GET", TODOS_URL)

function todoStatus(flag){
    if(flag){
        return "text-success"
    }else{
        return "text-danger"
    }
}

xhr.onload = function () {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.response)
    //    cl(data);

        let result = ``

        data.forEach(todos => {
            result += ` <div class="col-md-4 mt-4" id="${todos.id}">
                <div class="card h-100">
                    <div class="card-body">
                        <h4>${todos.title}</h4>
                        <p class="${todoStatus(todos.completed)}">${todos.completed ? 'Completed' : 'Not completed'}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-sm btn-outline-primary">Add</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>`


            const todosContainer = document.getElementById("todosContainer")
            todosContainer.innerHTML = result
        });
    } else {
        cl("error")
    }
}

xhr.send()