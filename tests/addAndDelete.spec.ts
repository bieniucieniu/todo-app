import { test, expect } from "@playwright/test";

test.describe("app can add and delete todos", () => {
  test("app can add todos", async ({ page }) => {
    await page.goto("https://todo.bieniu.pl/");

    const newTodoInput = page.locator("input[type=text]");

    // type into the locator
    await newTodoInput.type("Buy milk");

    // press enter
    await newTodoInput.press("Enter");

    // create a locator
    const todoItem = page.getByText("Buy milk");

    // expect the locator to be visible
    await expect(todoItem).toBeVisible();
  });

  test("app can delete todos", async ({ page }) => {
    await page.goto("https://todo.bieniu.pl/");

    const newTodoInput = page.locator("input[type=text]");

    // type into the locator
    await newTodoInput.type("Buy milk");

    // press enter
    await newTodoInput.press("Enter");

    // create a locator
    const todoItem = page.getByText("Buy milk");

    // create a locator
    const deleteButton = todoItem.locator("..").locator("button");

    // click the locator
    await deleteButton.click();

    // expect the locator to not be visible
    await expect(todoItem).not.toBeVisible();
  });
});
