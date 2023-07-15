/**
 * This will be loaded before starting the simulator.
 * If you wish to add custom javascript, 
 * ** make sure to add this line to pxt.json**
 * 
 *      "disableTargetTemplateFiles": true
 * 
 * otherwise MakeCode will override your changes.
 * 
 * To register a constrol simmessages, use addSimMessageHandler
 */
// Create a new button element
console.log("working!!!")
var button = document.createElement("button");
button.innerHTML = "Click Me";

// Get the first element with the class name "ui items simPanel"
var elements = document.getElementById("footer");

  targetElement.appendChild(button);
  console.log("No elements found with the specified class name.");
