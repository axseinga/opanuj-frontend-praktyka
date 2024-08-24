import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';

test('search watchlist term on the FAQ page', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();

  const communityPortalLink = page.getByTitle('The hub for editors');
  await communityPortalLink.click();

  const helpDeskLink = page.getByRole('link', {
    name: 'Help desk',
    exact: true,
  });
  await helpDeskLink.click();

  const searchFAQFormInput = page
    .locator('form[name="searchbox"] input')
    .first();

  await searchFAQFormInput.fill('watchlist');

  const searchFAQFormSubmitButton = page
    .locator('form[name="searchbox"]')
    .getByRole('button', { name: 'Search the frequently asked' });
  await searchFAQFormSubmitButton.click();

  const resultList = page.locator('.mw-search-results');

  await expect(resultList).toHaveText(/watchlist/);
});
