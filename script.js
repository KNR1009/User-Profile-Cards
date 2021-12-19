const fruitImgUrl = (fruit) => {
  const hasMap = {
    banana: "https://www.kroger.com/product/images/xlarge/front/0000000004011",
    pineapple:
      "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/pineapple.jpg?1516498929",
    pear: "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png",
  };

  return hasMap[fruit];
};

// imgに画像を挿入する

const insertImageInt = () => {
  const el = document.getElementById("animal-container");
  const p_banana = document.createElement("p");
  const img_banana = document.createElement("img");

  img_banana.classList.add("fruitImg");
  p_banana.classList.add("fruitDiv");

  p_banana.innerHTML = "バナナ";
  img_banana.src = fruitImgUrl("banana");

  el.append(p_banana);
  el.append(img_banana);

  console.log(el);
};

insertImageInt();
