
const title = document.querySelector('.title');
const text = title.textContent;
title.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = () => {
    typeWriter();
    animateNews();
};

function animateNews() {
    const newsArticles = document.querySelectorAll('.recent-news article');
    newsArticles.forEach((article, index) => {
        setTimeout(() => {
            article.style.animation = 'slideIn 0.5s ease forwards';
            article.style.opacity = '1';
        }, index * 200);
    });
}


document.querySelectorAll('.recent-news article').forEach(article => {
    article.addEventListener('mouseover', () => {
        article.style.transform = 'translateX(10px)';
        article.style.background = '#ffe6e6';
    });
    article.addEventListener('mouseout', () => {
        article.style.transform = 'translateX(0)';
        article.style.background = '#f5f5f5';
    });
});