const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://example.com");

    const title = await page.title();
    if (title !== "Example Domain") {
        throw new Error("Titre incorrect");
    }

    await page.screenshot({ path: "public/screenshot.png" });

    await browser.close();

    console.log("TEST OK : site ouvert");
})();
