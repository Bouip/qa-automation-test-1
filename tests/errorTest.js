const { chromium } = require("playwright");

(async () => {
    try {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto("https://example.com");
        const wrongText = await page.textContent("h2");
        if (!wrongText) throw new Error("Échec du test volontaire");

        console.log("TEST OK : ouverture d'une page “non fonctionnelle”");
        await page.screenshot({ path: "public/error_screenshot.png" });
        await browser.close();
    } catch (e) {
        console.log("TEST FAIL :", e.message);
    }
})();
