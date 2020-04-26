(function(runtimeScene, objects /*NewObject*/){

//var gd = require('/Users/cfrederick/Documents/GDevelop projects/Desire2/libGD.js')();
//var fs = require('fs');
//gd.initializePlatforms();

/* HTTP Request */
var web_resp = runtimeScene.getVariables().get("web_resp");
gdjs.evtTools.network.sendHttpRequest("https://jsonplaceholder.typicode.com","/todos/1","","GET","application/json", web_resp);


/* Dynamically change text already added to scene (manually) */
var newObject = runtimeScene.getObjects("NewObject")[0];
newObject.setString("Hello World!");

/* Dynamically create a TextRuntimeObject and add it to the scene */
// Create an anonymous object that resembles TextRuntimeObject
 var txtObject = {
    name: 'txtObject',
    type: 'TextObject::Text',
    behaviors: [],
    characterSize: 12,
    font: 'arial',
    bold: false,
    italic: false,
    underlined: false,
    color: {r: 0, g: 0, b: 0},
    string: runtimeScene.getVariables().get("web_resp").getAsString()
}
// create a new instance of the TextRuntimeObject and associate it with the current scene
var obj = new gdjs.TextRuntimeObject(runtimeScene,txtObject);
// add object instance to the scene
runtimeScene.addObject(obj);

runtimeScene.setBackgroundColor(100,100,240);

})(runtimeScene, objects /*NewObject*/);
