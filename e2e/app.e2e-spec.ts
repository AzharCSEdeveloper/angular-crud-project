import { A2todosPage } from './app.po';

describe('a2todos App', function() {
  let page: A2todosPage;

  beforeEach(() => {
    page = new A2todosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
