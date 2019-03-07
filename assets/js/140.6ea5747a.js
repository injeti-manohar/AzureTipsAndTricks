(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{447:function(e,r,t){"use strict";t.r(r);var o=t(43),a=Object(o.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"use-net-core-webapi-and-docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-net-core-webapi-and-docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Use .NET Core WebAPI and Docker Compose")]),e._v(" "),t("p",[e._v("How hard do you think it is to:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks54/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create and Publish a .NET Core WebAPI project"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks55/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add it to a Docker Container using Docker Compose and push it to a Docker Cloud"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks56/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Today - Use it in Azure with Web App for Containers"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("In this mini-series, we'll build on each part starting with creating and publishing a .NET Core WebAPI project. Yesterday, we used Docker Compose to create an image and push it to Docker Cloud and we'll wrap up today by deploying it to Azure using "),t("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/app-service/containers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web App for Containers"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"deploy-a-net-core-webapi-project-to-web-app-for-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-net-core-webapi-project-to-web-app-for-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy a .NET Core WebAPI Project to Web App for Containers")]),e._v(" "),t("p",[e._v("Remember "),t("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks55/",target:"_blank",rel:"noopener noreferrer"}},[e._v("yesterday"),t("OutboundLink")],1),e._v(", how we pushed our Docker Image to Docker Cloud? As a reminder, we created a repository in Docker Cloud and headed back to our command prompt (or terminal) and ran the following commands:")]),e._v(" "),t("p",[t("code",[e._v("docker login")]),e._v(" to authenticate")]),e._v(" "),t("p",[t("code",[e._v("docker push mbcrump/mbcwebapi:latest")]),e._v(" to push your image to Docker Cloud.")]),e._v(" "),t("p",[e._v("Now that we have a Docker Cloud repository, we can push it to Azure using "),t("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/app-service/containers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web App for Containers"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Go ahead and log into the Azure Portal and search for "),t("code",[e._v("Web App for Containers")]),e._v(". You should see the following:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/webappcont1.png")}}),e._v(" "),t("p",[e._v("Press the "),t("code",[e._v("Create")]),e._v(" button and you should see the following:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/webappcont2.png")}}),e._v(" "),t("p",[e._v("You should be familiar with (name, resource group, etc.) with the exception being the "),t("code",[e._v("Configure Container")]),e._v(" section.")]),e._v(" "),t("p",[e._v("Here we will use Docker Hub (think Docker Cloud), our repo is public, and the name of the image. Which follows the format "),t("code",[e._v("docker username/our app name:tag")]),e._v(". For a refresher, visit "),t("router-link",{attrs:{to:"./tip55/"}},[e._v("Step 2 in yesterday's post")]),e._v(".")],1),e._v(" "),t("p",[e._v("After our Web App for Container is deployed, you can simply go to your new url and append "),t("code",[e._v("/api/values")]),e._v(" to see your new site.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/webappcont3.png")}})])},[],!1,null,null,null);r.default=a.exports}}]);