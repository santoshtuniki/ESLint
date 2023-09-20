/**
 * @fileoverview shareable custom rules plugin
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


// Run 'npm link'

/*
    To create a shareable plugin:
        --  npm i -g yo
        --  npm i -g generator-eslint
        --  yo eslint:plugin

    The Project is created based on eslint-plugin-<plugin_ID>
*/