import { SeljestokkenPage } from './app.po';

describe('seljestokken App', function() {
  let page: SeljestokkenPage;

  beforeEach(() => {
    page = new SeljestokkenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
