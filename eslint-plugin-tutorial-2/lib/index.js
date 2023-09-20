/**
 * @fileoverview shareable plugin added with config
 * @author Sai
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

// Bundle configurations inside a plugin by specifying them under the 'configs' key.
module.exports.configs = {
    myConfig: {
        rules: {
            "tutorial-2/findPayments": "error",
            "tutorial-2/funcParam": "error",
            "tutorial-2/findFixme": [
                "error",
                "fixme",
                "todo"
            ]
        }
    }
}

