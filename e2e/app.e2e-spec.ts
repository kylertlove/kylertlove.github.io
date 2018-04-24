import { KylerSitePage } from './app.po';

describe('kyler-site App', () => {
  let page: KylerSitePage;

  beforeEach(() => {
    page = new KylerSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
