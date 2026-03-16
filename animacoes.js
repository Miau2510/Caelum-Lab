// Animações de página
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe de animação ao main
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('animate');
    }

    // Marca o link ativo na navegação
    const currentPage = window.location.href.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    console.log('Página atual:', currentPage); // Debug
});

// Animações de página
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe de animação ao main
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('animate');
    }

    // Marca o link ativo na navegação
    const currentPage = window.location.href.split('/').pop() || 'index.html';
    
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href === currentPage) {
                link.classList.add('active');
            }
        });
    }

    console.log('Página atual:', currentPage); // Debug
});