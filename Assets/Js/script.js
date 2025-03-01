
$(document).ready(function() {
    // Carregar categorias via JSON
    $.getJSON("json/categorias-links.json", function(data) {
        let categoriasHtml = "";
        $.each(data, function(index, item) {
            categoriasHtml += `<li><a href="${item.href}">${item.text}</a></li>`;
        });
        $("#categorias").html(categoriasHtml);
    });
    
    
    // DOM Elements
    const menuBtn = document.getElementById('menuBtn');
    const searchBtn = document.getElementById('searchBtn');
    const sidebar = document.getElementById('sidebar');
    const searchOverlay = document.getElementById('searchOverlay');
    const overlay = document.getElementById('overlay');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const closeSearchBtn = document.getElementById('closeSearchBtn');

    // Open Menu Function
    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    // Close Menu Function
    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Open Search Function
    function openSearch() {
        searchOverlay.classList.add('active');
        setTimeout(() => {
            document.querySelector('.search-input').focus();
        }, 300);
    }

    // Close Search Function
    function closeSearch() {
        searchOverlay.classList.remove('active');
    }

    // Event Listeners
    menuBtn.addEventListener('click', openMenu);
    searchBtn.addEventListener('click', openSearch);
    closeSidebarBtn.addEventListener('click', closeMenu);
    closeSearchBtn.addEventListener('click', closeSearch);
    overlay.addEventListener('click', () => {
        closeMenu();
        closeSearch();
    });

    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
            closeSearch();
        }
    });
});

$('#topicos').slick({
    slidesToShow: 8,
    slidesToScroll: 2
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
});
$('#mob-topicos').slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
});
document.querySelectorAll(".ytb").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});
document.querySelectorAll(".matricule-se").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});
document.querySelectorAll(".caretdown").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});

document.querySelectorAll(".aprender").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});
document.querySelectorAll(".bttn").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});
document.querySelectorAll(".read").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});
document.querySelectorAll(".aprender-mob").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});
document.querySelectorAll(".buttoon").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});
document.querySelectorAll(".readmob").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.textContent}`);
    });
});

