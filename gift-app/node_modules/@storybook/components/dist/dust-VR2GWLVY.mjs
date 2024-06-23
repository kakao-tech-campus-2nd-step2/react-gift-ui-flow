import { __commonJS } from './chunk-GN5PWX3D.mjs';

var require_dust=__commonJS({"../../node_modules/highlight.js/lib/languages/dust.js"(exports,module){function dust(hljs){return {name:"Dust",aliases:["dst"],case_insensitive:!0,subLanguage:"xml",contains:[{className:"template-tag",begin:/\{[#\/]/,end:/\}/,illegal:/;/,contains:[{className:"name",begin:/[a-zA-Z\.-]+/,starts:{endsWithParent:!0,relevance:0,contains:[hljs.QUOTE_STRING_MODE]}}]},{className:"template-variable",begin:/\{/,end:/\}/,illegal:/;/,keywords:"if eq ne lt lte gt gte select default math sep"}]}}module.exports=dust;}});var dustVR2GWLVY = require_dust();

export { dustVR2GWLVY as default };
