import makiRoll from './maki-roll.jpg';
import uramakiRoll from './uramaki-roll.jpg';
import temakiRoll from './temaki-roll.jpg';

export function menu(){
    let menuWrapper = document.createElement('div');
    let makiCard = document.createElement('div');
    let uramakiCard = document.createElement('div');
    let temakiCard = document.createElement('div');

    menuWrapper.classList.add('menuWrapper');
    makiCard.classList.add('makiCard');
    uramakiCard.classList.add('uramakiCard');
    temakiCard.classList.add('temakiCard');
  
    let makiTitle = document.createElement('h1');
    let uramakiTitle = document.createElement('h1');
    let temakiTitle = document.createElement('h1');

    makiTitle.innerText = 'Maki (Traditional Roll)';
    uramakiTitle.innerText = 'Uramaki (Inside-Out Roll)';
    temakiTitle.innerText = 'Temaki (Hand Roll)';

    makiCard.appendChild(makiTitle);
    uramakiCard.appendChild(uramakiTitle);
    temakiCard.appendChild(temakiTitle);

    let makiIntro = document.createElement('p');
    let uramakiIntro = document.createElement('p');
    let temakiIntro = document.createElement('p');

    makiIntro.innerText = 'Try our traditional roll Maki with both tuna or cucumber. Whichever you choose you won`t make mistake.';
    uramakiIntro.innerText = 'Try our modern, western-style uramaki roll. Customers give this roll 5/5 in taste & easy to eat';
    temakiIntro.innerText = 'Try our coned-shaped sushi roll. It`s just like eating an ice cream except you eat sushi. Win-win.';

    makiCard.appendChild(makiIntro);
    uramakiCard.appendChild(uramakiIntro);
    temakiCard.appendChild(temakiIntro);

    let makiImg = document.createElement('img');
    let uramakiImg = document.createElement('img');
    let temakiImg = document.createElement('img');

    makiImg.src = makiRoll;
    uramakiImg.src = uramakiRoll;
    temakiImg.src = temakiRoll;
    
    makiCard.appendChild(makiImg);
    uramakiCard.appendChild(uramakiImg);
    temakiCard.appendChild(temakiImg);


    menuWrapper.appendChild(makiCard);
    menuWrapper.appendChild(uramakiCard);
    menuWrapper.appendChild(temakiCard);

     if(content.firstElementChild.className === 'cardWrapper' ||
        content.firstElementChild.className === 'aboutWrapper') {

        content.firstElementChild.remove();
        content.appendChild(menuWrapper);
    } else {
        return;
    }
}