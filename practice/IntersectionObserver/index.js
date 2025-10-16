const images = document.querySelectorAll('img');

function imageLazyLoad(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            img.setAttribute('src', src);
            console.log('Image loaded:', src);
        }
    }) 
}

const observer = new IntersectionObserver(imageLazyLoad);

images.forEach(img => observer.observe(img));