(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{448:function(e,a,s){"use strict";s.r(a);var t=s(43),n=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h4",{attrs:{id:"continuous-deployment-with-docker-and-web-app-for-containers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#continuous-deployment-with-docker-and-web-app-for-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Continuous Deployment with Docker and Web App for Containers")]),e._v(" "),s("p",[e._v("To recap, last week I used "),s("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks55/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Compose"),s("OutboundLink")],1),e._v(" to create an image using our existing "),s("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks54/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASP.NET WebAPI project"),s("OutboundLink")],1),e._v(" and push it to Docker Cloud. I also covered deploying it to Azure using "),s("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks56/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web App for Containers"),s("OutboundLink")],1),e._v(". Yesterday, I explained the difference between "),s("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks57/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Registry and Docker Repository"),s("OutboundLink")],1),e._v(" and today, I'll cover setting up Continuous Deployment with Docker and Web App for Containers.")]),e._v(" "),s("p",[e._v("Navigate back to the Web App for Container service "),s("router-link",{attrs:{to:"./tip56/"}},[e._v("we recently created")]),e._v(". Look under "),s("strong",[e._v("Settings")]),e._v(" and click on "),s("strong",[e._v("Docker Container")]),e._v(". You'll see "),s("strong",[e._v("Continuous Deployment")]),e._v(" and will need to switch it on and then "),s("strong",[e._v("Show the URL")]),e._v(" and copy and paste it into somewhere else. Go ahead and press "),s("strong",[e._v("save")]),e._v(".")],1),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/dockercd1.png")}}),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(" If you want to verify CD is setup correctly, go to your "),s("strong",[e._v("Application Settings")]),e._v(" and under "),s("strong",[e._v("App Settings")]),e._v(", you'll see "),s("code",[e._v("DOCKER_ENABLE_CI")]),e._v(" has been set to true.")]),e._v(" "),s("p",[e._v("Navigate back over to "),s("a",{attrs:{href:"https://hub.docker.com/r/mbcrump/mbcwebapi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),s("OutboundLink")],1),e._v(" and navigate to your repository. You'll see "),s("strong",[e._v("Web Hooks")]),e._v(" and want to add the URL that you copied earlier.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/dockercd2.png")}}),e._v(" "),s("p",[e._v("Now head back to the terminal or command prompt and make a change to your application. I'm going to go into my "),s("code",[e._v("ValuesController.cs")]),e._v(" application and modify what returns from the "),s("code",[e._v("api\\values")]),e._v(" to "),s("code",[e._v('"myupdatedvalue1", "myupdatedvalue2"')]),e._v(" instead of "),s("code",[e._v('"value1", "value2"')])]),e._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// GET api/values")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HttpGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" IEnumerable"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myupdatedvalue1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myupdatedvalue2"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("I'm going to run the "),s("code",[e._v("publish -c Release -o ./obj/Docker/publish")]),e._v(" command to create the new .dlls for the site.")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ cd mbcwebapi\nMichaels-MacBook-Pro:mbcwebapi mbcrump$ dotnet publish -c Release -o ./obj/Docker/publish\nMicrosoft (R) Build Engine version 15.3.409.57025 for .NET Core\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  mbcwebapi -> /Users/mbcrump/mbcwebapi/mbcwebapi/bin/Release/netcoreapp2.0/mbcwebapi.dll\n  mbcwebapi -> /Users/mbcrump/mbcwebapi/mbcwebapi/obj/Docker/publish/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("Now I'll run "),s("code",[e._v("docker-compose build")]),e._v(" to rebuild my "),s("strong",[e._v("latest")]),e._v(" image.")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ docker-compose build\nBuilding mbcwebapi\nStep 1/6 : FROM microsoft/aspnetcore:2.0\n ---\x3e 757f574feed9\nStep 2/6 : ARG source\n ---\x3e Using cache\n ---\x3e 96deb3aec068\nStep 3/6 : WORKDIR /app\n ---\x3e Using cache\n ---\x3e c0fecb757aa4\nStep 4/6 : EXPOSE 80\n ---\x3e Using cache\n ---\x3e e4f034c54397\nStep 5/6 : COPY ${source:-obj/Docker/publish} .\n ---\x3e 99956ad310ad\nStep 6/6 : ENTRYPOINT dotnet mbcwebapi.dll\n ---\x3e Running in d852ec609fa3\n ---\x3e 84120db3271e\nRemoving intermediate container d852ec609fa3\nSuccessfully built 84120db3271e\nSuccessfully tagged mbcrump/mbcwebapi:latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br")])]),s("p",[e._v("I'll now push this image to Docker Cloud with "),s("code",[e._v("docker push mbcrump/mbcwebapi:latest")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ docker push mbcrump/mbcwebapi:latest\nThe push refers to a repository [docker.io/mbcrump/mbcwebapi]\nbb538a44e79e: Pushed \n2810d33d0bd6: Layer already exists \neff6ab78003d: Layer already exists \n8b2ae5b337fe: Layer already exists \n587f57f69c02: Layer already exists \n5c4bb5b2f630: Layer already exists \na75caa09eb1f: Layer already exists \nlatest: digest: sha256:d441ddbc8854b63529e7e99e5731a7497dd5c14665a9bfc5cb006827018cb518 size: 1790\nMichaels-MacBook-Pro:mbcwebapi mbcrump$ \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("If I switch back over to Docker Hub, then I show "),s("strong",[e._v("History")]),e._v(" and see it has automatically deployed my latest build.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/dockercd3.png")}}),e._v(" "),s("p",[e._v("If I go back to my site and enter my url and append "),s("code",[e._v("/api/values")]),e._v(", then I'll see the updated values. Success!")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/dockercd4.png")}})])},[],!1,null,null,null);a.default=n.exports}}]);