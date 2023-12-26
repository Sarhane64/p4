const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const voitureControllers = require("./controllers/voitureContollers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/voitures", voitureControllers.browse);

/* ************************************************************************* */

module.exports = router;
