const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Site de test pour login
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // Remplir le formulaire
    await page.fill("#username", "student");
    await page.fill("#password", "Password123");

    // Cliquer sur login
    await page.click("#submit");

    // Vérifier si le login a réussi
    const successText = await page.textContent(".post-title");
    if (successText.includes("Logged In Successfully")) {
        console.log("TEST OK : connexion réussie");
    } else {
        console.log("TEST FAIL : échec de connexion");
    }

    await page.screenshot({ path: "public/login_screenshot.png" });
    await browser.close();
})();
