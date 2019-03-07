(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{381:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"create-thumbnail-images-with-azure-functions-and-azure-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-thumbnail-images-with-azure-functions-and-azure-storage","aria-hidden":"true"}},[t._v("#")]),t._v(" Create Thumbnail Images with Azure Functions and Azure Storage")]),t._v(" "),a("p",[t._v("In this mini-series, we're going to create an Azure Function that detects when a new image is added to Azure Storage and automatically creates a thumbnail image for us.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks157/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Tips and Tricks Part 157 - Part 1 Create Thumbnail Images with Azure Functions and Azure Storage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks158/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Tips and Tricks Part 158 - Part 2 Create Thumbnail Images with Azure Functions and Azure Storage"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"part-3-time-to-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-3-time-to-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Part 3 Time to Code")]),t._v(" "),a("p",[t._v("Make sure you read "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks157/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Part 1 Create Thumbnail Images with Azure Functions and Azure Storage"),a("OutboundLink")],1),t._v(" before proceeding with this post.")]),t._v(" "),a("p",[t._v("Inside of your Azure Function app in Visual Studio, open your "),a("strong",[t._v("local.settings.json")]),t._v(", now add the following value of "),a("strong",[t._v("StorageConnection")]),t._v(" with your "),a("strong",[t._v("ConnectionString")]),t._v(" found in the previous part:")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "IsEncrypted": false,\n    "Values": {\n        "AzureWebJobsStorage": "UseDevelopmentStorage=true",\n        "AzureWebJobsDashboard": "UseDevelopmentStorage=true",\n        "StorageConnection": "Enter Your Access Key From the Previous Part HERE"\n  }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("Be sure to include the NuGet package called "),a("strong",[t._v("ImageResizer")])]),t._v(" "),a("p",[t._v("Copy the following code into your "),a("code",[t._v("Function1.cs")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" ImageResizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Azure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebJobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Azure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebJobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" ImageResizer1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FunctionName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Function1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobTrigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"originals/{name}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageConnection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thumbs/s-{name}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileAccess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageConnection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" imageSmall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TraceWriter")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" instructions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instructions")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FitMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Carve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Scale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ScaleMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Both\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ImageBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImageJob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imageSmall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" instructions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C# Blob trigger function Processed blob\\n Name:{image} \\n Size: {image.Length} Bytes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])]),a("p",[t._v("Now run the Application by pressing F5 and switch over to the Azure Portal and open your Storage account that you just created. Click on "),a("strong",[t._v("Blobs")]),t._v(" and the "),a("strong",[t._v("originals")]),t._v(" Container and you'll now want to click "),a("strong",[t._v("Upload")]),t._v(" and select a file on your physical disk.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/imageresizer6.png")}}),t._v(" "),a("p",[t._v("Make note of the filename and check your running Azure Function.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/imageresizer7.png")}}),t._v(" "),a("p",[t._v("If you switch over to the "),a("strong",[t._v("thumbs")]),t._v(" container, you should see a new file with the format that we specified.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/imageresizer8.png")}}),t._v(" "),a("p",[t._v("If you click on the filename, you can see the Properties and even Download the file.")]),t._v(" "),a("p",[t._v("Success! We've accomplished this task in the time it would take to watch a 30-minute TV Show.")])])},[],!1,null,null,null);s.default=e.exports}}]);