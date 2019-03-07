(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{377:function(e,t,r){"use strict";r.r(t);var o=r(43),s=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h4",{attrs:{id:"deploy-jekyll-site-hosted-on-github-to-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-jekyll-site-hosted-on-github-to-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy Jekyll Site Hosted on GitHub to Azure")]),e._v(" "),r("p",[e._v("If you have already have an existing "),r("a",{attrs:{href:"https://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll"),r("OutboundLink")],1),e._v(" based site that is hosted on GitHub, you can easily deploy that site to "),r("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/app-service/web/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Services"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("But why? If "),r("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Pages"),r("OutboundLink")],1),e._v(" is free, then why pay?")]),e._v(" "),r("ul",[r("li",[e._v("You might want to push your site to a private repo (instead of public)")]),e._v(" "),r("li",[e._v('Setting up "real" SSL, compared to the '),r("a",{attrs:{href:"https://css-tricks.com/switching-site-https-shoestring-budget/",target:"_blank",rel:"noopener noreferrer"}},[e._v("workarounds"),r("OutboundLink")],1),e._v(" (see comments)")]),e._v(" "),r("li",[e._v("Taking advantage of "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-staged-publishing",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment slots"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("I'm sure there are more, but those are top of mind for me.")]),e._v(" "),r("h4",{attrs:{id:"let-s-begin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#let-s-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" Let's begin")]),e._v(" "),r("p",[e._v("I'm assuming you already have a GitHub Pages site that uses Jekyll hosted on GitHub. If that is true, then the first thing that you'll want to do is grab these three files.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mbcrump/mbcrump.github.io/blob/master/deploy.cmd",target:"_blank",rel:"noopener noreferrer"}},[e._v("deploy.cmd"),r("OutboundLink")],1),e._v(" - is a "),r("a",{attrs:{href:"https://github.com/projectkudu/kudu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kudu"),r("OutboundLink")],1),e._v(" Deployment script that handles setup and deployment of the web site and ensures Ruby is installed")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mbcrump/mbcrump.github.io/blob/master/getruby.cmd",target:"_blank",rel:"noopener noreferrer"}},[e._v("getruby.cmd"),r("OutboundLink")],1),e._v(" - is a site that ensure the latest version of Ruby is installed and ensures Jekyll has been built")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mbcrump/mbcrump.github.io/blob/master/.deployment",target:"_blank",rel:"noopener noreferrer"}},[e._v(".deployment"),r("OutboundLink")],1),e._v(" - is a configuration file  that Kudu understands that calls the "),r("code",[e._v("deploy.cmd")]),e._v(" script")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mbcrump/mbcrump.github.io/blob/master/Gemfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gemfile"),r("OutboundLink")],1),e._v(" - you probably already have this but ensure it is there and if not then just copy mine.")])]),e._v(" "),r("p",[r("em",[r("strong",[e._v("Thanks goes to "),r("a",{attrs:{href:"https://github.com/khalidabuhakmeh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Khalid Abuhakmeh"),r("OutboundLink")],1),e._v(" for writing the scripts")])])]),e._v(" "),r("p",[e._v("Once you have these three files, ensure they are in the root of your public GitHub pages site (ex. something.github.io)")]),e._v(" "),r("p",[e._v("You'll want to go inside of your "),r("strong",[e._v("Azure Portal")]),e._v(" (or use the CLI tools) and create an "),r("strong",[e._v("App Service")]),e._v(" -> "),r("strong",[e._v("Web App")]),e._v(". Once the site is deployed, then go to "),r("strong",[e._v("Deployment Options")]),e._v(" and select GitHub, your project and press OK.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azuretip16.gif")}}),e._v(" "),r("p",[e._v('You should see "Settup up Deployment Source..." in the notification windows. You\'ll probably want to wait a good 15 to 20 minutes for Azure to setup everything. You can stay on the '),r("strong",[e._v("Deployment Options")]),e._v(" blade and you should  see the status of the deployment.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/fetchanddeploy.png")}}),e._v(" "),r("p",[e._v("After a while you see a check mark that it completed successfully. Now you can navigate to the URL listed on the "),r("strong",[e._v("Overview")]),e._v(" blade.")])])},[],!1,null,null,null);t.default=s.exports}}]);