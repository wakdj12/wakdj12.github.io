import { Selector } from "testcafe";
const URL = "https://wakdj12.github.io/";
fixture("Testing").page(URL);

/*
Modal Testing
*/
const modal = Selector(".btn");
const close = Selector(".close");
const header = Selector(".modal-header");
const headerArr = [
  "CASE STUDY - WICKED PANDA",
  "CASE STUDY - ELFIN",
  "CASE STUDY - SANDWORM",
  "CASE STUDY - STUXNET",
];
test("Modal Testing", async (t) => {
  for (let i = 0; i < 4; i++) {
    await t.click(modal.nth(i));
    await t.expect(header.nth(i).innerText).contains(headerArr[i]);
    await t.click(close.nth(i));
  }
});

/*
Modal Testing END
*/

/*
Hidden Text Testing
*/

test("Hidden Text Testing", async (t) => {
  await t.maximizeWindow();
  const term = Selector(".inline-d");
  const definition = Selector(".definition");
  var i = Math.floor(Math.random() * 14);
  i = 2 * i + 1;
  var style = definition.nth(i).getStyleProperty("display");
  //Default
  await t.expect(await style).eql("none");
  //On click display
  await t.click(term.nth(i)).wait(750);
  style = definition.nth(i).getStyleProperty("display");
  await t.expect(await style).eql("inline");
  //On click remove
  await t.click(definition.nth(i)).wait(500);
  style = definition.nth(i).getStyleProperty("display");
  await t.expect(await style).eql("none");
});

/*
Hidden Text Testing END
*/
