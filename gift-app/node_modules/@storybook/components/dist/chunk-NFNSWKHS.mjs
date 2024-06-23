import { require_typescript } from './chunk-SN5EBR6M.mjs';
import { require_jsx } from './chunk-F5ZZUECD.mjs';
import { __commonJS } from './chunk-GN5PWX3D.mjs';

var require_tsx=__commonJS({"../../node_modules/refractor/lang/tsx.js"(exports,module){var refractorJsx=require_jsx(),refractorTypescript=require_typescript();module.exports=tsx;tsx.displayName="tsx";tsx.aliases=[];function tsx(Prism){Prism.register(refractorJsx),Prism.register(refractorTypescript),function(Prism2){var typescript=Prism2.util.clone(Prism2.languages.typescript);Prism2.languages.tsx=Prism2.languages.extend("jsx",typescript),delete Prism2.languages.tsx.parameter,delete Prism2.languages.tsx["literal-property"];var tag=Prism2.languages.tsx.tag;tag.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+tag.pattern.source+")",tag.pattern.flags),tag.lookbehind=!0;}(Prism);}}});

export { require_tsx };
