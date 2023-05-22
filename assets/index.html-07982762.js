import{_ as o,y as i,q as r,E as n,G as t,p as e,n as c,A as l,a8 as a}from"./framework-e729373a.js";const d="/assets/whmcs-awp-admin-addon-activate-01a840a0.png",u="/assets/whmcs-awp-admin-addon-configure-0d882960.png",p="/assets/whmcs-awp-admin-config-option-f4262a18.png",h="/assets/whmcs-awp-admin-config-option-price-ea501eed.png",m="/assets/whmcs-awp-admin-product-price-4e5b9788.png",g="/assets/whmcs-awp-admin-product-config-option-f5be4c31.png",w="/assets/whmcs-awp-admin-product-upgrades-b0f83513.png",f="/assets/whmcs-awp-admin-ui-upgrade-config-option-b96f68e3.png",v="/assets/whmcs-awp-user-order-3803ddff.png",b="/assets/whmcs-awp-admin-service-change-config-option-99654a19.png",x="/assets/whmcs-awp-admin-addon-page-d286c313.png",_="/assets/whmcs-awp-admin-addon-page-example-cron-0a66fecb.png",q="/assets/whmcs-awp-admin-addon-page-example-error-d4d79780.png",y="/assets/whmcs-awp-admin-addon-page-example-success-5e1d8a91.png",P="/assets/whmcs-awp-user-services-60f7c191.png",A="/assets/whmcs-awp-admin-ui-upgrade-config-option-b96f68e3.png",W="/assets/whmcs-awp-user-services-config-option-change-0f23a4f4.png",k="/assets/whmcs-awp-user-order-3803ddff.png",C={},S=a('<h1 id="cloudlinux-whmcs-awp-plugin" tabindex="-1"><a class="header-anchor" href="#cloudlinux-whmcs-awp-plugin" aria-hidden="true">#</a> CloudLinux WHMCS AWP Plugin</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>AccelerateWP Addon for WHMCS automatically configures &quot;Configurable options&quot; that can be linked to the Product/Service.</p><p>When a client orders/upgrade a configurable option, a request will be sent to the server to set the Allowed/Default status for AccelerateWP Premium features.</p><h2 id="installation-and-configuration" tabindex="-1"><a class="header-anchor" href="#installation-and-configuration" aria-hidden="true">#</a> Installation and Configuration</h2><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>',6),D=t("li",null,[e("Your WHMCS must be properly configured to work with cron because sending requests to the server is sent by cron. "),t("a",{href:"https://docs.whmcs.com/Crons#Setting_up_the_Cron_Tasks",target:"_blank",rel:"noopener noreferrer"},"How to setting up the cron"),e(".")],-1),M=t("li",null,[e("Download archive "),t("a",{href:"https://repo.cloudlinux.com/plugins/whmcs-awp-plugin-latest.zip",target:"_blank",rel:"noopener noreferrer"},"https://repo.cloudlinux.com/plugins/whmcs-awp-plugin-latest.zip")],-1),H=a(`<div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget -q https://repo.cloudlinux.com/plugins/whmcs-awp-plugin-latest.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><ol start="3"><li>Unzip the archive to <span class="notranslate"><code>&lt;whmcs_root&gt;/modules/addons</code></span> folder</li></ol><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unzip whmcs-awp-plugin-latest.zip -d &lt;whmcs_root&gt;/modules/addons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><ol start="4"><li>If your hosting requires specific files permissions, change them accordingly in the folder: <span class="notranslate"><code>&lt;whmcs_root&gt;/modules/addons/acceleratewp</code></span></li><li>Go to the admin panel page WHMCS/System settings/Addon Modules, activate &quot;AccelerateWP Addon&quot; <img src="`+d+'" alt=""></li><li>Configure addon: <ol><li>Enable debug mode if necessary. Logs are stored in the &quot;System Module Debug Log&quot;</li><li>Allow administrator access to the addon page to view information about the status of the servers <img src="'+u+'" alt=""></li></ol></li></ol><h3 id="setting-prices-for-configurable-options" tabindex="-1"><a class="header-anchor" href="#setting-prices-for-configurable-options" aria-hidden="true">#</a> Setting prices for &quot;Configurable options&quot;</h3><p>During addon activation, &quot;Configurable options&quot; AccelerateWP are created automatically (System settings/Configurable Option/Group name &quot;AccelerateWP&quot;)</p><div class="tip custom-block"><p class="custom-block-title">Notes</p><p>Don&#39;t change the name of the group, options and sub-options!</p></div><p><img src="'+p+'" alt=""></p><p>In the AccelerateWP group settings, you need to configure:</p><ul><li>Choose for which products (cPanel/Plesk) you can additionally order the service.</li><li>For the &quot;accelerate_wp_premium|AccelerateWP Premium&quot; option, set the cost.</li></ul><p>In the option price settings, there are two options, On and Off. Adjust prices as you see fit.</p><p><img src="'+h+'" alt=""></p><h3 id="product-service-setup" tabindex="-1"><a class="header-anchor" href="#product-service-setup" aria-hidden="true">#</a> Product/Service setup</h3><p>Set up your service to work with &quot;Configurable options&quot; in the &quot;System settings/Products/Services&quot;.</p><ol><li>Choose the payment type, One time or Recurrent. <img src="'+m+'" alt=""></li><li>Make sure the product is associated with the Configurable option &quot;AccelerateWP&quot; <img src="'+g+'" alt=""></li><li>Allow clients to upgrade Configurable options so they can purchase AccelerateWP for existing subscriptions. <img src="'+w+'" alt=""></li><li>Save changes.</li><li>Existing customers can upgrade their AccelerateWP Premium settings by changing the order using the &quot;Upgrade/Downgrade options&quot; button. <img src="'+f+'" alt=""></li><li>New customers will be able to select AccelerateWP settings during order creation <img src="'+v+'" alt=""></li><li>The administrator can manually change the setting of AccelerateWP by editing the purchased service by the customer <img src="'+b+'" alt=""></li></ol><h3 id="acceleratewp-addon-page" tabindex="-1"><a class="header-anchor" href="#acceleratewp-addon-page" aria-hidden="true">#</a> AccelerateWP Addon page</h3><p>In case the configurable options &quot;AccelerateWP&quot; were accidentally removed, you can re-install them on the AccelerateWP addon settings page.</p><p><img src="'+x+'" alt=""></p><p>The table shows the queue and history of requests to the servers for which the AccelerateWP status change will be applied.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Deactivating the addon will delete the table with the history of AccelerateWP activity on the servers.</p></div><table><thead><tr><th>Column</th><th>Description</th></tr></thead><tbody><tr><td>Service</td><td>What customer service does the zarpos refer to.</td></tr><tr><td>Suite</td><td>For which product the status will be changed.<br>* Last status: previous status<br> * Current status: current service status<br>* Will set status: What status will be set. Depending on the selected configurable option &quot;AccelerateWP&quot; and the status of the users&#39;s service, the status may differ.</td></tr><tr><td>Message</td><td>The last message about the operation. A detailed error may be displayed.</td></tr><tr><td>Queue</td><td>Availability of a queue for executing a cron request</td></tr><tr><td>Action</td><td>Send request manually</td></tr></tbody></table><p>An example of a request that will be executed by cron <img src="'+_+'" alt=""></p><p>An example of a request that failed <img src="'+q+'" alt=""></p><p>Example of a successful request <img src="'+y+`" alt=""></p><h3 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h3><h4 id="how-whmcs-communicates-with-end-server" tabindex="-1"><a class="header-anchor" href="#how-whmcs-communicates-with-end-server" aria-hidden="true">#</a> How WHMCS communicates with end-server</h4><p>The addon tracks the change in the order and services of the client.<br> For those client services that have the configurable options &quot;AccelerateWP&quot;, a request is sent to the server to change the status of AccelerateWP products.</p><p>Requests are sent by cron once at the beginning of every minute. If the request fails, there will be a retry after 3 seconds.</p><p>Information about the servers to which requests were sent can be viewed on the addon page.</p><p>If an error occurs, you will be able to retry the request on the addon page.</p><p>The AccelerateWP module enters the &quot;Allowed&quot; status when the client service&#39;s status is set to &quot;Active&quot; and the configurable options &quot;On&quot; is selected. In other cases, the status will be set to &quot;Default&quot; and the feature will be turned off for user.</p><h3 id="how-to-automatically-open-the-upgrade-downgrade-options-page" tabindex="-1"><a class="header-anchor" href="#how-to-automatically-open-the-upgrade-downgrade-options-page" aria-hidden="true">#</a> How to automatically open the &quot;Upgrade/Downgrade Options&quot; page?</h3><p>Parameters can be used to determine the billing account of the user in order to display proper page. WHMCS plugin already has automatic redirect to upgrade page, there is only needed to set upgrade-url to the root of your WHMCS instance.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://your.whmcs.com/?m=acceleratewp&amp;action=provisioning&amp;username=democom&amp;domain=demo.com&amp;server_ip=10.51.0.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>m</td><td>acceleratewp</td><td>Constant.</td></tr><tr><td>action</td><td>provisioning</td><td>Constant.</td></tr><tr><td>username</td><td>democom</td><td>Customer&#39;s account name.</td></tr><tr><td>domain</td><td>demo.com</td><td>Customer&#39;s account primary domain.</td></tr><tr><td>server_ip</td><td>10.51.0.10</td><td>Primary IP of the server where AccelerateWP is installed</td></tr></tbody></table><h2 id="plesk-extension" tabindex="-1"><a class="header-anchor" href="#plesk-extension" aria-hidden="true">#</a> Plesk extension</h2><p>The extension adds the ability to execute the <span class="notranslate"><code>accelerate-wp-admin set-suite</code></span> command to the Plesk XML API.</p><p>Do not install it if you are not using AccelerateWP WHMCS billing integration.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Requires Plesk version 17.0 or higher<br> The Plesk extension is available since accelerate-wp-1.3-2 version</p></div><h3 id="installation-1" tabindex="-1"><a class="header-anchor" href="#installation-1" aria-hidden="true">#</a> Installation</h3><ol><li>Install</li></ol><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/sbin/plesk bin extension -i /usr/share/cloudlinux/plesk-accelerate-wp-latest.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><ol start="2"><li>Activate</li></ol><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/sbin/plesk bin extension --enable accelerate-wp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="deinstallation" tabindex="-1"><a class="header-anchor" href="#deinstallation" aria-hidden="true">#</a> Deinstallation</h3><div class="notranslate"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/sbin/plesk bin extension -u accelerate-wp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="end-user-workflow" tabindex="-1"><a class="header-anchor" href="#end-user-workflow" aria-hidden="true">#</a> End user workflow</h2><h3 id="how-to-update-an-existing-order-service" tabindex="-1"><a class="header-anchor" href="#how-to-update-an-existing-order-service" aria-hidden="true">#</a> How to update an existing order (service)</h3><ol><li>Open the services page through the menu &quot;Services - My services&quot;</li><li>Choose the service you need <img src="`+P+'" alt=""></li><li>Select the action &quot;Upgrade/Downgrade Options&quot; <img src="'+A+'" alt=""></li><li>Choose a new configuration and place an order <img src="'+W+'" alt=""></li><li>Changes will occur automatically after 1 minute or after confirmation of the order by the service provider</li></ol><h3 id="how-to-checkout-new-order" tabindex="-1"><a class="header-anchor" href="#how-to-checkout-new-order" aria-hidden="true">#</a> How to checkout new order</h3><ol><li>Select a service in the service provider&#39;s WHMCS portal</li><li>Services with AccelerateWP enabled will display an option to configure AccelerateWP Premium. <img src="'+k+'" alt=""></li><li>Changes will occur automatically after 1 minute or after confirmation of the order by the service provider</li></ol>',51);function I(O,T){const s=i("RouterLink");return r(),n("div",null,[S,t("ol",null,[D,t("li",null,[e("Plesk requires the installation of an additional "),c(s,{to:"/cln/whmcs_awp_plugin/#plesk-extension"},{default:l(()=>[e("extension")]),_:1}),e(".")]),M]),H])}const N=o(C,[["render",I],["__file","index.html.vue"]]);export{N as default};
