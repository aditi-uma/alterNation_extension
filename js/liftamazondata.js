console.log("MENU CLICK");
var dataTable = document.getElementsByClassName("a-normal a-spacing-micro")[0];

var rCells = dataTable.rows.item(0).cells;
var rCells2 = dataTable.rows.item(1).cells;
var prodName=document.body.querySelector('#productTitle').innerText;
var brandName=rCells[1].textContent;

var prodName1 = prodName.trim();
var prodNameCleaned = prodName1.replace(/\s/g, '%20');
var brandName1 = brandName.trim();
var brandNameCleaned = brandName1.replace(/\s/g, '%20');
var dataPackage = 'https://alter-nation.herokuapp.com/products/'+prodNameCleaned+'/'+brandNameCleaned;

var ab;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  ab = JSON.parse(this.responseText);
    if(ab.catPresent==false)
    {
      alert("Product not yet supported.");
    }
    else if (ab.brandPresent==false)
    {
      alert("Dont know about yours, here's green suggestions:\n " + ab.alternatives.alt1.name +'\n'+ ab.alternatives.alt1.ownLink);
    }
    else if(ab.isGreen==true)
    {
      alert("Good choice");
    }
    else{
      alert("We recommend buying here instead, as comp is known unfriendly:\n "+ ab.alternatives.alt1.name+'\n'+ ab.alternatives.alt1.ownLink);
    }
  }
};
xhttp.open("GET", dataPackage);
xhttp.send();