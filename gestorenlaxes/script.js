document.getElementById('createFolderBtn').addEventListener('click', function() {
    const folderName = document.getElementById('folderName').value;
    if (folderName) {
        createFolder(folderName);
        document.getElementById('folderName').value = '';
    }
});

function createFolder(name) {
    const folderDiv = document.createElement('div');
    folderDiv.className = 'folder';
    folderDiv.innerHTML = `<h3>${name}</h3>
        <div class="link-input">
            <input type="text" placeholder="Agregar enlace">
            <button onclick="addLink(this)">Agregar</button>
        </div>
        <ul class="link-list"></ul>`;
    document.getElementById('folders').appendChild(folderDiv);
}

function addLink(button) {
    const linkInput = button.previousElementSibling;
    const linkValue = linkInput.value;
    
    if (linkValue) {
        const linkList = button.parentElement.nextElementSibling;
        const listItem = document.createElement('li');
        
        // Crear un enlace clicable
        const linkElement = document.createElement('a');
        linkElement.textContent = linkValue;
        linkElement.href = linkValue;
        linkElement.target = "_blank"; // Abre en nueva pestaña
        linkElement.className = 'link';

        // Botón para borrar
        const deleteButton = document.createElement('span');
        deleteButton.textContent = '🗑️';
        deleteButton.className = 'delete-link';
        deleteButton.onclick = function() {
            linkList.removeChild(listItem);
        };
        
        // Añadir elementos al listItem
        listItem.appendChild(linkElement);
        listItem.appendChild(deleteButton);
        linkList.appendChild(listItem);
        
        linkInput.value = '';
    }
}