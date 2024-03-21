 //test.spec.js
 import {test, expect} from '@playwright/test';
 import { LoginPage } from '../Pages/login-page';

 test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
})