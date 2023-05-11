// @ts-check
const { test, expect } = require('@playwright/test');

export class Home {
    constructor(page){
        this.page = page;
    }
}