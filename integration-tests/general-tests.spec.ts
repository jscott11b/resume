import { test, expect } from '@playwright/test';

const URL: string = process.env.TEST_URL!;

test.describe("Application", () => {
  test.beforeEach(async ({page}): Promise<void> => {
    await page.goto(URL);
  });

  test('should have title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe("Jordan Scott's Resume");
  });

  test('should download pdf when button clicked', async ({ page }) => {
    await page.setViewportSize({width: 390, height: 844});

    const menuButton = page.getByRole("button");
    await menuButton.click();

    const downloadPromise = page.waitForEvent('download');
    const downloadButton = page.getByText("Download as PDF");
    await downloadButton.click();
    const download = await downloadPromise;
    const path = await download.path();

    expect(path).toBeTruthy();
    expect(download.suggestedFilename()).toBe("jordan-scott-resume.pdf");
  });
});