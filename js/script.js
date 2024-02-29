'use strict';

const products = [
    {
        title: 'Toothbrush',
        price: 400,
        description: 'This is a state of the art high class toothbrush. Users have reported several improvements in their life because of using this amazing tootbrush.',
        category: 'bathroom',
        image: '../img/colgate-360-toothbrush.webp',
        rating: {
            rate: 4.5,
            count: 3400
        }
    },
    {
        title: 'Soap',
        price: 30,
        description: 'This soap bar is indicated for all kind of skins, from the hardest to the softest.',
        category: 'bathroom',
        rating: {
            rate: 4.7,
            count: 1200
        }
    },
    {
        title: 'Water bottle',
        price: 79,
        description: 'Not only is this an excellent water bottle, but it is also sustainable, since it has been made out of natural elements.',
        category: 'household',
        rating: {
            rate: 2.3,
            count: 80002
        }
    },
    {
        title: 'Electric bass Fender Jazz',
        price: 11200,
        description: 'The original model of electric bass that all musicians kill for.',
        category: 'music',
        rating: {
            rate: 4.9,
            count: 330
        }
    }
];

/*
let productsContent = '';
for (const product of products) {
    
    let productCard = `
    <article>
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    </article>
    `;
    
    productsContent += productCard;
}
document.querySelector('main').innerHTML += productsContent;
*/

const productsInfo = document.createElement('section');
productsInfo.id = 'productList';
for (const product of products) {
    const productArticle = document.createElement('article');

    const productHeader = document.createElement('h2');
    productHeader.innerText = product.title;

    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;

    const productImage = document.createElement('img');

    productArticle.appendChild(productHeader);
    productArticle.appendChild(productImage);
    productArticle.appendChild(productDescription);

    productArticle.addEventListener('click', function() {
        document.querySelector('#productModal h2').innerHTML = product.title;
        document.querySelector('#description').innerHTML = product.description;
        document.querySelector('#price').innerHTML = product.price;
        document.querySelector('#category').innerHTML = product.category;
        document.querySelector('#picture').setAttribute('src', product.image);
        document.querySelector('#picture').setAttribute('alt', product.title);
        document.querySelector('#rate').innerHTML = product.rating.rate;
        document.querySelector('#rateCount').innerHTML = product.rating.count;

        document.querySelector('#productModal').showModal();
        document.querySelector('#productModal > #close').blur();
    });

    productsInfo.appendChild(productArticle);
}
document.querySelector('main').appendChild(productsInfo);

document.querySelector('#productModal > #close').addEventListener('click', function() { 
    this.parentNode.close() 
});

