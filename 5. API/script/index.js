let ask = false;
let contentsContainer = [];
// add red background
const addRedBG = (id) => {
    const btnsId = ['all', 'music', 'comedy', 'drawing'];
    for (const btnId of btnsId) {
        if (btnId === id) {
            const element = document.getElementById(id);
            element.classList.add('bg-red-500');
        }
        else {
            const element = document.getElementById(btnId);
            element.classList.remove('bg-red-500');
        }
    }
}
// time conversion
const timeConversion = (sec) => {
    let secInt = parseInt(sec);
    const hours = parseInt(secInt / 3600);
    secInt = parseInt(secInt % 3600);
    const mins = parseInt(secInt / 60);

    return `${hours} hrs ${mins} min ago`;
}
// loading spinner
const loadingSpinner = (order) => {
    if (!order) {
        document.getElementById('spinner').classList.add('hidden');
    }
    else {
        document.getElementById('spinner').classList.remove('hidden');
    }
}
// parse views string into number
const parseViews = (views) => {
    let value = parseFloat(views);
    if (views.includes('K')) {
        value *= 1000;
    }
    else if (views.includes('M')) {
        value *= 1000000;
    }
    return value;
};
// display drawing content
const drawingContentDisplay = () => {
    loadingSpinner(true);
    const cardParent = document.getElementById('content-container');
    cardParent.classList.remove('md:grid-cols-2', 'lg:grid-cols-3', 'gap-4');
    cardParent.textContent = '';

    const cardChild = document.createElement('div');
    cardChild.innerHTML = `
    <div class="flex flex-col items-center text-center h-[57vh]">
        <img class="mt-12 w-32 h-32" src="images/icon.png" alt="no content logo">
        <p class="text-2xl font-semibold">Oops!! Sorry, There is no content here</p>
    </div>
    `
    cardParent.appendChild(cardChild);
    loadingSpinner(false);
}
// display content except the drwaing 
const displayContent = () => {
    if (contentsContainer.length === 0) {
        return drawingContentDisplay();
    }

    loadingSpinner(true);
    const cardParent = document.getElementById('content-container');
    cardParent.textContent = '';
    cardParent.classList.add('md:grid-cols-2', 'lg:grid-cols-3', 'gap-4');


    let contents = [...contentsContainer]
    if (ask) {
        contents.sort((a, b) => {
            const aViews = parseViews(a.others.views);
            const bViews = parseViews(b.others.views);
            return bViews - aViews;
        });
    }

    contents.forEach(content => {
        const cardChild = document.createElement('div');
        cardChild.classList = `card bg-base-100 shadow-lg`;
        cardChild.innerHTML = `
        <figure class="relative w-full h-64">
            <img class="w-full h-full object-cover" src="${content.thumbnail}" alt="content picture" />
            ${content.others.posted_date ? `
                <div class="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-sm rounded">
                    ${timeConversion(content.others.posted_date)}
                </div>
            ` : ''}
        </figure>
        <div class="flex pt-4">
            <div class="w-16 h-16">
                <img class="w-full h-full object-cover rounded-full" src="${content.authors[0].profile_picture}" alt="author picture">
            </div>
            <div class="ml-3">
                <p class="text-2xl font-semibold">${content.title}</p>
                <p class="flex items-center font-serif">
                    ${content.authors[0].profile_name}
                    ${content.authors[0].verified ? `<img class="h-4 w-4 ml-2" src="images/verified.png" alt="verified icon">` : ''}
                </p>
                <p>${content.others.views} views</p>
            </div>
        </div>
        `
        cardParent.appendChild(cardChild);
    });
    loadingSpinner(false);
}
// load content
const loadContent = async (contentId = 1000, id = 'all') => {
    addRedBG(id);
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${contentId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        contentsContainer = jsonData.data;
        id === 'drawing' ? drawingContentDisplay() : displayContent();
    }
    catch (error) {
        console.error('Error fetching content:', error);
    }
}
// sort button
document.getElementById('sort-btn').addEventListener('click', () => {
    ask = !ask;
    const element = document.getElementById('sort-btn');
    if (ask) {
        element.classList.add('bg-red-500');
    }
    else {
        element.classList.remove('bg-red-500');
    }
    displayContent();
});

loadContent();