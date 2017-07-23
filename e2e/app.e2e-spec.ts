import { FourthPage } from './app.po';

describe('fourth App', () => {
  let page: FourthPage;

  beforeEach(() => {
    page = new FourthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
