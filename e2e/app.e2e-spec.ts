import { SocialChatPage } from './app.po';

describe('social-chat App', function() {
  let page: SocialChatPage;

  beforeEach(() => {
    page = new SocialChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
