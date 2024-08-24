import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';

test('search for playwright term in main search', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();

  const mainSearchbarInput = page
    .getByRole('search')
    .getByRole('searchbox', { name: /Search Wikipedia/i });

  await mainSearchbarInput.fill('playwright');

  const searchResults = page.getByRole('listbox', { name: 'Search results' });
  const firstResult = searchResults.locator('li').first();

  await firstResult.click();

  const main = page.getByRole('main');

  await expect(main).toHaveText(
    /A playwright or dramatist is a person who writes/
  );
});
