import { HeroEditorPage } from './app.po';

describe('hero-editor App', function() {
  let page: HeroEditorPage;

  beforeEach(() => {
    page = new HeroEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
