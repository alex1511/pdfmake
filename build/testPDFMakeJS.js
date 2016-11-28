function onLoad() {
	var buttonToPrint = document.getElementById('b1');
	buttonToPrint.addEventListener("click", printFile, false);
}


function printFile() {
  var docDefinition = {content: "Test PDF Make in PDF File" };
  //var docDefintion2 = {content: [{text: "test", fontSize: 20}]};
  var docDefinition3 = {content: "Test PDF Make in PDF File - 3" };
  pdfMake.createPdf(docDefinition).download();
  pdfMake.createPdf(docDefinition3).download();
  console.log("testButton");
}

window.addEventListener("load", onLoad, false);
