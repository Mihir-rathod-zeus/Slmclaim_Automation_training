import { test, expect } from '@playwright/test';

test("name_of_test", async ({ page }) => {
    await page.goto("https://dev-cengage-dental.zeuslearning.com/launcherPages/openemr_simclaim_launcher_inter.html?taskName=z_sc_3_comm_ins_case_1&launchType=0&appMode=2&attemptId=0");
    const frame = page.frameLocator('iframe'); // adjust selector if needed
    const close_button = frame.getByRole('button', { name: 'Close' });
    

}); 