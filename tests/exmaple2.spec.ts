import { test, expect, type FrameLocator, type Locator } from '@playwright/test';

//variables


test.describe('launching_the_activity',()=>{
    let frame:FrameLocator;
    let Primary_tab:Locator;
    let Get_started_dialog:Locator;


    test.beforeEach(async({page}) =>{
    await page.goto("https://dev-cengage-dental.zeuslearning.com/launcherPages/openemr_simclaim_launcher_inter.html?taskName=z_sc_3_comm_ins_case_1&launchType=0&appMode=2&attemptId=0");
     frame = page.frameLocator('iframe');
     Primary_tab = frame.locator('#form-page-idtabpanel-1');

 // adjust selector if needed
        Get_started_dialog = frame.getByRole('dialog');
    const close_button = Get_started_dialog.getByRole('button', { name: 'Close' });
    await expect(close_button).toBeEnabled();
    await close_button.waitFor({ state: 'visible' });
    await close_button.click();
    await expect(close_button).not.toBeVisible();  
});


test("Sim CLaim", async () => {
    

    const close_button_intro = frame.getByRole('alertdialog').getByRole('button', { name: 'Close' });
    await  close_button_intro.waitFor({ state: 'visible' });
    await close_button_intro.click();
    await expect (close_button_intro).not.toBeVisible();

   const Career_line_1 =  frame.locator('[id="000_000_form_1_0"]');
   await Career_line_1.fill('connecticut general');


   const career_line_2 = frame.locator('[id = "000_001_form_1_0"]');
   await career_line_2.fill('po bpx 1234');

   const career_line_3 = frame.locator('[aria-describedby="form-control-correct-incorrect-id000_000_form_1_0"]');
   await career_line_3.fill('notneeded');

   const Grp_helth_plan = frame.getByRole('checkbox',{name: 'GROUP HEALTH PLAN (ID#)'});
   await Grp_helth_plan.check();

    const Family_relation_group = frame.getByRole('radio',{name: "CHILD"});
    await Family_relation_group.check();
    // const patient_sex = frame.locator('[id = "001_004_form_1_0_0"]');
    // await patient_sex.click();
    
    const Patientsex = Primary_tab.locator('//*[@value="M" and @name="Patient sex"]');
    await Patientsex.check();
    await expect(Patientsex).toBeChecked();
    // const player_gender = frame.locator('[id="001_004_form_1_0_0"]');
    // await player_gender.click();
    const SSN_radio = Primary_tab.locator("//input[@value='SSN']");
    await SSN_radio.check();
    await expect(SSN_radio).toBeChecked();
}); 
});

// test('wcag_checkbox_role',async({page})=>
//  {
//  await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/');

//  const checkbox_tomato = page.getByRole('checkbox', {name: "Tomato"});
//  await checkbox_tomato.check();

//   const checkbox_lettuce = page.getByRole('checkbox', {name: "Lettuce"});
//  await checkbox_lettuce.check();

//   const checkbox_Sprouts = page.getByRole('checkbox', {name: "Sprouts"});
//  await checkbox_Sprouts.check();
// });