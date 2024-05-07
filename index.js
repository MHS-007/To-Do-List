let input = document.getElementById("user-input");
let tasks = document.querySelector(".task-list");
let completedTasks = document.querySelector(".completed-tasks");

function AddTasks(){
    if(input.value === "" || input.value.trim() === "")
    {
        alert("Enter the task first");
    }
    else
    {
        let Element = document.createElement("li");
        Element.innerHTML = input.value;

        let icon1 = document.createElement("i");
        icon1.className = "fa-solid fa-trash";

        let icon2 = document.createElement("i");
        icon2.className = "fa-regular fa-circle";

        Element.appendChild(icon1);
        
        Element.insertBefore(icon2, Element.firstChild);

        tasks.appendChild(Element);

        input.value = "";

        icon1.addEventListener("click", function(event){
            event.stopPropagation(); // Stop event propagation
            Element.remove();
        });

        let delay = 1000;

        Element.addEventListener("click", function(){

            Element.removeChild(icon1);

            setTimeout(function () {
            
            let Element2 = document.createElement("li");
            icon2.className = "fa-regular fa-circle-check";

            Element2.innerHTML = Element.innerHTML;

            let icon3 = document.createElement("i");
            icon3.className = "fa-solid fa-trash";

            Element2.appendChild(icon3);
            completedTasks.appendChild(Element2);

            Element.remove();

            icon3.addEventListener("click", function() {
                event.stopPropagation(); // Stop event propagation
                Element2.remove();
            });
            
            }, delay);

            icon2.className = "fa-regular fa-circle-check";

        });
        
    }

}