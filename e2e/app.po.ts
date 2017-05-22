import { browser, element, by } from 'protractor';

export class MyVideoAppPage {
  navigateTo(url) {
    return browser.get(url);
  }

  getElementByCss(selector) {
    return element.all(by.css(selector));
  }

  clickToElementByCss(selector) {
    element(by.css(selector)).click();
  }
}
