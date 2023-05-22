import{_ as l,y as o,q as s,E as d,G as e,n as t,A as i,p as a,a8 as r}from"./framework-e729373a.js";const c={},u=r(`<h1 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h1><p>Below, you can find the list of supported features with the links to the documentation available.</p><h2 id="lve-limits" tabindex="-1"><a class="header-anchor" href="#lve-limits" aria-hidden="true">#</a> LVE limits</h2><ul><li><a href="https://docs.cloudlinux.com/limits/#understanding-limits" target="_blank" rel="noopener noreferrer">Understanding limits</a></li><li><a href="https://docs.cloudlinux.com/limits/#speed-limit" target="_blank" rel="noopener noreferrer">SPEED limit</a></li><li><a href="https://docs.cloudlinux.com/limits/#memory-limit" target="_blank" rel="noopener noreferrer">Memory limit</a></li><li><a href="https://docs.cloudlinux.com/limits/#io" target="_blank" rel="noopener noreferrer">IO</a></li><li><a href="https://docs.cloudlinux.com/limits/#iops" target="_blank" rel="noopener noreferrer">IOPS</a></li><li><a href="https://docs.cloudlinux.com/limits/#entry-processes" target="_blank" rel="noopener noreferrer">Entry processes</a></li><li><a href="https://docs.cloudlinux.com/limits/#number-of-processes" target="_blank" rel="noopener noreferrer">Number of processes</a></li><li><a href="https://docs.cloudlinux.com/limits/#inodes" target="_blank" rel="noopener noreferrer">Inodes</a></li><li><a href="https://docs.cloudlinux.com/limits/#network-traffic-bandwidth-control-and-accounting-system" target="_blank" rel="noopener noreferrer">Network traffic bandwidth control and accounting system</a></li><li><a href="https://docs.cloudlinux.com/limits/#limits-validation" target="_blank" rel="noopener noreferrer">Limits validation</a></li><li><a href="https://docs.cloudlinux.com/limits/#compatibility-matrix" target="_blank" rel="noopener noreferrer">Compatibility matrix</a></li><li><a href="https://docs.cloudlinux.com/limits/#reseller-limits" target="_blank" rel="noopener noreferrer">Reseller limits</a></li></ul><h2 id="inode-limits" tabindex="-1"><a class="header-anchor" href="#inode-limits" aria-hidden="true">#</a> Inode limits</h2><p>The documentation is available <a href="https://docs.cloudlinux.com/limits/#inodes" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="reseller-limits" tabindex="-1"><a class="header-anchor" href="#reseller-limits" aria-hidden="true">#</a> Reseller limits</h2><p>The documentation is available <a href="https://docs.cloudlinux.com/limits/#reseller-limits" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="mysql-governor" tabindex="-1"><a class="header-anchor" href="#mysql-governor" aria-hidden="true">#</a> MySQL Governor</h2><p>MySQL Governor is software to monitor and restrict MySQL usage in a shared hosting environment. The monitoring is done via resource usage statistics per each MySQL thread.</p><p>MySQL Governor can also kill off slow SELECT queries.</p><p>MySQL Governor has multiple modes of operations, depending on the configuration. It can work in monitor-only mode, or it can use different throttling scenarios.</p><p>MySQL Governor allows restricting customers who use too many resources. It supports following limits:</p><table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>CPU</td><td>%</td><td>CPU speed relative to one core. 150% would mean one and a half cores</td></tr><tr><td>READ</td><td>bytes</td><td>bytes read. Cached reads are not counted, only those that were actually read from disk will be counted</td></tr><tr><td>WRITE</td><td>bytes</td><td>bytes written. Cached writes are not counted, only once data is written to disk, it is counted</td></tr></tbody></table><p>You can set different limits for different periods: current, short, med, long. By default those periods are defined as 1 second, 5 seconds, 1 minute and 5 minutes. They can be re-defined using the <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#configuration-and-operation" target="_blank" rel="noopener noreferrer">configuration file</a>. The idea is to use larger acceptable values for shorter periods. Like you could allow a customer to use two cores (200%) for one second, but only 1 core (on average) for 1 minute, and only 70% within 5 minutes. That would make sure that customer can burst for short periods of time.</p><p>When a customer is restricted, the customer will be placed into special LVE with ID 3. All restricted customers will be placed into that LVE, and you can control the amount of resources available to restricted customers. Restricted customers will also be limited to only 30 concurrent connections. This is done so they wouldn&#39;t use up all the MySQL connections to the server.</p><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><div class="warning custom-block"><p class="custom-block-title">Attention!</p><p>MySQL Governor on Ubuntu supports the following only:</p><ul><li>cl-MySQL80 on non-panel system</li><li>cl-MySQL80 on cPanel</li><li>cl-MariaDB103 on non-panel system</li></ul></div><ol><li>Install MySQL Governor</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt  install governor-mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><p>To use MySQL Governor with</p><ul><li>cl-MariaDB103</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/share/lve/dbgovernor/mysqlgovernor.py --mysql-version=mariadb103
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>cl-MySQL80</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/share/lve/dbgovernor/mysqlgovernor.py --mysql-version=mysql80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Backup your databases.</p></li><li><p>Run the cl-MySQL/cl-MariaDB installation.</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/share/lve/dbgovernor/mysqlgovernor.py --install --yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In case of installing on cPanel + Ubuntu server, set the following parameter:</p><ol start="5"><li>After installation, check that the database server is working properly. If you have any problems, use <a href="">Support Portal</a>.</li><li>Configure user mapping to the database. The mapping format is described in the <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#mapping-a-user-to-a-database" target="_blank" rel="noopener noreferrer">following section</a>.</li></ol><p>In case a non-panel system the <code>/etc/container/dbuser-map</code> should be created and updated with new users by admin.</p><p>The format is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[dbuser_name1] [account_name1] [UID1]
...
[dbuser_nameN] [account_nameN] [UIDN]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The control panel should automatically generate such mapping and write it to the <code>/etc/container/dbuser-map</code>. Usually, it is enough to write a hook when adding, deleting or renaming a database for a user. The control panel should implement such a mechanism for MySQL Governor to operate properly. MySQL Governor automatically applies changes from the dbuser-map file every five minutes.</p><ol start="7"><li>MySQL Governor configuration can be found in the following <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#configuration-3" target="_blank" rel="noopener noreferrer">section</a>.</li><li>MySQL Governor CLI tools description can be found in the following <a href="https://docs.cloudlinux.com/command-line_tools/#mysql-governor" target="_blank" rel="noopener noreferrer">section</a>.</li><li>Having configured the mapping use <code>dbtop</code> to see the current user load on the database (you&#39;d need to make some database queries).</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dbtop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="10"><li>If the load appears in the dbtop output, then you have successfully configured MySQL Governor.</li></ol><h3 id="how-to-upgrade-database-server" tabindex="-1"><a class="header-anchor" href="#how-to-upgrade-database-server" aria-hidden="true">#</a> How To upgrade database server</h3><p>You can find the instructions in <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#upgrading-database-server" target="_blank" rel="noopener noreferrer">this documentation</a>.</p><h3 id="uninstalling" tabindex="-1"><a class="header-anchor" href="#uninstalling" aria-hidden="true">#</a> Uninstalling</h3><p>To remove MySQL Governor, run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ /usr/share/lve/dbgovernor/mysqlgovernor.py --delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The script will install the original MySQL server, and remove MySQL Governor.</p><h3 id="configuration-and-operation" tabindex="-1"><a class="header-anchor" href="#configuration-and-operation" aria-hidden="true">#</a> Configuration and operation</h3><p>You can find the instructions in <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#configuration-and-operation" target="_blank" rel="noopener noreferrer">this documentation</a>.</p><h2 id="administrator-web-interface-cloudlinux-manager" tabindex="-1"><a class="header-anchor" href="#administrator-web-interface-cloudlinux-manager" aria-hidden="true">#</a> Administrator WEB interface (CloudLinux Manager)</h2><p>The documentation is available <a href="https://docs.cloudlinux.com/lve_manager/#cloudlinux-manager" target="_blank" rel="noopener noreferrer">here</a>.</p>`,41),h=r('<li><a href="https://docs.cloudlinux.com/lve_manager/#current-usage" target="_blank" rel="noopener noreferrer">Current Usage</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#users" target="_blank" rel="noopener noreferrer">Users</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#statistics" target="_blank" rel="noopener noreferrer">Statistics</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#packages" target="_blank" rel="noopener noreferrer">Packages</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#options" target="_blank" rel="noopener noreferrer">Options</a></li>',5),p=e("a",{href:"https://docs.cloudlinux.com/cloudlinux_os_components/#php-selector",target:"_blank",rel:"noopener noreferrer"},"PHP Selector",-1),m=e("li",null,[e("a",{href:"https://docs.cloudlinux.com/lve_manager/#selector-tab",target:"_blank",rel:"noopener noreferrer"},"Selector tab")],-1),g=e("li",null,[e("a",{href:"https://docs.cloudlinux.com/lve_manager/#selector-tab-additional-features",target:"_blank",rel:"noopener noreferrer"},"Selector tab additional features (cPanel)"),a(" CloudLinux Manager 6.0.1-2")],-1),f=e("li",null,[e("a",{href:"https://docs.cloudlinux.com/lve_manager/#php-selector-troubleshooting",target:"_blank",rel:"noopener noreferrer"},"PHP Selector troubleshooting (cPanel)"),a(" CloudLinux Manager 6.0.1-2")],-1),b=e("li",null,[e("a",{href:"https://docs.cloudlinux.com/lve_manager/#php-selector-diagnostic-tool-and-notifications",target:"_blank",rel:"noopener noreferrer"},"PHP Selector diagnostic tool and notifications"),a(" CloudLinux Manager 6.0.1-2")],-1),v=r(`<h3 id="dashboard" tabindex="-1"><a class="header-anchor" href="#dashboard" aria-hidden="true">#</a> Dashboard</h3><div class="warning custom-block"><p class="custom-block-title">Attention!</p><p>MySQL Governor is not available in the current version. We&#39;re planning to add it in the upcoming releases.</p></div><p>Dashboard provides a quick overview of statistics and all administrative information for server administrators.</p><p>Go to <em>CloudLinux Manager</em> | <em>Dashboard</em>.</p><ul><li>End Users hitting limits — number of users reaching their limit in any kind of resource. Data is within the last 24 hours.</li><li>Resellers hitting limits — number of enrolled Resellers that are reaching their limit in any kind of resource. Data is within the last 24 hours.</li><li><a href="https://docs.cloudlinux.com/lve_manager/#php-selector-2" target="_blank" rel="noopener noreferrer">PHP Selector</a> block displays the following information: <ul><li>Default version — the default version of PHP binaries. Click <em>Manage</em> to change the default version, enable or disable PHP Selector, change the list of supported versions, and choose default modules. You will be redirected to CloudLinux Manager | PHP Selector. PHP Selector (cPanel) has malfunctions warnings about <a href="https://docs.cloudlinux.com/lve_manager/#errors" target="_blank" rel="noopener noreferrer">the most common issues</a>.</li></ul></li><li><a href="https://docs.cloudlinux.com/cloudlinux_os_components/#cagefs" target="_blank" rel="noopener noreferrer">CageFS</a> block displays the following information: <ul><li>CageFS status (Enabled/Disabled/Not installed). To manage CageFS, click <em>Manage</em>. You will be redirected to CloudLinux Manager | Options | CageFS. Click <em>Install</em> to install CageFS.</li><li>Mode displays the current CageFS mode of operation.</li><li>End users — displays the number of users with CageFS enabled/all.</li></ul></li></ul><h2 id="reseller-web-interface-cloudlinux-manager" tabindex="-1"><a class="header-anchor" href="#reseller-web-interface-cloudlinux-manager" aria-hidden="true">#</a> Reseller WEB interface (CloudLinux Manager)</h2><ul><li><a href="https://docs.cloudlinux.com/lve_manager/#current-usage-tab" target="_blank" rel="noopener noreferrer">Current Usage</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#historical-usage-tab" target="_blank" rel="noopener noreferrer">Historical Usage</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#users-tab" target="_blank" rel="noopener noreferrer">Users</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#statistics-tab" target="_blank" rel="noopener noreferrer">Statistics</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#packages-tab" target="_blank" rel="noopener noreferrer">Packages</a></li></ul><h2 id="user-web-interface" tabindex="-1"><a class="header-anchor" href="#user-web-interface" aria-hidden="true">#</a> User WEB interface</h2><ul><li><a href="https://docs.cloudlinux.com/lve_manager/#resource-usage-client-plugin" target="_blank" rel="noopener noreferrer">Resource Usage</a></li><li><a href="https://docs.cloudlinux.com/lve_manager/#php-selector-client-plugin" target="_blank" rel="noopener noreferrer">PHP Selector</a></li></ul><h2 id="lve-wrappers" tabindex="-1"><a class="header-anchor" href="#lve-wrappers" aria-hidden="true">#</a> LVE Wrappers</h2><p>The documentation is available <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#lve-wrappers" target="_blank" rel="noopener noreferrer">here</a>.</p><ul><li>lve_wrapper</li><li>lve_suwrapper</li></ul><h2 id="cagefs-and-running-commands-inside" tabindex="-1"><a class="header-anchor" href="#cagefs-and-running-commands-inside" aria-hidden="true">#</a> CageFS and running commands inside</h2><p>The documentation is available <a href="https://docs.cloudlinux.com/control_panel_integration/#running-commands-inside-cagefs" target="_blank" rel="noopener noreferrer">here</a>.</p><ul><li>cagefs_enter</li><li>cagefs_enter_user</li></ul><h2 id="hardened-php" tabindex="-1"><a class="header-anchor" href="#hardened-php" aria-hidden="true">#</a> Hardened PHP</h2><ul><li>alt-php versions 5.6 - 8.0</li></ul><h2 id="mod-hostinglimits" tabindex="-1"><a class="header-anchor" href="#mod-hostinglimits" aria-hidden="true">#</a> Mod_hostinglimits</h2><p>LVE is a kernel level technology developed by the CloudLinux team. The technology has common roots with container based virtualization and uses cgroups in its latest incarnation. It is lightweight and transparent. The goal of LVE is to make sure that no single web site can bring down your web server.</p><p>Today, a single site can consume all CPU, IO, Memory resources or Apache processes - and bring the server to a halt. LVE prevents that. It is done via collaboration of Apache module, PAM module and kernel.</p><p><a href="https://docs.cloudlinux.com/cloudlinux_os_components/#hostinglimits-module-for-apache" target="_blank" rel="noopener noreferrer">mod_hostinglimits</a> is an Apache module that:</p><ul><li>detects VirtualHost from which the request came;</li><li>detects if it was meant for CGI or PHP script;</li><li>puts Apache process used to serve that request into LVE for the user determined via SuexecUserGroup directive for that virtual host;</li><li>lets Apache to serve the request;</li><li>removes Apache process from user&#39;s LVE.</li></ul><p>The kernel makes sure that all LVEs get fair share of the server&#39;s resources, and that no customer can use more then the limits set for that customer. Today we can limit CPU , Memory (virtual and physical), IO, number of processes as well as the number of entry processes (concurrent connections to apache).</p><p>Each LVE limits amount of entry processes (Apache processes entering into LVE) to prevent single site exhausting all Apache processes. If the limit is reached, then mod_hostinglimits will not be able to place Apache process into LVE, and will return error code 508. This way very heavy site would slow down and start returning 508 errors, without affecting other users.</p><ul><li>If the site is limited by CPU or IO, then the site will start responding slower.</li><li>If the site is limited by memory or number of processes limits, then the user will receive 500 or 503 errors that server cannot execute the script.</li></ul><div class="warning custom-block"><p class="custom-block-title">Attention!</p><p>In the current version ONLY the following combinations are available: <strong>ea-php81 with php-fpm</strong> and <strong>alt-php with suphp, cgi</strong></p></div><h4 id="ea-php81-with-php-fpm" tabindex="-1"><a class="header-anchor" href="#ea-php81-with-php-fpm" aria-hidden="true">#</a> ea-php81 with php-fpm</h4><p>To install, run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># apt install ea-php81*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="alt-php-with-suphp-cgi" tabindex="-1"><a class="header-anchor" href="#alt-php-with-suphp-cgi" aria-hidden="true">#</a> alt-php with suphp, cgi</h4><p>To install, follow these steps:</p><ol><li><p>Remove <code>mod-ruid2</code>:</p></li><li><p>Install packages (with <code>alt-php74</code> as an example):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># apt install ea-apache24-mod-suphp ea-apache24-mod-suexec
# apt install alt-php74
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="php-selector-installation-instructions" tabindex="-1"><a class="header-anchor" href="#php-selector-installation-instructions" aria-hidden="true">#</a> PHP Selector installation instructions</h4><p>The documentation is available <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#php-selector" target="_blank" rel="noopener noreferrer">here</a>.</p><div class="warning custom-block"><p class="custom-block-title">Attention!</p><p>Only the following handlers can be used:</p><ul><li>suphp</li><li>cgi</li></ul></div><p>To install, run the following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># apt install ea-apache24-mod-suphp ea-apache24-mod-suexec
# apt install cagefs
# cagefsctl –-init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symlink-owner-match-protection" tabindex="-1"><a class="header-anchor" href="#symlink-owner-match-protection" aria-hidden="true">#</a> Symlink owner match protection</h2><p>The documentation is available <a href="https://docs.cloudlinux.com/cloudlinux_os_kernel/#fs-enforce-symlinksifowner" target="_blank" rel="noopener noreferrer">here</a>.</p><ul><li><a href="https://docs.cloudlinux.com/cloudlinux_os_kernel/#fs-enforce-symlinksifowner" target="_blank" rel="noopener noreferrer">fs.enforce_symlinksifowner</a></li><li><a href="https://docs.cloudlinux.com/cloudlinux_os_kernel/#fs-symlinkown-gid" target="_blank" rel="noopener noreferrer">fs.symlinkown_gid</a></li><li><a href="https://docs.cloudlinux.com/cloudlinux_os_kernel/#fs-process-symlinks-by-task" target="_blank" rel="noopener noreferrer">fs.process_symlinks_by_task</a></li></ul><h2 id="link-traversal-protection" tabindex="-1"><a class="header-anchor" href="#link-traversal-protection" aria-hidden="true">#</a> Link traversal protection</h2><ul><li><a href="https://docs.cloudlinux.com/cloudlinux_os_kernel/#link-traversal-protection" target="_blank" rel="noopener noreferrer">fs.protected_symlinks_create</a></li><li><a href="https://docs.cloudlinux.com/cloudlinux_os_kernel/#link-traversal-protection" target="_blank" rel="noopener noreferrer">fs.protected_hardlinks_create</a></li></ul><h2 id="tuned-profiles" tabindex="-1"><a class="header-anchor" href="#tuned-profiles" aria-hidden="true">#</a> Tuned profiles</h2><p>The documentation is available <a href="https://docs.cloudlinux.com/cloudlinux_os_kernel/#tuned-profiles-cloudlinux" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="apache-mod-lsapi" tabindex="-1"><a class="header-anchor" href="#apache-mod-lsapi" aria-hidden="true">#</a> Apache mod_lsapi</h2><h3 id="general-requirements" tabindex="-1"><a class="header-anchor" href="#general-requirements" aria-hidden="true">#</a> General requirements</h3><p>General requirements are available <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#general-information-and-requirements-9" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="installation-1" tabindex="-1"><a class="header-anchor" href="#installation-1" aria-hidden="true">#</a> Installation</h3><p>Installation on cPanel servers with EasyApache 4:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ apt install liblsapi liblsapi-dev 
$ apt install ea-apache24-mod-lsapi
$ /usr/bin/switch_mod_lsapi --setup
$ service httpd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Installation on servers with no panel:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ apt install liblsapi liblsapi-dev 
$ apt install mod-lsapi
$ /usr/bin/switch_mod_lsapi --setup
$ service apache2 restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Configuration instructions are available <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#configuration-4" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><p>In case the site responds with the error: 503 Service unavailable.</p><ol><li>Be sure that /opt has drwxr-xr-x permissions. It can be fixed with the following command:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ chmod 755 /opt 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Change the default folder for mod_lsapi socket:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ mkdir /var/mod_lsapi
$ chown nobody.nobody /var/mod_lsapi
$ chmod 755 /var/mod_lsapi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add to /etc/apache2/conf.d/lsapi.conf new path:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsapi_socket_path /var/mod_lsapi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And restart service:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ service httpd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h3><p>Uninstall procedure for cPanel servers with EasyApache 4:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ /usr/bin/switch_mod_lsapi --uninstall
$ apt remove liblsapi liblsapi-dev ea-apache24-mod-lsapi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Uninstall procedure for servers with no panel:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ /usr/bin/switch_mod_lsapi --uninstall
$ apt remove liblsapi liblsapi-dev mod-lsapi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,69);function x(_,k){const n=o("RouterLink");return s(),d("div",null,[u,e("ul",null,[e("li",null,[t(n,{to:"/features/#dashboard"},{default:i(()=>[a("Dashboard")]),_:1})]),h,e("li",null,[p,e("ul",null,[e("li",null,[t(n,{to:"/features/#php-selector-installation-instructions"},{default:i(()=>[a("Installation instructions")]),_:1})]),m,g,f,b])])]),v])}const w=l(c,[["render",x],["__file","index.html.vue"]]);export{w as default};
