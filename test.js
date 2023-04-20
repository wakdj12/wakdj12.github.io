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
const term = Selector(".inline-d");

test.only("Hidden Text Testing", async (t) => {
  for (let i = 0; i <= 29; i++) {
    const definition = Selector(".definition");
    var style = definition.nth(i).getStyleProperty("display");
    await t.expect(await style).eql("none");
    await t.click(term.nth(i)).wait(500);
    style = definition.nth(i).getStyleProperty("display");
    await t.expect(await style).eql("inline");
    await t.click(term.nth(i));
    style = definition.nth(i).getStyleProperty("display");
    await t.expect(await style).eql("none");
  }
});

/*
Hidden Text Testing END
*/
