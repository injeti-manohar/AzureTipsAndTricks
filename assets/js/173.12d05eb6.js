(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{482:function(t,a,e){"use strict";e.r(a);var r=e(43),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h4",{attrs:{id:"ensure-a-clean-rowkey-in-azure-storage-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ensure-a-clean-rowkey-in-azure-storage-table","aria-hidden":"true"}},[t._v("#")]),t._v(" Ensure a clean RowKey in Azure Storage Table")]),t._v(" "),e("p",[t._v("In case you are new to the Azure Storage Tables, we've reviewed the following items so far:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks82/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating your first Azure Storage Table"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks83/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding an item to a Azure Storage Table"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks84/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reading an item from a Azure Storage Table"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks85/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Updating an item from a Azure Storage Table"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks86/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deleting an item from a Azure Storage Table"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks86/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ensure a clean RowKey in Azure Storage Table"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"the-problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-problem","aria-hidden":"true"}},[t._v("#")]),t._v(" The problem")]),t._v(" "),e("p",[t._v("If you've ever been working with Azure Table Storage and tried to insert data and received "),e("strong",[t._v("400 Bad Request")]),t._v(", then you've probably narrowed this down to a malformed "),e("strong",[t._v("PartitionKey")]),t._v(" or "),e("strong",[t._v("RowKey")]),t._v(" after many hours. This is due to the fact that for "),e("strong",[t._v("PartitionKey")]),t._v(" and "),e("strong",[t._v("RowKey")]),t._v(", there are some disallowed characters such as:")]),t._v(" "),e("ul",[e("li",[t._v("The forward slash (/) character")]),t._v(" "),e("li",[t._v("The backslash () character")]),t._v(" "),e("li",[t._v("The number sign (#) character")]),t._v(" "),e("li",[t._v("The question mark (?) character")]),t._v(" "),e("li",[t._v("Control characters from U+0000 to U+001F, including:")]),t._v(" "),e("li",[t._v("The horizontal tab (\\t) character")]),t._v(" "),e("li",[t._v("The linefeed (\\n) character")]),t._v(" "),e("li",[t._v("The carriage return (\\r) character")]),t._v(" "),e("li",[t._v("Control characters from U+007F to U+009F")])]),t._v(" "),e("p",[e("strong",[t._v("Debugging in Visual Studio")]),t._v(" If you are debugging in Visual Studio, then you can also check the "),e("em",[t._v("StorageException.RequestInformation.ExtendedInformation")]),t._v(" to gain additional information about the error.")]),t._v(" "),e("h4",{attrs:{id:"the-solution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-solution","aria-hidden":"true"}},[t._v("#")]),t._v(" The Solution")]),t._v(" "),e("p",[t._v("There is many ways that you can handle this, but my favorite is this extension method that simply strips away those characters as shown below.")]),t._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToAzureKeyString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" str\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\'")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#'")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?'")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsControl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        sb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])])])},[],!1,null,null,null);a.default=s.exports}}]);