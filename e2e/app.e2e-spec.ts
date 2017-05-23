import { BasicreportingCliPage } from './app.po';

describe('basicreporting-cli App', () => {
  let page: BasicreportingCliPage;

  beforeEach(() => {
    page = new BasicreportingCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
