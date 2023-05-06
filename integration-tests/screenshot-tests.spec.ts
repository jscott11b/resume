import { test, expect } from '@playwright/test';

const URL: string = process.env.TEST_URL!;

const SMALL_SCREEN_RESOLUTION = {width: 390, height: 844};
const MEDIUM_SCREEN_RESOLUTION = {width: 768, height: 1024};
const LARGE_SCREEN_RESOLUTION = {width: 1920, height: 1080};

test.describe("Application", () => {
  test.beforeEach(async ({page}, testInfo): Promise<void> => {
    testInfo.snapshotSuffix = "";
    await page.goto(URL);
  });

  test('renders correctly on large displays', async ({ page }) => {
    await page.setViewportSize(LARGE_SCREEN_RESOLUTION);

    await expect(page).toHaveScreenshot();
  });

  test('renders correctly on medium displays', async ({ page }) => {
    await page.setViewportSize(MEDIUM_SCREEN_RESOLUTION);

    await expect(page).toHaveScreenshot();

    await page.mouse.wheel(0, 200);

    await expect(page).toHaveScreenshot();
  });

  test('renders correctly on small displays', async ({ page }) => {
    await page.setViewportSize(SMALL_SCREEN_RESOLUTION);

    await expect(page).toHaveScreenshot();
    
    await page.mouse.wheel(0, 550);

    await expect(page).toHaveScreenshot();

    await page.mouse.wheel(0, 550);

    await expect(page).toHaveScreenshot();

    await page.mouse.wheel(0, 410);

    await expect(page).toHaveScreenshot();
  });

  test('displays menu when button clicked', async ({ page }) => {
    await page.setViewportSize(SMALL_SCREEN_RESOLUTION);

    const menuButton = page.getByRole("button");
    await menuButton.click();

    await expect(page).toHaveScreenshot();
  });

  test('displays formatted text when weblayout unchecked', async ({ page }) => {
    await page.setViewportSize(LARGE_SCREEN_RESOLUTION);

    const menuButton = page.getByRole("button");
    await menuButton.click();

    const webLayoutCheckbox = page.getByRole("checkbox");
    await webLayoutCheckbox.click();

    await expect(page).toHaveScreenshot();
  });

  test('header is not sticky when weblayout unchecked', async ({ page }) => {
    await page.setViewportSize(SMALL_SCREEN_RESOLUTION);

    const menuButton = page.getByRole("button");
    await menuButton.click();

    const webLayoutCheckbox = page.getByRole("checkbox");
    await webLayoutCheckbox.click();

    const main = page.getByRole("main");
    await main.click();

    await page.mouse.wheel(0, 200);

    await expect(page).toHaveScreenshot();
  });
});