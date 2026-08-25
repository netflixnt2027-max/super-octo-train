// Alternar menu lateral (mobile)
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Trocar de abas
const navItems = document.querySelectorAll('.nav-item[data-tab]');
const tabContents = document.querySelectorAll('.tab-content');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const tabId = item.getAttribute('data-tab');
        
        // Remover active de todos
        navItems.forEach(i => i.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Adicionar active ao clicado
        item.classList.add('active');
        document.getElementById(tabId).classList.add('active');
        
        // Fechar menu no mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
});

// Submenus
const submenuItems = document.querySelectorAll('.has-submenu');
submenuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

// Ações rápidas — também trocam de aba
const actionBtns = document.querySelectorAll('.action-btn');
actionBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        actionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
