const menuItems = [
    { text: 'Estudos PAR/PEL', link: 'https://app.powerbi.com/view?r=eyJrIjoiYjE4YjM4ZjMtNDg3MS00NTNhLTgxN2UtZDljZmI5YmQ1MTljIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9' },
    { text: 'Reuniões GTs estados', link: 'https://app.powerbi.com/view?r=eyJrIjoiOGE0ZjVmNDUtNTE0Zi00YTQ0LTlkYzktZWExNTI0Mjc5YmFiIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9' },
    { text: 'Painel dos Casos de Referência', link: 'https://sintegre.ons.org.br/sites/8/casosreferencia' },
    { text: 'Margens para os Leilões de Energia', link: 'https://app.powerbi.com/view?r=eyJrIjoiYWFlNmQ0NWItMTRmYi00MDQzLWEwMjUtNDYxMGQ1MjM5MTY2IiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9' }
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
            closeMenu(); // Fecha o menu ao clicar em um item
        });
        li.appendChild(a);
        menuList.appendChild(li);
    });
}

function loadContent(url) {
    const contentFrame = document.getElementById('content-frame');
    contentFrame.src = url; // Carrega o novo conteúdo no iframe
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
    generateMenu();
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('open'); // Adiciona a classe 'open' para mostrar o menu automaticamente
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !document.getElementById('menu-icon').contains(event.target)) {
            closeMenu();
        }
    });
});

document.getElementById('menu-icon').addEventListener('click', function(event) {
    event.stopPropagation();
});
