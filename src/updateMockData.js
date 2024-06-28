import { addNewData } from "./app/api/utils.js";

setInterval(() => {
  addNewData();
}, 120000); // Update every 2 minutes

// Run once to initialize
addNewData();
