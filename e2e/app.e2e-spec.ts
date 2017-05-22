import { MyVideoAppPage } from './app.po';
import { browser, element, by } from 'protractor';


describe('my-video-app App', () => {
  let page: MyVideoAppPage;

  beforeEach(() => {
    page = new MyVideoAppPage();
  });

    it('should check rendering main-page', () => {
      page.navigateTo('/');
      page.getElementByCss('h4').then((item) => {
        expect(item.length).toEqual(2);
        expect(item[0].getText()).toEqual('New Films');
        expect(item[1].getText()).toEqual('Popular');
      });
      page.getElementByCss('.film').then((item) => {
        expect(item.length).toEqual(22);
      });
    });

    it('should check rendering film-details', () => {
      page.navigateTo('/film-details/58de342479ef08078a7c7b18');
      page.getElementByCss('h1.filmpage--header').then((item) => {
        expect(item.length).toEqual(1);
        expect(item[0].getText()).toEqual('Forest Gump: the film and nomination of Oscar');
      });
    });

    it('should check adding/removing film from lib', () => {
      page.navigateTo('/film-details/58de342479ef08078a7c7b18');
      page.clickToElementByCss('button.btn-success');
      page.getElementByCss('span.badge-info').then((item) => {
        expect(item.length).toEqual(1);
        expect(item[0].getText()).toEqual('1');
      });
      page.clickToElementByCss('button.btn-danger');
      page.getElementByCss('span.badge-info').then((item) => {
        expect(item.length).toEqual(0);
      });


    });

    it('should check rendering My-library', () => {
      page.navigateTo('/film-details/58de342479ef08078a7c7b18');
      page.clickToElementByCss('button.btn-success');
      page.clickToElementByCss('ul.navbar-nav li:nth-child(2)');
      page.getElementByCss('h4').then((item) => {
        expect(item.length).toEqual(1);
        expect(item[0].getText()).toEqual('My Library');
      });
      page.getElementByCss('span.badge-info').then((item) => {
        expect(item.length).toEqual(1);
        expect(item[0].getText()).toEqual('1');
      });

    });

    it('should check searching film', () => {
      page.navigateTo('/');
      page.getElementByCss('nav input').then((item) => {
        item[0].sendKeys('Forest');
      });
      page.clickToElementByCss('nav button');
      page.getElementByCss('h4.films--header').then((item) => {
        expect(item[0].getText()).toEqual('Found:');
      });
      page.getElementByCss('div.film div.title').then((item) => {
         expect(item[0].getText()).toEqual('Forest Gump: the film and nomination of Oscar');
      });
    });
});
