const menuItems = [
    { text: 'Estudos PAR/PEL', link: 'https://app.powerbi.com/view?r=eyJrIjoiYjE4YjM4ZjMtNDg3MS00NTNhLTgxN2UtZDljZmI5YmQ1MTljIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9' },
    { text: 'Reuniões GTs estados', link: '#' },
    { text: 'Painel dos Casos de Referência', link: '#' },
    { text: 'Margens para os Leilões de Energia', link: '#' }
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
        li.appendChild(a);
        menuList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', generateMenu);
