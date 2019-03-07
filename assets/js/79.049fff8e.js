(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{388:function(t,e,o){"use strict";o.r(e);var a=o(43),s=Object(a.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h4",{attrs:{id:"migrating-data-from-cosmos-db-to-local-json-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-data-from-cosmos-db-to-local-json-files","aria-hidden":"true"}},[t._v("#")]),t._v(" Migrating Data from Cosmos DB to Local JSON files")]),t._v(" "),o("h4",{attrs:{id:"using-the-data-migration-tool-with-cosmos-db"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-data-migration-tool-with-cosmos-db","aria-hidden":"true"}},[t._v("#")]),t._v(" Using the Data Migration Tool with Cosmos DB")]),t._v(" "),o("p",[t._v("One tasks that seems to come up over and over is migrating data from one database/format into another. I recently used Cosmos DB as my database to store every tweet that came out of Ignite. Once I had the data and wouldn't be using Cosmos DB any more for that exercise, I needed to dump the data out to a local file to preserve the data and save money. Here is how I did it.")]),t._v(" "),o("h4",{attrs:{id:"the-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-tools","aria-hidden":"true"}},[t._v("#")]),t._v(" The Tools")]),t._v(" "),o("p",[t._v("Download and install the "),o("a",{attrs:{href:"https://www.microsoft.com/en-us/download/confirmation.aspx?id=46436",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure DocumentDB Data Migration Tool"),o("OutboundLink")],1)]),t._v(" "),o("h1",{attrs:{id:"get-to-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-to-work","aria-hidden":"true"}},[t._v("#")]),t._v(" Get to Work")]),t._v(" "),o("p",[t._v("Ensure you have a Cosmos DB database and collection created that you wish to migrate out.")]),t._v(" "),o("p",[t._v("Go to "),o("strong",[t._v("Keys")]),t._v(" (inside your Cosmos DB blade in the portal) to copy the "),o("strong",[t._v("Primary Connection String")])]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migrationcosmos2.png")}}),t._v(" "),o("p",[t._v("You'll need to append the Database name to the end of the string. For example "),o("code",[t._v("Database=cosmosdb-ignite")]),t._v(" will be appended to the "),o("strong",[t._v("Key")]),t._v(" copied earlier "),o("code",[t._v("AccountEndpoint=https://mbcrump.documents.azure.com:443/;AccountKey=VxDEcJblah==;Database=cosmosdb-ignite")]),t._v(". Save this for later.")]),t._v(" "),o("p",[t._v("Open the "),o("strong",[t._v("Data Migration Tool")]),t._v(" and under "),o("strong",[t._v("Source Information")]),t._v(", select "),o("strong",[t._v("DocumentDB")]),t._v(" as shown below.")]),t._v(" "),o("p",[t._v("You'll need to add the "),o("strong",[t._v("ConnectionString")]),t._v(" (that we just created) along with the "),o("strong",[t._v("Collection")]),t._v(" and in my case it is "),o("code",[t._v("items")]),t._v(". We'll take the defaults on the rest and press "),o("strong",[t._v("Verify")]),t._v(" and if successful, then press "),o("strong",[t._v("Next")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migratingdatafromcosmosdb-1.png")}}),t._v(" "),o("p",[t._v("In my case, I'll export to a local JSON file and select "),o("strong",[t._v("Prettify JSON")]),t._v(" and press "),o("strong",[t._v("Next")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migratingdatafromcosmosdb-2.png")}}),t._v(" "),o("p",[t._v("On the next screen, you'll see a "),o("strong",[t._v("View Command")]),t._v(" to see the command that will be used to migrate your data. This is helpful to just learn the syntax.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migratingdatafromcosmosdb-3.png")}}),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migratingdatafromcosmosdb-4.png")}}),t._v(" "),o("p",[t._v("You'll finally see the Import has completed with over 100K items transferred in a little under 2 minutes.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migratingdatafromcosmosdb-5.png")}}),t._v(" "),o("p",[t._v("We now have our local JSON file and can use it however we want! Awesome!")])])},[],!1,null,null,null);e.default=s.exports}}]);