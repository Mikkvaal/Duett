import { test, Page, expect } from '@playwright/test';

export class Home {
    page: Page;
    
    constructor(page){
        this.page = page;
    }
}