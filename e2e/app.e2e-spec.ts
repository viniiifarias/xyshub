import { AngularGiphyPage } from './app.po';

describe('angular-giphy App', () => {
  let page: AngularGiphyPage;

  beforeEach(() => {
    page = new AngularGiphyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
