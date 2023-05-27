//** HOME PAGE JAVASCRIPT **//

// Making each h1 and h2 tag on the index.html page bold and semibold by adding Bulma classes

let h1 = document.getElementsByTagName("h1");
for (let title of h1) {
  title.classList.add("has-text-weight-bold");
};
let h2 = document.getElementsByTagName("h2");
for (let subtitle of h2) {
  subtitle.classList.add("has-text-weight-semibold", "is-size-4");
};

// This object holds an array of images for each of the top 3 restaurants displayed on the website
let backgrounds = {
  HolyCow: ["https://halaljoints.s3.eu-west-2.amazonaws.com/v0-restaurant-thumbs/12gxqbokvieupdd.jpg", "https://images.squarespace-cdn.com/content/v1/5c5ce047d86cc973de4af5ee/1549591507188-I8MRPV2KLPL5HDA95M2U/gallery-2.jpg", "https://images.squarespace-cdn.com/content/v1/5c5ce047d86cc973de4af5ee/1549591507488-YEZ8MT41LFWEZ41OEVVC/gallery-5.jpg"],
  HalalGuys: ["https://2prl1w38er123c2qhf3upjct-wpengine.netdna-ssl.com/img/upload/hero-image-1_2.jpg", "https://s3-prod.crainsnewyork.com/s3fs-public/SMALLBIZ_161209882_AR_-1_GCWAYEIEOFSJ.jpg", "https://2prl1w38er123c2qhf3upjct-wpengine.netdna-ssl.com/img/upload/hero-image-2_2.jpg"],
  Samis: ["https://static01.nyt.com/images/2017/08/30/dining/30HUNGRY-SAMIS-KABAB-slide-GN86/30HUNGRY-SAMS-KEBOB-slide-GN86-jumbo.jpg", "https://static01.nyt.com/images/2017/08/30/dining/30HUNGRY-SAMIS-KABAB-slide-WGAG/30HUNGRY-SAMS-KEBOB-slide-WGAG-jumbo.jpg", "https://cdn.usarestaurants.info/assets/uploads/885fb8c6e455699cba1ea66803855026_-united-states-new-york-queens-county-294929-samis-kabab-househtm.jpg"],
};

let HolyCow = document.querySelector("#HolyCow");
let HalalGuys = document.querySelector("#HalalGuys");
let Samis = document.querySelector("#Samis");

let HalalIds = [HolyCow, HalalGuys, Samis];
let HalalProperties = ["HolyCow", "HalalGuys", "Samis"];

// This variable will hold a random number that will determine which url link from the object of arrays above will be displayed to the user (each refresh of the page has the possibility of displaying a different image; however, it is completely up to the randomBackground variable and the number that it randomly generates -- meaning the same images could be displayed even after a refresh simply by chance)
let randomBackground = Math.floor(Math.random() * 3);

// On each refresh, this for-loop causes the background to switch randomly between 3 images stored in the "images" object using the indices from "HalalProperties" and "randomBackground"

for (let i = 0; i < HalalIds.length; i++) {
  let URL = "url('" + backgrounds[HalalProperties[i]][randomBackground] + "')";
  HalalIds[i].style.backgroundImage = URL;
};