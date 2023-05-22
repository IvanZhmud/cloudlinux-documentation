import{_ as l,y as s,q as r,E as c,G as e,n,A as i,p as t,a8 as d}from"./framework-e729373a.js";const u={},v=e("h1",{id:"licensing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#licensing","aria-hidden":"true"},"#"),t(" Licensing")],-1),h={class:"table-of-contents"},_=e("h2",{id:"getting-license",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-license","aria-hidden":"true"},"#"),t(" Getting license")],-1),g=e("p",null,[t("You will need a trial or payed activation key to be able to use your CloudLinux OS Solo server. Please "),e("a",{href:"https://lp.cloudlinux.com/cloudlinux-os-solo",target:"_blank",rel:"noopener noreferrer"},"refer to this page"),t(" to find information on how to get activation key.")],-1),p=e("p",null,[t("The activation key looks like: "),e("code",null,"CLSOLO-d34463a182fede4f4d7e140f1841bcf2")],-1),m=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,"The CloudLinux OS Solo activation key is used ONLY for registration CloudLinux OS Solo 8. Trying use it for registration CloudLinux OS Shared 6/7/8 or converting from CentOS 6/7/ 8 to CloudLinux OS Shared 6/7/8 cause errors.")],-1),x={class:"tip custom-block"},f=e("p",{class:"custom-block-title"},"Note",-1),b=d(`<h2 id="license-activation" tabindex="-1"><a class="header-anchor" href="#license-activation" aria-hidden="true">#</a> License activation</h2><p>There are several ways to register your server with CloudLinux Network:</p><p>using the activation key by following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install rhn-setup --enablerepo=cloudlinux-base
/usr/sbin/rhnreg_ks --activationkey=&lt;activation key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>using IP-based licensing:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install rhn-setup --enablerepo=cloudlinux-base
/usr/sbin/clnreg_ks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function k(y,L){const a=s("router-link"),o=s("RouterLink");return r(),c("div",null,[v,e("nav",h,[e("ul",null,[e("li",null,[n(a,{to:"#getting-license"},{default:i(()=>[t("Getting license")]),_:1})]),e("li",null,[n(a,{to:"#license-activation"},{default:i(()=>[t("License activation")]),_:1})])])]),_,g,p,e("p",null,[t("Use it to "),n(o,{to:"/solo/activation/#license-activation"},{default:i(()=>[t("activate your system")]),_:1}),t(" or to "),n(o,{to:"/solo/installation/#converting-existing-servers"},{default:i(()=>[t("convert server to CloudLinux")]),_:1}),t(" server.")]),m,e("div",x,[f,e("p",null,[t("Activation gives you access to the "),n(o,{to:"/solo/manager/#cloudLinux_manager"},{default:i(()=>[t("CloudLinux Manager")]),_:1}),t(" features and system updates.")])]),b])}const C=l(u,[["render",k],["__file","index.html.vue"]]);export{C as default};
