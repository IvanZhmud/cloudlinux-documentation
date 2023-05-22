import{_ as r,y as t,q as d,E as c,G as n,n as a,A as i,p as e,a8 as s}from"./framework-e729373a.js";const u={},p=n("h1",{id:"for-cloudlinux-partners",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#for-cloudlinux-partners","aria-hidden":"true"},"#"),e(" For CloudLinux partners")],-1),m=s('<h3 id="license-portal-cln" tabindex="-1"><a class="header-anchor" href="#license-portal-cln" aria-hidden="true">#</a> License portal (CLN)</h3><p>You can find the complete documentation for the CloudLinux Network (CLN) <a href="https://docs.cln.cloudlinux.com/" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="cloudlinux-whmcs-plugin" tabindex="-1"><a class="header-anchor" href="#cloudlinux-whmcs-plugin" aria-hidden="true">#</a> CloudLinux WHMCS plugin</h3>',3),h=n("br",null,null,-1),g=n("br",null,null,-1),f=n("br",null,null,-1),_=n("br",null,null,-1),b=n("br",null,null,-1),w=n("br",null,null,-1),x=n("br",null,null,-1),v=n("br",null,null,-1),C=n("br",null,null,-1),y=n("br",null,null,-1),L=n("br",null,null,-1),k=n("br",null,null,-1),A=n("br",null,null,-1),P=n("br",null,null,-1),S=n("br",null,null,-1),I=s('<h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h3><p>CloudLinux Licenses for WHMCS allows you to automatically provision CloudLinux, Imunify360, and KernelCare licenses along with selected products. You can provision them for free or as a paid add-on to your product. Owing to CloudLinux Licenses add-on, all module commands on your main product are automatically reproduced on the license product.</p><p><strong>Admin area functionality</strong></p><ul><li>Create license</li><li>Terminate license</li><li>Suspend/unsuspend license</li><li>Change license IP address</li><li>View license details</li></ul><p><strong>Client area functionality</strong></p><ul><li>View License Details</li><li>Change License IP Address</li></ul><p><strong>Add-on functionality</strong></p><ul><li>Manage Relations Between Add-on And License Product</li><li>Manage Relations Between Server And License Product</li><li>Automatically Add License Product To Order When Relation Is Triggered</li><li>View Existing Licenses</li><li>Dependencies Between Module Actions - Every Action: Create, Terminate, Suspend Or Unsuspend Called On The Server Product Will Result With The Same Action Performed On The Licensed Products</li><li>Flexible Filtering Of Existing Licenses</li></ul><p><strong>Additionally</strong></p><ul><li>Multi-Language Support – Only Provisioning Module</li><li>Supports CloudLinux, KernelCare, and Imunify360 Licenses</li><li>Supports WHMCS V6 and Later</li></ul><h3 id="installation-configuration" tabindex="-1"><a class="header-anchor" href="#installation-configuration" aria-hidden="true">#</a> Installation &amp; configuration</h3><p>In this section we will show you how to set up our products.</p>',12),M=s(`<h4 id="installation-and-update" tabindex="-1"><a class="header-anchor" href="#installation-and-update" aria-hidden="true">#</a> Installation and update</h4><p>Download CloudLinux Licenses For WHMCS:<br><strong>Production</strong> : <a href="https://repo.cloudlinux.com/plugins/whmcs-cl-plugin-latest.zip" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/plugins/whmcs-cl-plugin-latest.zip</a><br><strong>Beta</strong> : <a href="https://repo.cloudlinux.com/plugins/whmcs-cl-plugin-beta.zip" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/plugins/whmcs-cl-plugin-beta.zip</a><br> Upload archive to your WHMCS root folder and extract it. Files should automatically jump into their places.<br> Run the following script:</p><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php &lt;whmcs_root&gt;/clDeploy.php --migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h4 id="configuration-of-product" tabindex="-1"><a class="header-anchor" href="#configuration-of-product" aria-hidden="true">#</a> Configuration of product</h4><ol><li>Log into your WHMCS admin area and go to the <span class="notranslate"><em>Setup → Products/Services → Products/Services</em></span>. Click <span class="notranslate"><em>Create a New Group</em></span> .</li><li>Fill <span class="notranslate"><em>Product Group Name</em></span> (product group will be visible under that name in your WHMCS system) and click <span class="notranslate"><em>Save Changes</em></span> .</li><li>Click <span class="notranslate"><em>Create a New Product</em></span> . Choose <span class="notranslate"><em>Other</em></span> from <span class="notranslate"><em>Product Type</em></span> drop-down menu and previously created product group from <span class="notranslate"><em>Product Group</em></span> drop-down menu.</li><li>Fill <span class="notranslate"><em>Product Name</em></span> and click <span class="notranslate"><em>Continue</em></span> .</li><li>Set up this product as hidden by ticking <span class="notranslate"><em>Hidden</em></span> checkbox at <span class="notranslate"><em>Details</em></span> tab. Do not set up pricing for this product. Pricing will be done in another way.</li><li>Go to the <span class="notranslate"><em>Module Settings</em></span> tab and select <span class="notranslate"><strong><em>CloudLinux Licenses</em></strong></span> from <span class="notranslate"><em>Module Name</em></span> drop-down.</li><li>Fill <span class="notranslate"><em>Username</em></span> and <span class="notranslate"><em>Password</em></span> with your CloudLinux API access details and select <strong><em>CloudLinux</em></strong> from <span class="notranslate"><em>License Type</em></span> drop-down.</li><li>Click <span class="notranslate"><em>Save Changes</em></span> to confirm.</li></ol><div class="tip custom-block"><p class="custom-block-title">Note</p><p>You can use the CloudLinux license module as an individual product. By default, for IP license a client’s IP address defined while ordering is used. You can change license IP in service settings (as an administrator or a user). If you want to use a custom field to get the correct IP during the order, you should create a custom field with any field name where IP phrase is used.</p></div><p>Example:</p><p>/images/WHMCSCustomField.png)</p><h4 id="configuration-of-add-on" tabindex="-1"><a class="header-anchor" href="#configuration-of-add-on" aria-hidden="true">#</a> Configuration of add-on</h4><ol><li>Go to <span class="notranslate"><em>Setup → Add-on Modules</em></span> , find <span class="notranslate"><em>CloudLinux Licenses Add-on</em></span> and click <span class="notranslate"><em>Activate</em></span> next to it.</li><li>The next step is permitting access to this module. Click <span class="notranslate"><em>Configure</em></span> , select admin role and confirm by clicking <span class="notranslate"><em>Save Changes</em></span> .</li></ol><p>/images/provisioningmoduleconfiguration_zoom90.png)<br><em>Fig 1: CloudLinux License For WHMCS provisioning module configuration.</em></p><p>/images/fig2cloudlinuxlicenseforwhmcsaddonmodulemainpage_zoom70.png)<br><em>Fig 2: CloudLinux License For WHMCS add-on module main page.</em></p><h3 id="management" tabindex="-1"><a class="header-anchor" href="#management" aria-hidden="true">#</a> Management</h3><p>In this section you can find two ways of linking license product with your server product as well as other possibilities of the module.</p>`,14),F=s('<h4 id="link-via-add-on-optional-license" tabindex="-1"><a class="header-anchor" href="#link-via-add-on-optional-license" aria-hidden="true">#</a> Link via add-on. Optional license</h4><p>In order to allow your client to decide whether he wants to order server with or without a license, we will use Product Add-on. In this way, when the client orders an add-on, the relation will be triggered and the license product will be ordered along with module.</p><p>The following steps must be performed to prepare such connection:</p><ol><li>Go to <span class="notranslate"><em>Setup → Products/Services → Products Add-ons</em></span> and click <span class="notranslate"><em>Add New Add-on</em></span> .</li><li>Fill add-on name, set up billing cycle and price.</li><li>Then tick <span class="notranslate"><em>Show</em></span> on <span class="notranslate"><em>Order</em></span> checkbox, assign add-on to the product and click <span class="notranslate"><em>Save Changes</em></span> .</li></ol><table><thead><tr><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">/images/configurationofproductaddon0_zoom70.png)</td></tr><tr><td style="text-align:center;">/images/configurationofproductaddon1_zoom70.png)</td></tr><tr><td style="text-align:center;">/images/configurationofproductaddon2_zoom70.png)</td></tr><tr><td style="text-align:center;">Fig 3: Configuration of product add-on, which will trigger license product adding.</td></tr></tbody></table><ol start="4"><li>Go to <span class="notranslate"><em>Add-ons → CloudLinux Licenses Add-on → Add-on Relations</em></span> and click <span class="notranslate"><em>Add Relation</em></span> .</li><li>Select previously created product add-on and license product as shown below  and click <span class="notranslate"><em>Add Relation</em></span> .</li></ol><p>/images/fig4creatingrelationbetweenproductaddonandprovisioningmodule_zoom70.png)<br><em>Fig 4: Creating relations between product add-on and provisioning module.</em></p><h4 id="link-products-directly" tabindex="-1"><a class="header-anchor" href="#link-products-directly" aria-hidden="true">#</a> Link products directly</h4><p>If you want to offer server along with the license, perform the following steps.</p><p><strong><em>Note.</em></strong> <em>Please do not set up pricing for license provisioning product. In exchange, you can increase a price for server provisioning product.</em></p>',10),O=s('<li>Go to <span class="notranslate"><em>Add-ons → CloudLinux Licenses Add-on → Products Relations</em></span> and click <span class="notranslate"><em>Add Relation</em></span> .</li><li>Select server provisioning product from the <span class="notranslate"><em>Main Product</em></span> drop-down list and license provisioning product from <span class="notranslate"><em>Linked Product With License</em></span> and click <span class="notranslate"><em>Add Relation</em></span> .</li>',2),W=s('<p>/images/fig5creatingrelationdirectlybetweenserverandlicenseprovisioningmodules_zoom70.png)<br><em>Fig 5: Creating relations directly between server and license provisioning modules</em> .</p><h4 id="link-via-configurable-options" tabindex="-1"><a class="header-anchor" href="#link-via-configurable-options" aria-hidden="true">#</a> Link via configurable options</h4><p>In order to allow your client to decide whether he wants to order server with or without license we can use <span class="notranslate"><em>Configurable Options</em> ( <a href="https://docs.whmcs.com/Addons_and_Configurable_Options" target="_blank" rel="noopener noreferrer">https://docs.whmcs.com/Addons_and_Configurable_Options)</a>).</span></p><p>Below we will show you what steps to proceed to prepare such connection:</p><ul><li>Configure <em>CloudLinuxLicenses</em> product as described here</li><li>Go to <em>Setup → Products/Services → Configurable Options</em> and click <em>Create a New Group</em> .</li><li>Fill group name and add <em>New Configurable Option</em> , set up billing cycle, price and option type. Then save changes.</li><li>Go to <em>Add-ons → CloudLinux Licenses Add-on → Configurable Options Relations</em> and click <em>Add Relation</em>.</li><li>Choose appropriate configurable option and license product which it is assigned to and click <em>Add Relation</em>.</li></ul><p><strong><em>Note. The plugin doesn’t support “quantity” type of Configurable Options.</em></strong></p><p>/images/fig6creatingrelationsdirectlybetweenserverandlicenseprovisioningmodules_zoom70.png)<br><em>Fig 6: Creating relations directly between server and license provisioning modules.</em></p><h4 id="link-add-ons-directly" tabindex="-1"><a class="header-anchor" href="#link-add-ons-directly" aria-hidden="true">#</a> Link add-ons directly</h4><p><em>[for WHMCS 7.2.x and later]</em></p><p>WHMCS 7.2 introduces the ability to associate <span class="notranslate"> Product Add-ons </span> with <span class="notranslate"> Provisioning Modules </span> .</p><p>In order to allow your client to decide whether he wants to order server with or without license we will use product add-on. Below we will show you what steps to proceed to prepare such connection.</p><ol><li>Go to <span class="notranslate"><em>Setup → Products/Services → Products Add-ons</em></span> and click <span class="notranslate"><em>Add New Addon</em></span> .</li><li>Fill add-on name, set up billing cycle and price. Then tick <span class="notranslate"><em>Show</em></span> on <span class="notranslate"><em>Order</em></span> checkbox, assign an add-on to the product.</li><li>Go to <span class="notranslate"><em>Module Settings</em></span> tab and select <span class="notranslate"><em>CloudLinuxLicenses</em></span> from <span class="notranslate"><em>Module Name</em></span> drop-down.</li><li>Fill <span class="notranslate"><em>Username</em></span> and <span class="notranslate"><em>Password</em></span> with your CloudLinux API access (API secret key) details and select CloudLinux from <span class="notranslate"><em>LicenseType</em></span> drop-down.</li><li>Click <span class="notranslate"><em>Save Changes</em></span> to confirm. /images/configurationofproductaddon_zoom70.png)<br><em>Fig 7: Configuration of product add-on with</em> <span class="notranslate"><em>Provisioning Modules</em>. </span></li></ol><h4 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> Order</h4><p>The only difference between two ways of setting up relation is the ability to order server without CloudLinux license.</p><p>/images/orderingserverwithlicenseaddon_zoom70.png)<br><em>Fig 8: Ordering server with license add-on.</em></p><p>/images/orderingserverlinkeddirectly_zoom70.png)<br><em>Fig 9: Ordering server linked directly with license product.</em></p><h4 id="admin-area" tabindex="-1"><a class="header-anchor" href="#admin-area" aria-hidden="true">#</a> Admin area</h4><p>From the admin area it is possible to command such action as create, terminate, suspend/unsuspend and change IP address. Nonetheless, these actions can be ordered only on the server provisioning module and will be automatically reproduced for the license provisioning product.</p><p>Only change IP address feature has to be ordered manually.</p><p>You can also view the details of created license.</p><p>/images/cloudlinuxlicensesforwhmcsadminarea_zoom70.png)<br><em>Fig 10: CloudLinux Licenses For WHMCS Admin Area.</em></p><h4 id="client-area" tabindex="-1"><a class="header-anchor" href="#client-area" aria-hidden="true">#</a> Client area</h4><p>The clients are also able to view their servers license details. And as well as you, they are able to change IP address of their licenses.</p><p>/images/cloudlinuxlicensesforwhmcsclientarea_zoom70.png)<br><em>Fig 11: CloudLinux Licenses For WHMCS Client Area.</em></p><p>To change IP address click <span class="notranslate"><em>Change</em></span> as shown on the screen above. Then specify IP address and click <span class="notranslate"><em>Save</em></span>.</p><p>/images/changinglicenseipaddress_zoom80.png)<br><em>Fig 12: Changing License IP Address</em>.</p><h4 id="licenses-list" tabindex="-1"><a class="header-anchor" href="#licenses-list" aria-hidden="true">#</a> Licenses list</h4><p>You can view the list of all licenses owned by your client at our addon → <span class="notranslate"><em>Licenses List</em></span>.<br> You can filter the list of licenses by client name, server provisioning products, license provisioning products and license IP address.</p><p>/images/fig13licenseslist_zoom70.png)<br><em>Fig 13: Licenses list.</em></p><h4 id="add-on-licenses-list" tabindex="-1"><a class="header-anchor" href="#add-on-licenses-list" aria-hidden="true">#</a> Add-on licenses list</h4><p><em>[for WHMCS 7.2.x and later]</em></p><p>You can view a list of all product add-on with <span class="notranslate"><em>Provisioning Modules</em></span> licenses owned by your client at our add-on → <span class="notranslate"><em>Licenses List</em></span> .</p><p>/images/fig14addonlicenseslist_zoom70.png)<br><em>Fig 14: Add-on Licenses List.</em></p><h3 id="common-problems" tabindex="-1"><a class="header-anchor" href="#common-problems" aria-hidden="true">#</a> Common problems</h3><p>After activating the server provisioning product, license provisioning product bounded to it is still pending.<br><strong>Reason</strong> : License IP address may be already taken.<br><strong>Solution</strong> : Change server IP address.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Currently, only key-based licenses are available for Imunify360. Support of IP-based licenses will be added soon.</p></div>',36);function N(H,T){const o=t("RouterLink"),l=t("Disqus");return d(),c("div",null,[p,n("ul",null,[n("li",null,[a(o,{to:"/for_cloudlinux_partners/#license-portal-cln"},{default:i(()=>[e("License portal (CLN)")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#cloudlinux-whmcs-plugin"},{default:i(()=>[e("CloudLinux WHMCS plugin")]),_:1})])]),m,n("p",null,[a(o,{to:"/for_cloudlinux_partners/#overview"},{default:i(()=>[e("Overview")]),_:1}),h,a(o,{to:"/for_cloudlinux_partners/#installation-configuration"},{default:i(()=>[e("Installation & configuration")]),_:1}),g,a(o,{to:"/for_cloudlinux_partners/#installation-and-update"},{default:i(()=>[e("Installation and update")]),_:1}),f,a(o,{to:"/for_cloudlinux_partners/#configuration-of-product"},{default:i(()=>[e("Configuration of product")]),_:1}),_,a(o,{to:"/for_cloudlinux_partners/#configuration-of-add-on"},{default:i(()=>[e("Configuration of add-on")]),_:1}),b,a(o,{to:"/for_cloudlinux_partners/#management"},{default:i(()=>[e("Management")]),_:1}),w,a(o,{to:"/for_cloudlinux_partners/#link-via-add-on-optional-license"},{default:i(()=>[e("Link via add-on. Optional license")]),_:1}),x,a(o,{to:"/for_cloudlinux_partners/#link-products-directly"},{default:i(()=>[e("Link products directly")]),_:1}),v,a(o,{to:"/for_cloudlinux_partners/#link-via-configurable-options"},{default:i(()=>[e("Link via configurable options")]),_:1}),C,a(o,{to:"/for_cloudlinux_partners/#link-add-ons-directly"},{default:i(()=>[e("Link add-ons directly")]),_:1}),e(" (for WHMCS 7.2.x and later)"),y,a(o,{to:"/for_cloudlinux_partners/#order"},{default:i(()=>[e("Order")]),_:1}),L,a(o,{to:"/for_cloudlinux_partners/#admin-area"},{default:i(()=>[e("Admin area")]),_:1}),k,a(o,{to:"/for_cloudlinux_partners/#client-area"},{default:i(()=>[e("Client area")]),_:1}),A,a(o,{to:"/for_cloudlinux_partners/#licenses-list"},{default:i(()=>[e("Licenses list")]),_:1}),P,a(o,{to:"/for_cloudlinux_partners/#add-on-licenses-list"},{default:i(()=>[e("Addon licenses list")]),_:1}),e(" (for WHMCS 7.2.x and later)"),S,a(o,{to:"/for_cloudlinux_partners/#common-problems"},{default:i(()=>[e("Common problems")]),_:1})]),I,n("ul",null,[n("li",null,[a(o,{to:"/for_cloudlinux_partners/#installation-and-update"},{default:i(()=>[e("Installation and update")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#configuration-of-product"},{default:i(()=>[e("Configuration of product")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#configuration-of-add-on"},{default:i(()=>[e("Configuration of add-on")]),_:1})])]),M,n("ul",null,[n("li",null,[a(o,{to:"/for_cloudlinux_partners/#link-via-add-on-optional-license"},{default:i(()=>[e("Link Via Add-on. Optional License")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#link-products-directly"},{default:i(()=>[e("Link Products Directly")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#link-via-configurable-options"},{default:i(()=>[e("Link Via Configurable Options")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#link-add-ons-directly"},{default:i(()=>[e("Link Add-ons Directly")]),_:1}),e(" (for WHMCS 7.2.x and later)")]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#order"},{default:i(()=>[e("Order")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#admin-area"},{default:i(()=>[e("Admin Area")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#client-area"},{default:i(()=>[e("Client Area")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#licenses-list"},{default:i(()=>[e("Licenses List")]),_:1})]),n("li",null,[a(o,{to:"/for_cloudlinux_partners/#add-on-licenses-list"},{default:i(()=>[e("Add-on Licenses List")]),_:1}),e(" (for WHMCS 7.2.x and later)")])]),F,n("ol",null,[n("li",null,[e("Prepare license provisioning product as described in the "),a(o,{to:"/for_cloudlinux_partners/#configuration-of-product"},{default:i(()=>[e("Configuration of Product")]),_:1}),e(" section of this documentation.")]),O]),W,a(l)])}const R=r(u,[["render",N],["__file","whmcs_saved.html.vue"]]);export{R as default};
