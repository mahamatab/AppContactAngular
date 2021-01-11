import { AppContactPage } from './app.po';

describe('app-contact App', () => {
  let page: AppContactPage;

  beforeEach(() => {
    page = new AppContactPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
