(() => {
    let form = document.getElementById("form")
        input = document.getElementById("input"),
        buttonAdd = document.getElementById("button-add"),
        buttonRemove = document.getElementById("button-remove"),
        list = document.getElementById("list");

        input.focus();

    // DELETE ITEM FUNCTION    
    const deleteItem = () => {
        let removeItem = []
        for (let i = 0; i < list.children.length; i++) {
           removeItem[i] = list.children[i].children[1];
           removeItem[i].addEventListener('click', e => e.target.parentElement.remove());
        }
    };

    // ADD ITEM FUNCTION    
    const addItem = () => {

        input.focus();
        if(input.value.trim()) {
            list.innerHTML += `
                <li class="list-item">
                    <span class="list-item-text">${input.value}</span>
                    <span id="remove-item" class="remove-item">&times;</span>
                </li>`;
            input.value = "";
            deleteItem();
        } else 
            alert("Debes ingresar una tarea para que esta se muestre!");
    }

    buttonAdd.addEventListener("click", addItem);  

    // ADD ITEM WITH ENTER
    form.addEventListener("keydown", e => {       
        if(e.key === "Enter") 
            addItem();
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
    })
    
    deleteItem();

    // DELETE ALL
    buttonRemove.addEventListener("click", () => {
        input.focus();        

        let conf = confirm("¿Estas seguro que deseas eliminar todas tus tareas agregadas?");
        if(conf) {
            list.innerHTML = '';
        }
    });

})();    
