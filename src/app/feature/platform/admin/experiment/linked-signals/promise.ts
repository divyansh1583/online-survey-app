// Define the callback function type
type CallbackFunction = (result: string) => void;

function mainFunction(callback: CallbackFunction): void {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function () {
    callback("Operation complete");
    console.log("inside setout");
  }, 1000);
  console.log("Next task executing as settime will be done after it");
}

function mainFunction2(callback: CallbackFunction): void {
  console.log("Performing operation...2");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function () {
    callback("Operation complete2");
    console.log("inside setout2");
  }, 1000);
  console.log("Next task executing as settime will be done after it 2");
}

// Define the callback function
const callbackFunction: CallbackFunction = (result: string) => {
  console.log("Result: " + result);
};

mainFunction(callbackFunction);
mainFunction2(callbackFunction);