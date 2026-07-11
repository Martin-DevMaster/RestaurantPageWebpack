export function about(){
    let aboutWrapper = document.createElement('div');
    let aboutPara1 = document.createElement('p');
    let aboutPara2 = document.createElement('p');
    let aboutPara3 = document.createElement('p');
    aboutWrapper.classList.add('aboutWrapper')

    aboutPara1.innerText = 'Nestled in the heart of Osaka, our family-run sushi restaurant is a celebration of tradition, craftsmanship, and heartfelt hospitality. Passed down through generations, our passion for authentic Japanese cuisine is reflected in every detail—from the careful selection of seasonal ingredients to the precise techniques used in each dish.'
    aboutPara2.innerText = 'Inspired by the rich culinary culture of Osaka, we honor time-tested methods while creating a warm and welcoming space where guests feel at home. Our chefs prepare each piece of sushi with dedication and respect for the art, ensuring a balance of flavor, texture, and presentation.'
    aboutPara3.innerText = 'As a family restaurant, we believe that dining is more than just a meal—it is an experience meant to be shared. Whether you are joining us for a quiet dinner or a special gathering, we invite you to enjoy the true spirit of traditional Japanese sushi, crafted with care and served with sincerity.'

    aboutWrapper.appendChild(aboutPara1)
    aboutWrapper.appendChild(aboutPara2)
    aboutWrapper.appendChild(aboutPara3)

    if(content.firstElementChild.className === 'cardWrapper') {
        content.firstElementChild.remove();
    } else if(content.firstElementChild.className === 'menuWrapper'){
        content.firstElementChild.remove();
    } else {
        return;
    }
    
    content.appendChild(aboutWrapper)
};