import {renderMenu} from './menu'
import {renderContact} from './contact'

const renderTabs = () => {
  let numberOfTabs = 2;
  const tabNames = ["Menu" , "Contact"];
  const content = document.getElementById('content');

  const tabs = document.createElement('div');

  for (var i = 0; i < numberOfTabs; i++) {
    const tab = document.createElement('button');
    tab.classList.add('tabbtn');
    tab.textContent = tabNames[i];
    tabs.appendChild(tab);
  }

  content.appendChild(tabs);
}

renderTabs();
renderMenu();
