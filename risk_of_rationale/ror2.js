import items from './items.mjs';

// Section Variables
const main = document.querySelector('main');

function getItemList(sectionId) {
    return document.querySelector(`#${sectionId} .item_list`);
}
const whiteList = getItemList("white_section");
const greenList = getItemList("green_section");
const redList = getItemList("red_section");

// Overlay Variables
const overlay = document.querySelector("#overlay");
const overlayImg = document.querySelector("#overlay_img");
const overlayTitle = document.querySelector("#overlay_title");
const overlayDesc = document.querySelector("#overlay_desc");
const closeBtn = document.querySelector(".overlay_close");

// Rendering

function itemTemplate(obj, index, tier) {
    return `
      <img
        src="${obj.item}"
        alt="${obj.title}"
        class="item_img"
        data-tier="${tier}"
        data-index="${index}"
      >
    `;
}

function renderItems(itemList, target, tier) {
    const html = itemList
        .map((item, index) => itemTemplate(item, index, tier))
        .join("");
    target.innerHTML = html;
}

// Overlay

function openOverlay(item) {
    overlayImg.src = item.full;
    overlayTitle.textContent = item.title;
    overlayDesc.textContent = item.desc;

    overlay.classList.remove("hidden");
}

function closeOverlay() {
    overlay.classList.add("hidden");
}
closeBtn.addEventListener("click", closeOverlay);

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
});

function handleItemClick(e) {
    const img = e.target.closest(".item_img");
    if (!img) return;

    const { tier, index } = img.dataset;
    const item = items[tier][Number(index)];

    openOverlay(item);
}
whiteList.addEventListener("click", handleItemClick);
greenList.addEventListener("click", handleItemClick);
redList.addEventListener("click", handleItemClick);

// Send render

renderItems(items.whiteItems, whiteList, "whiteItems");
renderItems(items.greenItems, greenList, "greenItems");
renderItems(items.redItems, redList, "redItems");