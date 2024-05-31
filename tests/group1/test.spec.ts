import { test, expect } from '@playwright/test';

test.describe('リクエストを実行する', () => {
  test('1回目', async ({ page }) => {
    await test.step("ステップ1", async () => {
    });
    await test.step("ステップ2", async () => {
    });
    await test.step("ステップ3", async () => {
    });
  });

  test('2回目', async ({ page }) => {
    await test.step("Given", async () => {
      await test.step("Given 1", async () => {
        await test.step("Given 1-1", async () => {
        });    
        await test.step("Given 1-2", async () => {
        });    
      });  
    });
    await test.step("When", async () => {
    });
    await test.step("Then", async () => {
    });
  });
});

test.describe('two tests', () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});

test('test login page', {
  tag: '@fast',
}, async ({ page }) => {
  // ...
});

test('test full report @slow', async ({ page }) => {
  // ...
});

test.describe('group', {
  tag: '@report',
}, () => {
  test('test report header', async ({ page }) => {
    // ...    
  });

  test('test full report', {
    tag: ['@slow', '@vrt'],
  }, async ({ page }) => {
    // ...
  });

  test('test report footer', async ({ page }) => {
    // ...)
  });
});

test('test login page1', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, async ({ page }) => {
  // ...
});