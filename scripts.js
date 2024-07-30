const menuItems = [
    { text: 'Estudos PAR/PEL', link: 'https://app.powerbi.com/view?r=eyJrIjoiYjE4YjM4ZjMtNDg3MS00NTNhLTgxN2UtZDljZmI5YmQ1MTljIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9' },
    { text: 'Reuniões GTs estados', link: 'https://app.powerbi.com/view?r=eyJrIjoiYjE4YjM4ZjMtNDg3MS00NTNhLTgxN2UtZDljZmI5YmQ1MTljIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9' },
    { text: 'Painel dos Casos de Referência', link: 'https://app.powerbi.com/view?r=eyJrIjoiYjE4YjM4ZjMtNDg3MS00NTNhLTgxN2UtZDljZmI5YmQ1MTljIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9' },
    { text: 'Margens para os Leilões de Energia', link: 'https://app.powerbi.com/view?r=eyJrIjoiYjE4YjM4ZjMtNDg3MS00NTNhLTgxN2UtZDljZmI5YmQ1MTljIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9' }
];

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function generateMenu() {
    const menuList = document.getElementById('menu-items');
    menuList.innerHTML = '';
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.text;
        a.addEventListener('click', function(event) {
            event.preventDefault();
            loadContent(item.link);
        });
        li.appendChild(a);
        menuList.appendChild(li);
    });
}

function loadContent(url) {
    const contentFrame = document.getElementById('content-frame');
    contentFrame.src = url; // Carrega o novo conteúdo no iframe
}

function closeMenu(event) {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('open');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateMenu();
    document.addEventListener('click', closeMenu);
});
