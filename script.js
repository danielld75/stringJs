var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = 'triceratops'.toUpperCase();
var newText = text.replace("Velociraptor", dinosaur);
console.log(newText.substr(0,text.length / 2));