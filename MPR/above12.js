let breakingImg = document.querySelector('#breakingImg')
let breakingNews_title = document.querySelector('#breakingNews .title')
let breakingNews_desc = document.querySelector('#breakingNews .description')
let topNews = document.querySelector('.topNews')
let sportsnews = document.querySelector('#sportsnews .newsBox')
// let businessnews = document.querySelector('#businessnews .newsBox')
let technews = document.querySelector('#technews .newsBox')
// let currentaffairsnews = document.querySelector('#currentaffairsnews .newsBox')

//   fetching news from API
const apiKey = "0b07ae1bbbaa45879c91a97d5f2ac2d0"
const fetchData = async (category,pageSize)=>{
     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles

}
// fetchData('general',5)

// adding breaking news
const add_breakingNews = (data) => {
    const imageUrl = data[0].urlToImage || '/images/place2.avif'; // Fallback image
    breakingImg.innerHTML = `<img src="${imageUrl}" alt="image">`
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`
    breakingNews_desc.innerHTML = `<h2>${data[0].description}</h2>`
}
fetchData('general',5).then(add_breakingNews)

const add_topNews = (data) => {
    let html = '';
    let title = '';

    // Array of specific placeholder images for each article (20 placeholders)
    const placeholderImages = [
        '/images/place1.webp',  // For 1st article
        '/images/placeholder.avif',    // For 2nd article
        '/images/place3.jpg',    // For 3rd article
        '/images/place4.jpg',    // For 4th article
        '/images/place5.jpg',    // For 5th article
        '/images/place6.jpg',    // For 6th article
        '/images/place7.jpg',    // For 7th article
        '/images/place8.jpg',    // For 8th article
        '/images/place9.jpg',    // For 9th article
        '/images/place10.webp',   // For 10th article
        '/images/place1.webp',   // For 11th article
        '/images/placeholder.avif',   // For 12th article
        '/images/place3.jpg',   // For 13th article
        '/images/place4.jpg',   // For 14th article
        '/images/place5.jpg',   // For 15th article
        '/images/place6.jpg',   // For 16th article
        '/images/place7.jpg',   // For 17th article
        '/images/place8.jpg',   // For 18th article
        '/images/place9.jpg',   // For 19th article
        '/images/place10.webp'    // For 20th article
    ];

    data.forEach((element, index) => {
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }

        // Use the specific placeholder for this article's index
        const specificPlaceholder = placeholderImages[index] || '/images/default-placeholder.jpg';  // Fallback to default if there are more articles than placeholders
        const imageUrl = element.urlToImage || specificPlaceholder; // Fallback to specific placeholder image
        
        html += `<div class="news">
                    <div class="img">
                        <img src="${imageUrl}" alt="image" onerror="this.src='${specificPlaceholder}'">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${element.url}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    topNews.innerHTML = html;
}

fetchData('general', 20).then(add_topNews);


const add_sportsnews = (data) => {
    let html = '';
    let title = '';

    // Array of specific placeholder images for each article
    const placeholderImages = [
        '/images/sports5.jpg',  // For 1st article
        '/images/sports2.webp', // For 2nd article
        '/images/sports1.jpg',  // For 3rd article
        '/images/sports3.webp', // For 4th article
        '/images/sports4.jpg'   // For 5th article
    ];
    
    data.forEach((element, index) => {
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }
        
        // Use the specific placeholder for this article's index
        const specificPlaceholder = placeholderImages[index] || '/images/default-sports-placeholder.jpg';  // Fallback to default if there are more articles than placeholders
        const imageUrl = element.urlToImage || specificPlaceholder; // Fallback to specific placeholder image
        
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${imageUrl}" alt="image" onerror="this.src='${specificPlaceholder}'">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    
    sportsnews.innerHTML = html;
}
fetchData('sports', 5).then(add_sportsnews);
const add_technews = (data) => {
    let html = '';
    let title = '';

    // Array of specific placeholder images for each article
    const placeholderImages = [
        '/images/t1.webp',  // For 1st article
        '/images/t2.jpg',   // For 2nd article
        '/images/t3.jpg',   // For 3rd article
        '/images/t4.webp',  // For 4th article
    ];

    data.forEach((element, index) => {
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }

        // Use the specific placeholder for this article's index
        const specificPlaceholder = placeholderImages[index] || '/images/t2.jpg';  // Fallback to default if there are more articles than placeholders
        const imageUrl = element.urlToImage || specificPlaceholder; // Fallback to specific placeholder image

        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${imageUrl}" alt="image" onerror="this.src='${specificPlaceholder}'">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    
    technews.innerHTML = html;
}
fetchData('technology', 5).then(add_technews);


//ANIMATION
  // ANIMATION
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation for each news category
    const newsCategories = ['sportsnews', 'businessnews', 'technews', 'currentaffairsnews'];
    
    newsCategories.forEach(categoryId => {
        initializeScroll(categoryId);
    });

    function initializeScroll(categoryId) {
        const newsContainer = document.querySelector(`#${categoryId}`);
        const newsBox = newsContainer.querySelector('.newsBox');
        const cards = [...newsBox.querySelectorAll('.newsCard')]; // Convert to array
        
        // Calculate dimensions
        const cardWidth = cards[0].offsetWidth + 20; // card width + gap
        const containerWidth = newsBox.offsetWidth;
        
        // Clone cards and append them
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            newsBox.appendChild(clone);
        });

        let currentIndex = 0;
        let isHovered = false;

        function moveFirstCardToEnd() {
            const firstCard = newsBox.querySelector('.newsCard');
            const clone = firstCard.cloneNode(true);
            
            // Animate the removal of the first card
            firstCard.style.transition = 'transform 0.5s ease-out';
            firstCard.style.transform = 'translateX(-100%)';
            
            // After animation, remove first card and append clone to end
            setTimeout(() => {
                newsBox.removeChild(firstCard);
                clone.style.transform = 'none';
                newsBox.appendChild(clone);
            }, 500);
        }

        function animate() {
            if (!isHovered) {
                currentIndex++;
                moveFirstCardToEnd();
            }
            setTimeout(() => requestAnimationFrame(animate), 3000); // Adjust timing here
        }

        // Start animation
        requestAnimationFrame(animate);

        // Pause on hover
        newsBox.addEventListener('mouseenter', () => {
            isHovered = true;
        });

        newsBox.addEventListener('mouseleave', () => {
            isHovered = false;
        });

        // Add these styles dynamically
        newsBox.style.position = 'relative';
        newsBox.style.transition = 'all 0.5s ease-in-out';
    }
});