const menuItems = [
    { text: 'Estudos PAR/PEL', link: 'https://app.powerbi.com/view?r=eyJrIjoiYjE4YjM4ZjMtNDg3MS00NTNhLTgxN2UtZDljZmI5YmQ1MTljIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9', altText: 'Sumário Executivo e sua apresentação, relatórios e Infográfico.' },
    { text: 'Reuniões GTs estados', link: 'https://app.powerbi.com/view?r=eyJrIjoiOGE0ZjVmNDUtNTE0Zi00YTQ0LTlkYzktZWExNTI0Mjc5YmFiIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9', altText: 'Gestão dos planos de ações, apresentações, atas de reuniões e Infográfico.' },
    { text: 'Painel dos Casos de Referência', link: 'https://app.powerbi.com/view?r=eyJrIjoiZTFmMWFlMjEtZGQ2NS00MDhkLTkzYTktNjJhNTBiNTkyZjk1IiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9', altText: 'Dashboard dos casos dos estudos de Curto-Prazo: PAR/PEL, Mensal e Quadrimestral.' },
    { text: 'Margens para os Leilões de Energia', link: 'https://app.powerbi.com/view?r=eyJrIjoiYWFlNmQ0NWItMTRmYi00MDQzLWEwMjUtNDYxMGQ1MjM5MTY2IiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9', altText: 'Capacidade remanescente do SIN para leilões de energia.' },
    { text: 'Margem por Barramento', link: 'https://app.powerbi.com/view?r=eyJrIjoiNjkxMWQxMmYtNDlhZS00MzNmLTgzODctMjBhZGM2YTRjODNlIiwidCI6IjNhZGVlNWZjLTkzM2UtNDkxMS1hZTFiLTljMmZlN2I4NDQ0OCIsImMiOjR9', altText: 'Capacidade remanescente do SIN para escoamento de geração.' },
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
        a.title = item.altText; // Adiciona o texto alternativo como tooltip
        a.addEventListener('click', function(event) {
            event.preventDefault();
            loadContent(item.link);
            closeMenu();
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

    // Adiciona evento de clique no logo para voltar à página inicial
    document.getElementById('logo-home').addEventListener('click', function() {
        loadContent('home.html'); // Carrega a página inicial no iframe
    });
});

