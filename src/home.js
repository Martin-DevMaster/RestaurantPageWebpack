let cardWrapper = document.createElement('div');

export function home() {
    let card1 = document.createElement('div');
    let card2 = document.createElement('div');
    let card3 = document.createElement('div');
    card1.classList.add('card1');
    card2.classList.add('card2');
    card3.classList.add('card3');
    cardWrapper.classList.add('cardWrapper');

    card1.innerText = 'Welcome to the best sushi in the town. Whether you were referred to us by your friend or colleague, you made the right decision to visit us and try some of our best sushi recipes that we`ve made for almost a century.';
    card2.innerText = 'You can safely place your order on our site and your chosen delicious sushi will be delivered as quickly as possible on your doorstep by our or your chosen delivery method.';
    card3.innerText = 'If you liked our delicious recipes, you can subscribe to our newsletter for news and discounts we have. We also have promo card for loyal costumers, refer to our Restaurant in Osaka for details.';
    

    cardWrapper.appendChild(card1)
    cardWrapper.appendChild(card2)
    cardWrapper.appendChild(card3)
    content.appendChild(cardWrapper)
};

export function checkHome() {
   if(content.firstElementChild.className === 'aboutWrapper') {
        content.firstElementChild.remove()
        content.appendChild(cardWrapper)
    } else if(content.firstElementChild.className === 'menuWrapper') {
        content.firstElementChild.remove()
        content.appendChild(cardWrapper)
    }
}