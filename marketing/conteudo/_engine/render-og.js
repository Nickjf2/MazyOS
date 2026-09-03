const { chromium } = require('playwright');
(async () => {
  const [html, out] = [process.argv[2], process.argv[3]];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto('file://' + html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  await page.locator('.og').screenshot({ path: out, type: 'jpeg', quality: 88 });
  await browser.close();
  console.log('gerado:', out);
})();
