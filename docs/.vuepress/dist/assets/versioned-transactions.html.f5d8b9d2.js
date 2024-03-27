import{_ as o,r,o as p,c as l,a as s,b as e,F as c,e as t,d as a}from"./app.31cab234.js";var i="/assets/tx_format.1023848a.png",d="/assets/compact_array_format.6984243f.png",u="/assets/legacy_message.09ab30b7.png",h="/assets/message_header.8eb7d589.png",_="/assets/compat_array_of_account_addresses.7792e5c7.png",m="/assets/compact_array_of_ixs.6281d70b.png",g="/assets/issues_with_legacy_txs.5766db66.png",b="/assets/luts.96a8a310.png",k="/assets/lut_format.060d6be2.png",f="/assets/messagev0.c089b240.png",v="/assets/compact_array_of_luts.9175e491.png",y="/assets/new_compact_array_of_ixs.54090dc5.png";const x={},w=t('<h1 id="\u7248\u672C\u5316\u4EA4\u6613-versioned-transactions" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u5316\u4EA4\u6613-versioned-transactions" aria-hidden="true">#</a> \u7248\u672C\u5316\u4EA4\u6613 (Versioned Transactions)</h1><p>Solana\u6700\u8FD1\u767C\u4F48\u4E86\u7248\u672C\u5316\u4EA4\u6613\u3002\u63D0\u8B70\u7684\u66F4\u6539\u5982\u4E0B\uFF1A</p><ol><li><p>\u5F15\u5165\u4E00\u500B\u65B0\u7684\u7A0B\u5E8F\uFF0C\u7528\u65BC\u7BA1\u7406\u93C8\u4E0A\u5730\u5740\u67E5\u627E\u8868\u3002</p></li><li><p>\u6DFB\u52A0\u4E00\u7A2E\u65B0\u7684\u4EA4\u6613\u683C\u5F0F\uFF0C\u53EF\u4EE5\u5229\u7528\u93C8\u4E0A\u5730\u5740\u67E5\u627E\u8868\u3002</p></li></ol><h2 id="\u7D9C\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u7D9C\u8FF0" aria-hidden="true">#</a> \u7D9C\u8FF0</h2><div class="custom-container tip"><p class="custom-container-title">\u4E8B\u5BE6\u8868</p><p>-\u50B3\u7D71\u4EA4\u6613\u5B58\u5728\u4E00\u500B\u4E3B\u8981\u554F\u984C\uFF1A\u6700\u5927\u5141\u8A31\u7684\u5927\u5C0F\u72321232\u5B57\u7BC0\uFF0C\u56E0\u6B64\u539F\u5B50\u4EA4\u6613\u4E2D\u53EF\u4EE5\u5BB9\u7D0D\u7684\u8CEC\u6236\u6578\u91CF\u723235\u500B\u5730\u5740\u3002</p><ul><li>\u5730\u5740\u67E5\u627E\u8868\uFF08LUTs\uFF09\uFF1A\u4E00\u65E6\u8CEC\u6236\u5B58\u5132\u5728\u8A72\u8868\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u75281\u5B57\u7BC0\u7684u8\u7D22\u5F15\uFF0C\u5728\u4EA4\u6613\u6D88\u606F\u4E2D\u5F15\u7528\u8A72\u8868\u7684\u5730\u5740\u3002</li><li>\u53EF\u4EE5\u4F7F\u7528<code>solana/web3.js</code>\u7684<code>createLookupTable()</code>\u69CB\u5EFA\u4E00\u500B\u65B0\u7684\u67E5\u627E\u8868\uFF0C\u4E26\u78BA\u5B9A\u5176\u5730\u5740\u3002</li><li>\u4E00\u65E6\u5275\u5EFA\u4E86LUT\uFF0C\u53EF\u4EE5\u9032\u884C\u64F4\u5C55\uFF0C\u5373\u53EF\u4EE5\u5C07\u8CEC\u6236\u8FFD\u52A0\u5230\u8868\u4E2D\u3002</li><li>\u7248\u672C\u5316\u4EA4\u6613\uFF1A\u9700\u8981\u4FEE\u6539\u50B3\u7D71\u4EA4\u6613\u7684\u7D50\u69CB\u4EE5\u6574\u5408LUTs\u3002</li><li>\u5728\u5F15\u5165\u7248\u672C\u5316\u4E4B\u524D\uFF0C\u4EA4\u6613\u5728\u5176\u982D\u90E8\u7684\u7B2C\u4E00\u500B\u5B57\u7BC0\u4E2D\u4FDD\u7559\u4E86\u4E00\u500B\u672A\u4F7F\u7528\u7684\u6700\u9AD8\u4F4D\uFF0C\u53EF\u4EE5\u7528\u4F86\u986F\u5F0F\u8072\u660E\u4EA4\u6613\u7684\u7248\u672C\u3002</li></ul></div><p>\u6211\u5011\u5C07\u66F4\u8A73\u7D30\u5730\u8A0E\u8AD6\u4E0A\u8FF0\u5F15\u5165\u7684\u66F4\u6539\u4EE5\u53CA\u5B83\u5011\u5C0D\u958B\u767C\u4EBA\u54E1\u7684\u610F\u7FA9\u3002\u7136\u800C\uFF0C\u7232\u4E86\u66F4\u597D\u5730\u7406\u89E3\u9019\u4E9B\u66F4\u6539\uFF0C\u6211\u5011\u9996\u5148\u9700\u8981\u4E86\u89E3\u5E38\u898F\uFF08\u6216\u50B3\u7D71\uFF09\u4EA4\u6613\u7684\u7D50\u69CB\u3002</p><h2 id="\u50B3\u7D71\u4EA4\u6613-legacy-transactions" tabindex="-1"><a class="header-anchor" href="#\u50B3\u7D71\u4EA4\u6613-legacy-transactions" aria-hidden="true">#</a> \u50B3\u7D71\u4EA4\u6613\uFF08Legacy Transactions\uFF09</h2>',7),q=a("Solana\u7DB2\u7D61\u4F7F\u7528\u6700\u5927\u4E8B\u52D9\u55AE\u5143\uFF08MTU\uFF09\u5927\u5C0F\u72321280\u5B57\u7BC0\uFF0C\u9075\u5FAA"),T={href:"https://en.wikipedia.org/wiki/IPv6_packet",target:"_blank",rel:"noopener noreferrer"},V=a("IPv6 MTU"),L=a(" \u7684\u5927\u5C0F\u7D04\u675F\uFF0C\u4EE5\u78BA\u4FDD\u901F\u5EA6\u548C\u53EF\u9760\u6027\u3002\u9019\u6A23\u7559\u4E0B\u4E861232\u5B57\u7BC0\u7684\u6578\u64DA\u7A7A\u9593\uFF0C\u7528\u65BC\u5B58\u5132\u5E8F\u5217\u5316\u7684\u4EA4\u6613\u7B49\u6578\u64DA\u3002"),S=s("p",null,"\u4E00\u500B\u4EA4\u6613\u7531\u4EE5\u4E0B\u7D44\u6210\uFF1A",-1),C=a("\u4E00\u500B\u7DCA\u6E4A\u6578\u7D44\u7684\u7C3D\u540D\uFF0C\u5176\u4E2D\u6BCF\u500B\u7C3D\u540D\u662F\u4E00\u500B64\u5B57\u7BC0\u7684"),A={href:"https://ed25519.cr.yp.to/",target:"_blank",rel:"noopener noreferrer"},U=a("ed25519"),j=a("\u7C3D\u540D\u3002"),B=s("li",null,"\u4E00\u500B\uFF08\u50B3\u7D71\u7684\uFF09\u6D88\u606F\u3002",-1),I=s("p",null,[s("img",{src:i,alt:"Transaction Format"})],-1),M={class:"custom-container tip"},N=s("p",{class:"custom-container-title"},"Compact-Array format",-1),P=s("p",null,"A compact array is an array serialised to have the following components:",-1),F=a("An array length in a multi-byte encoding called "),E={href:"https://beta.docs.solana.com/developing/programming-model/transactions#compact-u16-format",target:"_blank",rel:"noopener noreferrer"},H=a("Compact-u16"),R=s("li",null,"Followed by each array item",-1),W=s("p",null,[s("img",{src:d,alt:"Compact array format"})],-1),D=t('<h2 id="\u50B3\u7D71\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u50B3\u7D71\u6D88\u606F" aria-hidden="true">#</a> \u50B3\u7D71\u6D88\u606F</h2><p>\u50B3\u7D71\u6D88\u606F\u5305\u542B\u4EE5\u4E0B\u7D44\u4EF6\uFF1A</p><ol><li>\u4E00\u500B\u982D\u90E8\uFF08header\uFF09\u3002</li><li>\u4E00\u500B\u7DCA\u6E4A\u6578\u7D44\u7684\u8CEC\u6236\u5730\u5740\uFF0C\u6BCF\u500B\u8CEC\u6236\u5730\u5740\u4F54\u752832\u5B57\u7BC0\u3002</li><li>\u4E00\u500B\u6700\u8FD1\u7684\u5340\u584A\u54C8\u5E0C\uFF08recent blockhash\uFF09\uFF1A <ul><li>\u4E00\u500B32\u5B57\u7BC0\u7684SHA-256\u54C8\u5E0C\uFF0C\u7528\u65BC\u6307\u793A\u4E0A\u6B21\u89C0\u5BDF\u5230\u7684\u8CEC\u672C\u72C0\u614B\u3002\u5982\u679C\u4E00\u500B\u5340\u584A\u54C8\u5E0C\u592A\u820A\uFF0C\u9A57\u8B49\u7BC0\u9EDE\u5C07\u62D2\u7D55\u5B83\u3002</li></ul></li><li>\u4E00\u500B\u7DCA\u6E4A\u6578\u7D44\u7684\u6307\u4EE4</li></ol><p><img src="'+u+'" alt="Legacy Message"></p><h3 id="\u982D\u90E8" tabindex="-1"><a class="header-anchor" href="#\u982D\u90E8" aria-hidden="true">#</a> \u982D\u90E8</h3><p>\u6D88\u606F\u982D\u90E8\u662F3\u5B57\u7BC0\u9577\uFF0C\u5305\u542B3\u500Bu8\u6574\u6578\uFF1A</p><ol><li>\u6240\u9700\u7C3D\u540D\u6578\u91CF\uFF1ASolana\u904B\u884C\u6642\u6703\u5C07\u6B64\u6578\u5B57\u8207\u4EA4\u6613\u4E2D\u7DCA\u6E4A\u6578\u7D44\u7C3D\u540D\u7684\u9577\u5EA6\u9032\u884C\u9A57\u8B49\u3002</li><li>\u9700\u8981\u7C3D\u540D\u7684\u53EA\u8B80\u8CEC\u6236\u5730\u5740\u6578\u91CF\u3002</li><li>\u4E0D\u9700\u8981\u7C3D\u540D\u7684\u53EA\u8B80\u8CEC\u6236\u5730\u5740\u6578\u91CF\u3002</li></ol><p><img src="'+h+'" alt="Message Header"></p><h3 id="\u7DCA\u6E4A\u8CEC\u6236\u5730\u5740\u6578\u7D44" tabindex="-1"><a class="header-anchor" href="#\u7DCA\u6E4A\u8CEC\u6236\u5730\u5740\u6578\u7D44" aria-hidden="true">#</a> \u7DCA\u6E4A\u8CEC\u6236\u5730\u5740\u6578\u7D44</h3><p>\u9019\u500B\u7DCA\u6E4A\u6578\u7D44\u4EE5\u7DCA\u6E4A\u7684u16\u7DE8\u78BC\u7684\u8CEC\u6236\u5730\u5740\u6578\u91CF\u958B\u59CB\uFF0C\u7136\u5F8C\u662F\uFF1A</p><ol><li><strong>\u9700\u8981\u7C3D\u540D\u7684\u8CEC\u6236\u5730\u5740</strong>\uFF1A\u9996\u5148\u5217\u51FA\u8ACB\u6C42\u8B80\u53D6\u548C\u5BEB\u5165\u8A2A\u554F\u6B0A\u9650\u7684\u5730\u5740\uFF0C\u7136\u5F8C\u662F\u8ACB\u6C42\u53EA\u8B80\u8A2A\u554F\u6B0A\u9650\u7684\u5730\u5740\u3002</li><li><strong>\u4E0D\u9700\u8981\u7C3D\u540D\u7684\u8CEC\u6236\u5730\u5740</strong>\uFF1A\u8207\u4E0A\u8FF0\u76F8\u540C\uFF0C\u9996\u5148\u5217\u51FA\u8ACB\u6C42\u8B80\u53D6\u548C\u5BEB\u5165\u8A2A\u554F\u6B0A\u9650\u7684\u5730\u5740\uFF0C\u7136\u5F8C\u662F\u8ACB\u6C42\u53EA\u8B80\u8A2A\u554F\u6B0A\u9650\u7684\u5730\u5740\u3002</li></ol><p><img src="'+_+'" alt="Compact array of account addresses"></p><h3 id="\u7DCA\u6E4A\u6307\u4EE4\u6578\u7D44" tabindex="-1"><a class="header-anchor" href="#\u7DCA\u6E4A\u6307\u4EE4\u6578\u7D44" aria-hidden="true">#</a> \u7DCA\u6E4A\u6307\u4EE4\u6578\u7D44</h3><p>\u5C31\u50CF\u8CEC\u6236\u5730\u5740\u6578\u7D44\u4E00\u6A23\uFF0C\u9019\u500B\u7DCA\u6E4A\u6307\u4EE4\u6578\u7D44\u4EE5\u7DCA\u6E4A\u7684u16\u7DE8\u78BC\u7684\u6307\u4EE4\u6578\u91CF\u958B\u59CB\uFF0C\u7136\u5F8C\u662F\u4E00\u500B\u6307\u4EE4\u6578\u7D44\u3002\u6578\u7D44\u4E2D\u7684\u6BCF\u500B\u6307\u4EE4\u5177\u6709\u4EE5\u4E0B\u7D44\u4EF6\uFF1A</p><ol><li><strong>\u7A0B\u5E8FID</strong>\uFF1A\u7528\u65BC\u6A19\u8B58\u5C07\u8655\u7406\u8A72\u6307\u4EE4\u7684\u93C8\u4E0A\u7A0B\u5E8F\u3002\u5B83\u8868\u793A\u7232\u6D88\u606F\u4E2D\u8CEC\u6236\u5730\u5740\u7DCA\u6E4A\u6578\u7D44\u7684\u5730\u5740\u7684u8\u7D22\u5F15\u3002</li><li><strong>\u8CEC\u6236\u5730\u5740\u7D22\u5F15\u7684\u7DCA\u6E4A\u6578\u7D44</strong>\uFF1A\u6307\u5411\u7DCA\u6E4A\u8CEC\u6236\u5730\u5740\u6578\u7D44\u4E2D\u9700\u8981\u7C3D\u540D\u7684\u4E00\u90E8\u5206\u8CEC\u6236\u5730\u5740\u7684u8\u7D22\u5F15\u3002</li><li><strong>\u4E0D\u900F\u660E\u7684u8\u6578\u64DA\u7684\u7DCA\u6E4A\u6578\u7D44</strong>\uFF1A\u4E00\u500B\u901A\u7528\u7684\u5B57\u7BC0\u6578\u7D44\uFF0C\u8207\u524D\u9762\u63D0\u5230\u7684\u7A0B\u5E8FID\u76F8\u95DC\u3002\u8A72\u6578\u64DA\u6578\u7D44\u6307\u5B9A\u4E86\u7A0B\u5E8F\u61C9\u57F7\u884C\u7684\u4EFB\u4F55\u64CD\u4F5C\u4EE5\u53CA\u8CEC\u6236\u53EF\u80FD\u4E0D\u5305\u542B\u7684\u4EFB\u4F55\u9644\u52A0\u4FE1\u606F\u3002</li></ol><p><img src="'+m+'" alt="Compact array of Instructions"></p><h2 id="\u50B3\u7D71\u4EA4\u6613\u7684\u554F\u984C" tabindex="-1"><a class="header-anchor" href="#\u50B3\u7D71\u4EA4\u6613\u7684\u554F\u984C" aria-hidden="true">#</a> \u50B3\u7D71\u4EA4\u6613\u7684\u554F\u984C</h2><p>\u4E0A\u8FF0\u4EA4\u6613\u6A21\u578B\u5B58\u5728\u7684\u554F\u984C\u662F\u4EC0\u9EBC?</p><p>\u4EA4\u6613\u7684\u6700\u5927\u5927\u5C0F\u4EE5\u53CA\u56E0\u6B64\u80FD\u5920\u5728\u55AE\u500B\u539F\u5B50\u4EA4\u6613\u4E2D\u5BB9\u7D0D\u7684\u8CEC\u6236\u6578\u91CF\u3002</p><p>\u5982\u524D\u6240\u8FF0\uFF0C\u4EA4\u6613\u7684\u6700\u5927\u5141\u8A31\u5927\u5C0F\u72321232\u5B57\u7BC0\u3002\u4E00\u500B\u8CEC\u6236\u5730\u5740\u7684\u5927\u5C0F\u723232\u5B57\u7BC0\u3002\u56E0\u6B64\uFF0C\u8003\u616E\u5230\u4E00\u4E9B\u7528\u65BC\u982D\u90E8\u3001\u7C3D\u540D\u548C\u5176\u4ED6\u5143\u6578\u64DA\u7684\u7A7A\u9593\uFF0C\u4E00\u500B\u4EA4\u6613\u6700\u591A\u96BB\u80FD\u5B58\u513235\u500B\u8CEC\u6236\u3002</p><p><img src="'+g+'" alt="Issue with legacy transactions"></p><p>\u9019\u662F\u4E00\u500B\u554F\u984C\uFF0C\u56E0\u7232\u6709\u5E7E\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u958B\u767C\u4EBA\u54E1\u9700\u8981\u5728\u55AE\u500B\u4EA4\u6613\u4E2D\u5305\u542B\u6578\u767E\u500B\u7121\u9700\u7C3D\u540D\u7684\u8CEC\u6236\u3002\u4F46\u662F\uFF0C\u50B3\u7D71\u4EA4\u6613\u6A21\u578B\u76EE\u524D\u7121\u6CD5\u5BE6\u73FE\u9019\u4E00\u9EDE\u3002\u76EE\u524D\u4F7F\u7528\u7684\u89E3\u6C7A\u65B9\u6848\u662F\u5728\u93C8\u4E0A\u81E8\u6642\u5B58\u5132\u72C0\u614B\uFF0C\u4E26\u5728\u7A0D\u5F8C\u7684\u4EA4\u6613\u4E2D\u4F7F\u7528\u3002\u4F46\u662F\uFF0C\u7576\u591A\u500B\u7A0B\u5E8F\u9700\u8981\u7D44\u5408\u5728\u55AE\u500B\u4EA4\u6613\u4E2D\u6642\uFF0C\u9019\u7A2E\u89E3\u6C7A\u65B9\u6CD5\u5C31\u4E0D\u9069\u7528\u4E86\u3002\u6BCF\u500B\u7A0B\u5E8F\u90FD\u9700\u8981\u591A\u500B\u8CEC\u6236\u4F5C\u7232\u8F38\u5165\uFF0C\u56E0\u6B64\u6211\u5011\u9677\u5165\u4E86\u8207\u4E4B\u524D\u76F8\u540C\u7684\u554F\u984C\u3002</p><p>\u9019\u5C31\u662F\u5F15\u5165**\u5730\u5740\u67E5\u627E\u8868\uFF08Address Lookup Tables\uFF0CLUT\uFF09**\u7684\u539F\u56E0\u3002</p><h2 id="\u5730\u5740\u67E5\u627E\u8868-address-lookeup-tables" tabindex="-1"><a class="header-anchor" href="#\u5730\u5740\u67E5\u627E\u8868-address-lookeup-tables" aria-hidden="true">#</a> \u5730\u5740\u67E5\u627E\u8868(Address Lookeup Tables)</h2><p>\u5730\u5740\u67E5\u627E\u8868\u7684\u7406\u5FF5\u662F\u5728\u93C8\u4E0A\u4F7F\u7528\u8868\u683C\uFF08\u6578\u7D44\uFF09\u7684\u6578\u64DA\u7D50\u69CB\u5B58\u5132\u8CEC\u6236\u5730\u5740\u3002\u4E00\u65E6\u8CEC\u6236\u5B58\u5132\u5728\u8A72\u8868\u4E2D\uFF0C\u53EF\u4EE5\u5728\u4EA4\u6613\u6D88\u606F\u4E2D\u5F15\u7528\u8A72\u8868\u7684\u5730\u5740\u3002\u7232\u4E86\u6307\u5411\u8868\u4E2D\u7684\u55AE\u500B\u8CEC\u6236\uFF0C\u9700\u8981\u4F7F\u7528\u4E00\u500B\u5B57\u7BC0\u7684u8\u7D22\u5F15\u3002</p><p><img src="'+b+'" alt="LUTs"></p><p>\u9019\u6A23\u505A\u53EF\u4EE5\u7BC0\u7701\u7A7A\u9593\uFF0C\u56E0\u7232\u5730\u5740\u4E0D\u518D\u9700\u8981\u5B58\u5132\u5728\u4EA4\u6613\u6D88\u606F\u4E2D\u3002\u5B83\u5011\u53EA\u9700\u8981\u4EE5\u6578\u7D44\u5F62\u5F0F\u7684\u8868\u683C\u4E2D\u7684\u7D22\u5F15\u9032\u884C\u5F15\u7528\u3002\u9019\u4F7F\u5F97\u6709\u53EF\u80FD\u5F15\u7528256\u500B\u8CEC\u6236\uFF0C\u56E0\u7232\u8CEC\u6236\u4F7F\u7528u8\u7D22\u5F15\u9032\u884C\u5F15\u7528\u3002</p><p>\u7576\u521D\u59CB\u5316\u5730\u5740\u67E5\u627E\u8868\u6216\u5411\u8868\u4E2D\u6DFB\u52A0\u65B0\u5730\u5740\u6642\uFF0C\u9700\u8981\u4F7F\u5730\u5740\u67E5\u627E\u8868\u514D\u9664\u79DF\u91D1\u3002\u5730\u5740\u53EF\u4EE5\u901A\u904E\u93C8\u4E0A\u7DE9\u885D\u5340\u6216\u76F4\u63A5\u901A\u904E<code>Extension</code>\u6307\u4EE4\u5C07\u5176\u8FFD\u52A0\u5230\u8868\u683C\u4E2D\u3002\u6B64\u5916\uFF0C\u5730\u5740\u67E5\u627E\u8868\u9084\u53EF\u4EE5\u5B58\u5132\u76F8\u95DC\u7684\u5143\u6578\u64DA\uFF0C\u5F8C\u9762\u662F\u4E00\u500B\u7DCA\u6E4A\u6578\u7D44\u7684\u8CEC\u6236\u3002\u4E0B\u9762\u662F\u4E00\u500B\u5178\u578B\u5730\u5740\u67E5\u627E\u8868\u7684\u7D50\u69CB\uFF1A</p><p><img src="'+k+`" alt="LUT Format"></p><p>\u5730\u5740\u67E5\u627E\u8868\u7684\u4E00\u500B\u91CD\u8981\u7F3A\u9EDE\u662F\uFF0C\u5728\u4EA4\u6613\u8655\u7406\u904E\u7A0B\u4E2D\uFF0C\u7531\u65BC\u5730\u5740\u67E5\u627E\u9700\u8981\u984D\u5916\u7684\u958B\u92B7\uFF0C\u901A\u5E38\u6703\u5C0E\u81F4\u4EA4\u6613\u7684\u6210\u672C\u8F03\u9AD8\u3002</p><h2 id="\u7248\u672C\u5316\u4EA4\u6613-transactionv0" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u5316\u4EA4\u6613-transactionv0" aria-hidden="true">#</a> \u7248\u672C\u5316\u4EA4\u6613\uFF1A TransactionV0</h2><p>\u50B3\u7D71\u4EA4\u6613\u7684\u7D50\u69CB\u9700\u8981\u4FEE\u6539\u4EE5\u5305\u542B\u5730\u5740\u8868\u67E5\u627E\u3002\u9019\u4E9B\u66F4\u6539\u4E0D\u61C9\u7834\u58DESolana\u4E0A\u7684\u4EA4\u6613\u8655\u7406\uFF0C\u4E5F\u4E0D\u61C9\u5C0D\u88AB\u8ABF\u7528\u7684\u7A0B\u5E8F\u7684\u683C\u5F0F\u7522\u751F\u4EFB\u4F55\u66F4\u6539\u3002</p><p>\u7232\u4E86\u78BA\u4FDD\u4E0A\u8FF0\u60C5\u6CC1\uFF0C\u91CD\u8981\u7684\u662F\u660E\u78BA\u6307\u51FA\u4EA4\u6613\u985E\u578B\uFF1A<code>legacy</code>\uFF08\u50B3\u7D71\uFF09\u6216<code>versioned</code>\uFF08\u7248\u672C\u5316\uFF09\u3002\u6211\u5011\u5982\u4F55\u5728\u4EA4\u6613\u4E2D\u5305\u542B\u9019\u4E9B\u4FE1\u606F\u5462\uFF1F</p><p>\u5728\u5F15\u5165\u7248\u672C\u5316\u4E4B\u524D\uFF0C\u4EA4\u6613\u5728\u5176\u6D88\u606F\u982D\u90E8\u7684<code>num_required_signatures</code>\u5B57\u6BB5\u7684\u7B2C\u4E00\u500B\u5B57\u7BC0\u4E2D\u7559\u4E0B\u4E86\u4E00\u500B\u672A\u4F7F\u7528\u7684\u4E0A\u4F4D\u6BD4\u7279\u3002\u73FE\u5728\uFF0C\u6211\u5011\u53EF\u4EE5\u4F7F\u7528\u9019\u500B\u6BD4\u7279\u4F4D\u4F86\u660E\u78BA\u8072\u660E\u6211\u5011\u7684\u4EA4\u6613\u7248\u672C\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">VersionedMessage</span> <span class="token punctuation">{</span>
    <span class="token class-name">Legacy</span><span class="token punctuation">(</span><span class="token class-name">Message</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token constant">V0</span><span class="token punctuation">(</span><span class="token namespace">v0<span class="token punctuation">::</span></span><span class="token class-name">Message</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u8A2D\u7F6E\u4E86\u7B2C\u4E00\u500B\u6BD4\u7279\u4F4D\uFF0C\u90A3\u9EBC\u7B2C\u4E00\u500B\u5B57\u7BC0\u4E2D\u7684\u5269\u9918\u6BD4\u7279\u5C07\u7528\u65BC\u7DE8\u78BC\u7248\u672C\u865F\u3002Solana\u5F9E\u201C\u7248\u672C0\u201D\u958B\u59CB\uFF0C\u9019\u662F\u958B\u59CB\u4F7F\u7528\u5730\u5740\u67E5\u627E\u8868\u7684\u7248\u672C\u3002</p><p>\u5982\u679C\u672A\u8A2D\u7F6E\u7B2C\u4E00\u500B\u6BD4\u7279\u4F4D\uFF0C\u90A3\u9EBC\u8A72\u4EA4\u6613\u5C07\u88AB\u8996\u7232\u201C\u50B3\u7D71\u4EA4\u6613\u201D\uFF0C\u4E26\u4E14\u7B2C\u4E00\u500B\u5B57\u7BC0\u7684\u5269\u9918\u90E8\u5206\u5C07\u88AB\u8996\u7232\u7DE8\u78BC\u50B3\u7D71\u6D88\u606F\u7684\u7B2C\u4E00\u500B\u5B57\u7BC0\u3002</p><h2 id="messagev0" tabindex="-1"><a class="header-anchor" href="#messagev0" aria-hidden="true">#</a> MessageV0</h2><p>\u65B0\u7684MessageV0\u7684\u7D50\u69CB\u57FA\u672C\u4E0A\u662F\u76F8\u540C\u7684\uFF0C\u53EA\u662F\u6709\u5169\u500B\u5C0F\u4F46\u91CD\u8981\u7684\u8B8A\u5316\uFF1A</p><ol><li><strong>\u6D88\u606F\u982D\u90E8</strong>\uFF1A\u8207\u50B3\u7D71\u7248\u672C\u76F8\u540C\uFF0C\u6C92\u6709\u8B8A\u5316\u3002</li><li><strong>\u7DCA\u6E4A\u8CEC\u6236\u5BC6\u9470\u6578\u7D44</strong>\uFF1A\u8207\u50B3\u7D71\u7248\u672C\u76F8\u540C\uFF0C\u6C92\u6709\u8B8A\u5316\u3002\u6211\u5011\u5C07\u6307\u5411\u8A72\u6578\u7D44\u5143\u7D20\u7684\u7D22\u5F15\u6578\u7D44\u8868\u793A\u7232<em>\u7D22\u5F15\u6578\u7D44A</em>\uFF08\u60A8\u5F88\u5FEB\u5C07\u770B\u5230\u7232\u4EC0\u9EBC\u6211\u5011\u9019\u6A23\u8868\u793A\uFF09\u3002</li><li><strong>\u6700\u8FD1\u7684\u5340\u584A\u54C8\u5E0C</strong>\uFF1A\u8207\u50B3\u7D71\u7248\u672C\u76F8\u540C\uFF0C\u6C92\u6709\u8B8A\u5316\u3002</li><li><strong>\u7DCA\u6E4A\u6307\u4EE4\u6578\u7D44</strong>\uFF1A\u8207\u50B3\u7D71\u7248\u672C\u4E0D\u540C\uFF0C\u767C\u751F\u4E86\u8B8A\u5316\u3002</li><li><strong>\u5730\u5740\u8868\u67E5\u627E\u7684\u7DCA\u6E4A\u6578\u7D44</strong>\uFF1A\u5728\u7248\u672C0\u4E2D\u5F15\u5165\u3002</li></ol><p><img src="`+f+'" alt="Message v0"></p><p>\u5728\u67E5\u770B\u6307\u4EE4\u6578\u7D44\u4E2D\u7684\u8B8A\u5316\u4E4B\u524D\uFF0C\u6211\u5011\u9996\u5148\u8A0E\u8AD6\u5730\u5740\u8868\u67E5\u627E\u7684\u7DCA\u6E4A\u6578\u7D44\u7684\u7D50\u69CB\u3002</p><h3 id="\u5730\u5740\u8868\u67E5\u627E\u7684\u7DCA\u6E4A\u6578\u7D44" tabindex="-1"><a class="header-anchor" href="#\u5730\u5740\u8868\u67E5\u627E\u7684\u7DCA\u6E4A\u6578\u7D44" aria-hidden="true">#</a> \u5730\u5740\u8868\u67E5\u627E\u7684\u7DCA\u6E4A\u6578\u7D44</h3><p>\u9019\u500B\u7D50\u69CB\u5C07\u5730\u5740\u67E5\u627E\u8868\uFF08LUT\uFF09\u5F15\u5165\u5230\u7248\u672C\u5316\u4EA4\u6613\u4E2D\uFF0C\u5F9E\u800C\u4F7F\u5F97\u5728\u55AE\u500B\u4EA4\u6613\u4E2D\u52A0\u8F09\u66F4\u591A\u7684\u53EA\u8B80\u548C\u53EF\u5BEB\u8CEC\u6236\u6210\u7232\u53EF\u80FD\u3002</p><p>\u7DCA\u6E4A\u6578\u7D44\u4EE5\u7DCA\u6E4A\u7684u16\u7DE8\u78BC\u8868\u793A\u5730\u5740\u8868\u67E5\u627E\u7684\u6578\u91CF\uFF0C\u5F8C\u8DDF\u4E00\u500B\u5730\u5740\u8868\u67E5\u627E\u7684\u6578\u7D44\u3002\u6BCF\u500B\u67E5\u627E\u7684\u7D50\u69CB\u5982\u4E0B\uFF1A</p><ol><li><strong>\u8CEC\u6236\u5BC6\u9470</strong>\uFF1A\u5730\u5740\u67E5\u627E\u8868\u7684\u8CEC\u6236\u5BC6\u9470\u3002</li><li><strong>\u53EF\u5BEB\u7D22\u5F15</strong>\uFF1A\u7528\u65BC\u52A0\u8F09\u53EF\u5BEB\u8CEC\u6236\u5730\u5740\u7684\u7DCA\u6E4A\u7D22\u5F15\u6578\u7D44\u3002\u6211\u5011\u5C07\u6B64\u6578\u7D44\u8868\u793A\u7232<em>\u7D22\u5F15\u6578\u7D44B</em>\u3002</li><li><strong>\u53EA\u8B80\u7D22\u5F15</strong>\uFF1A\u7528\u65BC\u52A0\u8F09\u53EA\u8B80\u8CEC\u6236\u5730\u5740\u7684\u7DCA\u6E4A\u7D22\u5F15\u6578\u7D44\u3002\u6211\u5011\u5C07\u6B64\u6578\u7D44\u8868\u793A\u7232<em>\u7D22\u5F15\u6578\u7D44C</em>\u3002</li></ol><p><img src="'+v+'" alt="Compact array of LUTs"></p><p>\u73FE\u5728\u8B93\u6211\u5011\u770B\u770B\u6307\u4EE4\u7DCA\u6E4A\u6578\u7D44\u4E2D\u505A\u4E86\u54EA\u4E9B\u6539\u8B8A\u3002</p><h3 id="\u7DCA\u6E4A\u6307\u4EE4\u6578\u7D44-1" tabindex="-1"><a class="header-anchor" href="#\u7DCA\u6E4A\u6307\u4EE4\u6578\u7D44-1" aria-hidden="true">#</a> \u7DCA\u6E4A\u6307\u4EE4\u6578\u7D44</h3><p>\u5982\u524D\u6240\u8FF0\uFF0C\u50B3\u7D71\u6307\u4EE4\u7684\u7DCA\u6E4A\u6578\u7D44\u5B58\u5132\u4E86\u5404\u500B\u50B3\u7D71\u6307\u4EE4\uFF0C\u800C\u9019\u4E9B\u6307\u4EE4\u53C8\u5206\u5225\u5B58\u5132\u4E86\u4EE5\u4E0B\u5167\u5BB9\uFF1A</p><ol><li>\u7A0B\u5E8FID\u7D22\u5F15</li><li>\u8CEC\u6236\u5730\u5740\u7D22\u5F15\u7684\u7DCA\u6E4A\u6578\u7D44</li><li>\u4E0D\u900F\u660E\u76848\u4F4D\u6578\u64DA\u7684\u7DCA\u6E4A\u6578\u7D44</li></ol><p>\u65B0\u6307\u4EE4\u4E2D\u7684\u8B8A\u5316\u4E0D\u5728\u65BC\u6307\u4EE4\u672C\u8EAB\u7684\u7D50\u69CB\uFF0C\u800C\u662F\u5728\u65BC\u7528\u65BC\u7372\u53D6\u7B2C1\u548C\u7B2C2\u9805\u7D22\u5F15\u7684\u6578\u7D44\u3002\u5728\u50B3\u7D71\u4EA4\u6613\u4E2D\uFF0C\u4F7F\u7528\u4E86\u7D22\u5F15\u6578\u7D44A\u7684\u5B50\u96C6\uFF0C\u800C\u5728\u7248\u672C\u5316\u4EA4\u6613\u4E2D\uFF0C\u5247\u4F7F\u7528\u4E86\u4EE5\u4E0B\u7D44\u5408\u6578\u7D44\u7684\u5B50\u96C6\uFF1A</p><ol><li><strong>\u7D22\u5F15\u6578\u7D44A</strong>\uFF1A\u5B58\u5132\u5728\u6D88\u606F\u4E2D\u7684\u7DCA\u6E4A\u8CEC\u6236\u6578\u7D44\u3002</li><li><strong>\u7D22\u5F15\u6578\u7D44B</strong>\uFF1A\u5730\u5740\u8868\u67E5\u627E\u4E2D\u7684\u53EF\u5BEB\u7D22\u5F15\u3002</li><li><strong>\u7D22\u5F15\u6578\u7D44C</strong>\uFF1A\u5730\u5740\u8868\u67E5\u627E\u4E2D\u7684\u53EA\u8B80\u7D22\u5F15\u3002</li></ol><p><img src="'+y+`" alt="New Compact array of Instructions"></p><h2 id="rpc\u8B8A\u66F4" tabindex="-1"><a class="header-anchor" href="#rpc\u8B8A\u66F4" aria-hidden="true">#</a> RPC\u8B8A\u66F4</h2><p>\u4E8B\u52D9\u97FF\u61C9\u5C07\u9700\u8981\u4E00\u500B\u65B0\u7684\u7248\u672C\u5B57\u6BB5\uFF1A<code>maxSupportedTransactionVersion</code>\uFF0C\u4EE5\u5411\u5BA2\u6236\u7AEF\u6307\u793A\u9700\u8981\u9075\u5FAA\u7684\u4E8B\u52D9\u7D50\u69CB\u4EE5\u9032\u884C\u53CD\u5E8F\u5217\u5316\u3002</p><p>\u4EE5\u4E0B\u65B9\u6CD5\u9700\u8981\u9032\u884C\u66F4\u65B0\u4EE5\u907F\u514D\u932F\u8AA4\uFF1A</p><ul><li><code>getTransaction</code></li><li><code>getBlock</code></li></ul><p>\u8ACB\u6C42\u4E2D\u9700\u8981\u6DFB\u52A0\u4EE5\u4E0B\u53C3\u6578\uFF1A</p><p><code>maxSupportedTransactionVersion: 0</code></p><p>\u5982\u679C\u8ACB\u6C42\u4E2D\u6C92\u6709\u986F\u5F0F\u6DFB\u52A0<code>maxSupportedTransactionVersion</code>\uFF0C\u4E8B\u52D9\u7248\u672C\u5C07\u56DE\u9000\u5230<code>legacy</code>\u3002\u4EFB\u4F55\u5305\u542B\u7248\u672C\u5316\u4E8B\u52D9\u7684\u5340\u584A\uFF0C\u5728\u5B58\u5728\u50B3\u7D71\u4E8B\u52D9\u7684\u60C5\u6CC1\u4E0B\u5C07\u8FD4\u56DE\u5BA2\u6236\u7AEF\u932F\u8AA4\u3002</p><p>\u4F60\u53EF\u4EE5\u901A\u904E\u5411RPC\u7AEF\u9EDE\u767C\u9001JSON\u683C\u5F0F\u7684\u8ACB\u6C42\u4F86\u8A2D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>curl http://localhost:8899 -X POST -H &quot;Content-Type: application/json&quot; -d \\
&#39;{&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;id&quot;:1, &quot;method&quot;: &quot;getBlock&quot;, &quot;params&quot;: [430, {
  &quot;encoding&quot;:&quot;json&quot;,
  &quot;maxSupportedTransactionVersion&quot;:0,
  &quot;transactionDetails&quot;:&quot;full&quot;,
  &quot;rewards&quot;:false
}]}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,63),K=a("\u4F60\u9084\u53EF\u4EE5\u4F7F\u7528 "),G={href:"https://solana-labs.github.io/solana-web3.js/",target:"_blank",rel:"noopener noreferrer"},J=s("code",null,"@solana/web3.js",-1),O=a(" \u5EAB\u57F7\u884C\u76F8\u540C\u64CD\u4F5C\u3002"),Q=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// connect to the \`devnet\` cluster and get the current \`slot\`</span>
<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">web3<span class="token punctuation">.</span>Connection</span><span class="token punctuation">(</span>web3<span class="token punctuation">.</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&quot;devnet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> slot <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getSlot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// get the latest block (allowing for v0 transactions)</span>
<span class="token keyword">const</span> block <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getBlock</span><span class="token punctuation">(</span>slot<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">maxSupportedTransactionVersion</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// get a specific transaction (allowing for v0 transactions)</span>
<span class="token keyword">const</span> getTx <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getTransaction</span><span class="token punctuation">(</span>
  <span class="token string">&quot;3jpoANiFeVGisWRY5UP648xRXs3iQasCHABPWRWnoEjeA93nc79WrnGgpgazjq4K9m8g2NJoyKoWBV1Kx5VmtwHQ&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">maxSupportedTransactionVersion</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u5176\u4ED6\u8CC7\u6599" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u8CC7\u6599" aria-hidden="true">#</a> \u5176\u4ED6\u8CC7\u6599</h2>`,2),X={href:"https://beta.docs.solana.com/developing/versioned-transactions#how-create-a-versioned-transaction",target:"_blank",rel:"noopener noreferrer"},z=a("\u5982\u4F55\u69CB\u5EFA\u4E00\u500B\u7248\u672C\u5316\u4E8B\u52D9"),Y={href:"https://beta.docs.solana.com/developing/lookup-tables#how-to-create-an-address-lookup-table",target:"_blank",rel:"noopener noreferrer"},Z=a("\u5982\u4F55\u4F7F\u7528\u5730\u5740\u67E5\u627E\u8868\uFF08LUTs\uFF09\u69CB\u5EFA\u7248\u672C\u5316\u4E8B\u52D9"),$={href:"https://beta.docs.solana.com/proposals/transactions-v2#limitations",target:"_blank",rel:"noopener noreferrer"},ss=a("\u7248\u672C\u5316\u4EA4\u6613\u7684\u9650\u5236"),as={href:"https://beta.docs.solana.com/proposals/transactions-v2#security-concerns",target:"_blank",rel:"noopener noreferrer"},ns=a("\u7248\u672C\u5316\u4EA4\u6613\u7684\u5B89\u5168\u6027\u554F\u984C"),es={href:"https://beta.docs.solana.com/proposals/transactions-v2#other-proposals",target:"_blank",rel:"noopener noreferrer"},ts=a("\u7248\u672C\u5316\u4EA4\u6613\u7684\u66FF\u4EE3\u6027\u89E3\u6C7A\u65B9\u6848"),os=s("h2",{id:"\u53C3\u8003\u8CC7\u6599",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53C3\u8003\u8CC7\u6599","aria-hidden":"true"},"#"),a(" \u53C3\u8003\u8CC7\u6599")],-1),rs={href:"https://beta.docs.solana.com/proposals/transactions-v2",target:"_blank",rel:"noopener noreferrer"},ps=a("Transactions-V2 Proposal"),ls={href:"https://beta.docs.solana.com/developing/versioned-transactions",target:"_blank",rel:"noopener noreferrer"},cs=a("\u4F7F\u7528\u7248\u672C\u5316\u4EA4\u6613\u4F86\u958B\u767C");function is(ds,us){const n=r("ExternalLinkIcon");return p(),l(c,null,[w,s("p",null,[q,s("a",T,[V,e(n)]),L]),S,s("ol",null,[s("li",null,[C,s("a",A,[U,e(n)]),j]),B]),I,s("div",M,[N,P,s("ol",null,[s("li",null,[F,s("a",E,[H,e(n)])]),R]),W]),D,s("p",null,[K,s("a",G,[J,e(n)]),O]),Q,s("ul",null,[s("li",null,[s("a",X,[z,e(n)])]),s("li",null,[s("a",Y,[Z,e(n)])]),s("li",null,[s("a",$,[ss,e(n)])]),s("li",null,[s("a",as,[ns,e(n)])]),s("li",null,[s("a",es,[ts,e(n)])])]),os,s("ul",null,[s("li",null,[s("a",rs,[ps,e(n)])]),s("li",null,[s("a",ls,[cs,e(n)])])])],64)}var _s=o(x,[["render",is]]);export{_s as default};
