window.onload = function() { 
  const firstH1 = document.createElement("h1");
  firstH1.append("Webpage Recreation Practice");
  document.body.append(firstH1);
  
  const firstP = document.createElement("p");
  firstP.append("The HTML of this webpage was created with JavaScript.");
  document.body.append(firstP);

  const img = document.createElement("img");
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900"); 
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  img.setAttribute("style","width:50%");
  document.body.append(img);

  const secondP = document.createElement("p");
  secondP.append("Facts about the Multicolored Tanager");
  document.body.append(secondP);

  const liElement1 = document.createElement("li");
  const liElement2 = document.createElement("li");
  liElement1.append("It is endemic to the mountains of Colombia.");
  liElement2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  const firstUl = document.createElement("ul");
  firstUl.prepend(liElement2);
  firstUl.prepend(liElement1);
  document.body.append(firstUl);

  const firstH2 = document.createElement("h2");
  firstH2.append("Source");
  document.body.append(firstH2)

  const firstA = document.createElement("a");
  firstA.setAttribute("href","https://en.wikipedia.org/wiki/Multicoloured_tanager");
  firstA.append("Wikipedia");
  document.body.append(firstA);
};


