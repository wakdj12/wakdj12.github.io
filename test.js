import { Selector } from "testcafe";
const URL = "https://wakdj12.github.io/";
fixture("Testing").page(URL);

/*
Modal Testing
*/
const modal = Selector(".btn");
const close = Selector(".close");
const headerModal = Selector(".modal-header");
const headerArr = [
  "CASE STUDY - WICKED PANDA",
  "CASE STUDY - ELFIN",
  "CASE STUDY - SANDWORM",
  "CASE STUDY - STUXNET",
];
test("Modal Testing", async (t) => {
  for (let i = 0; i < 4; i++) {
    await t.click(modal.nth(i));
    await t.expect(headerModal.nth(i).innerText).contains(headerArr[i]);
    await t.click(close.nth(i));
  }
});

/*
Modal Testing END
*/

/*
Hidden Text Testing - Not 100% accurate
*/
const term = Selector(".inline-d");
const definition = Selector(".definition");
const randomInnyD = Math.floor(Math.random() * 14);
test("Hidden Text Testing", async (t) => {
  await t.maximizeWindow();

  let i = 2 * randomInnyD + 1;
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

/*
light mode dark mode start
Doesnt' offer full coverage, but provides a general test of main elements
*/

//
const moonSunIcon = Selector(".switch");
const wrapper = Selector("#wrapper");
const title = Selector("h1");
const textP = Selector("p");
const links = Selector("a");
const codes = Selector("code");
const cards = Selector(".cards");

const randomLink = Math.floor(Math.random() * 51);
const randomCode = Math.floor(Math.random() * 3);
const randomCard = Math.floor(Math.random() * 3);
const sidesArr = test.only("Night-mode day-mode", async (t) => {
  await t.maximizeWindow();
  //Darkmode testing
  let styleText = textP.getStyleProperty("color");
  await t.expect(await styleText).eql("rgb(255, 255, 240)");
  //Title test
  let styleTitle = title.getStyleProperty("color");
  await t.expect(await styleTitle).eql("rgb(250, 128, 114)");
  // Links test
  let styleLink = links.nth(randomLink).getStyleProperty("color");
  await t.expect(await styleLink).eql("rgb(193, 225, 193)");
  //Inny d test
  let styleInnyD = term.nth(randomInnyD).getStyleProperty("color");
  await t.expect(await styleInnyD).eql("rgb(250, 200, 152)");
  //background color test
  let styleBackground = wrapper.getStyleProperty("background-color");
  await t.expect(await styleBackground).eql("rgb(18, 18, 18)");
  // "code" test
  let styleCode = codes.nth(randomCode).getStyleProperty("color");
  await t.expect(await styleCode).eql("rgb(255, 0, 0)");
  // Modal header
  let styleModal = headerModal
    .nth(randomCard)
    .getStyleProperty("background-color");
  await t.expect(await styleModal).eql("rgb(255, 105, 97)");
  // Cards test
  let styleCards = cards.nth(randomCard).getStyleProperty("box-shadow");
  await t.expect(await styleCards).contains("rgba(193, 225, 193, 0.3)");

  //Changing from dark mode to light mode
  await t.click(moonSunIcon);
  //Lightmode testing
  await t.wait(500);
  // Text test
  styleText = textP.getStyleProperty("color");
  await t.expect(await styleText).eql("rgb(18, 18, 18)");
  //Title test
  styleTitle = title.getStyleProperty("color");
  await t.expect(await styleTitle).eql("rgb(187, 96, 92)");
  //Links test
  styleLink = links.nth(randomLink).getStyleProperty("color");
  await t.expect(await styleLink).eql("rgb(115, 79, 150)");

  //Inny d test
  styleInnyD = term.nth(randomInnyD).getStyleProperty("color");
  await t.expect(await styleInnyD).eql("rgb(5, 55, 103)");
  //background color test
  styleBackground = wrapper.getStyleProperty("background-color");
  await t.expect(await styleBackground).eql("rgb(255, 245, 215)");
  // "code" test
  styleCode = codes.nth(randomCode).getStyleProperty("color");
  await t.expect(await styleCode).eql("rgb(0, 0, 255)");
  // Modal header
  styleModal = headerModal.nth(randomCard).getStyleProperty("background-color");
  await t.expect(await styleModal).eql("rgb(187, 96, 92)");

  styleCards = cards.nth(randomCard).getStyleProperty("box-shadow");
  await t.expect(await styleCards).contains("rgba(115, 79, 150, 0.3)");

  //rgb(5, 55, 103
});
/*
light mode dark mode start
*/
