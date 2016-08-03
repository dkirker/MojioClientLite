!function(){var t=function(t){var e=function(t){var e="";if("string"==typeof t)e=t;else{var n=[];for(var r in t)t.hasOwnProperty(r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));e=n.join("&")}return e},n={ajax:function(t,n,r,i){return new Promise(function(s,o){var u;u="undefined"!=typeof module&&"undefined"!=typeof module.exports?require("xmlhttprequest").XMLHttpRequest:XMLHttpRequest;var c=new u;r=r||{},i=i||{};var p=e(r);"GET"===t&&p&&(n+="?"+p,p=null),c.open(t,n);var h="application/x-www-form-urlencoded";for(var a in i)i.hasOwnProperty(a)&&("content-type"===a.toLowerCase()?h=i[a]:c.setRequestHeader(a,i[a]));c.setRequestHeader("Content-type",h),"application/json"===h?p=JSON.stringify(r):"multipart/form-data"===h&&(p=r),c.send(p),c.onload=function(){this.status>=200&&this.status<300?s(this.responseText):o(this.statusText)},c.onerror=function(){o(this.statusText)}})}};return{get:function(e,r){return n.ajax("GET",t,e,r)},post:function(e,r){return n.ajax("POST",t,e,r)},put:function(e,r){return n.ajax("PUT",t,e,r)},"delete":function(e,r){return n.ajax("DELETE",t,e,r)}}},e=function(t){var e;return e=[].slice.call(arguments,1),e.forEach(function(e){var n;for(n in e)t[n]=e[n]}),t},n="ACCESSTOKEN",r=function(t,e){return function(){return t.apply(e,arguments)}},i=function(t,e){return 0==e.indexOf("http://")||0==e.indexOf("https://")?e:(sep="","/"!=t.charAt(t.length-1)&&"/"!=e.charAt(0)&&(sep="/"),t+sep+e)},s=function(){function s(t){this.authorize=r(this.authorize,this),this.token=r(this.token,this),this.header=r(this.header,this),this.query=r(this.query,this),this.getPath=r(this.getPath,this),this.get=r(this.get,this),this.push=r(this.push,this),this.put=r(this.put,this),this.post=r(this.post,this),this["delete"]=r(this["delete"],this),this.permissions=r(this.permissions,this),this.image=r(this.image,this),this.tags=r(this.tags,this),this.app=r(this.app,this),this.vehicle=r(this.vehicle,this),this.user=r(this.user,this),this.geofence=r(this.geofence,this),this.group=r(this.group,this),this.trip=r(this.trip,this),this.mojio=r(this.mojio,this),this.refreshToken=r(this.refreshToken,this);var n={environment:"",accountsURL:"accounts.moj.io",apiURL:"api.moj.io",pushURL:"push.moj.io",wsURL:"api.moj.io",redirect_uri:"undefined"!=typeof window?window.location.href.replace("http:","https:").split("#")[0]:"",scope:"admin",acceptLanguage:"en",tokenRequester:function(){return document.location.hash.match(/access_token=([0-9a-f-]{36})/)[1]}},i="https://",s="wss://";this.config=e({},n,t),""!==this.config.environment&&(i=i+this.config.environment+"-",s=s+this.config.environment+"-"),this.config.accountsURL=i+this.config.accountsURL,this.config.apiURL=i+this.config.apiURL,this.config.pushURL=i+this.config.pushURL,this.config.wsURL=s+this.config.wsURL}return s.prototype.authorize=function(n,r){if(n){var s=this;return header={"Content-Type":"x-www-form-urlencoded"},data={userName:n,password:r,grant_type:"password",client_id:s.config.application,client_secret:s.config.secret},new Promise(function(n,r){return t(i(s.config.accountsURL,"/oauth2/token")).post(data,e({},s.header(),header)).then(function(t){return res=JSON.parse(t),s.config.access_token=res.access_token,s.config.refresh_token=res.refresh_token,n(res)},function(t){return r(t)})})}window.location.href=this.config.accountsURL+"/OAuth2/authorize?"+"response_type=token&client_id="+this.config.application+"&redirect_uri="+this.config.redirect_uri+"&scope="+this.config.scope},s.prototype.refreshToken=function(n,r){var s=this;return header={"Content-Type":"x-www-form-urlencoded"},data={refresh_token:s.config.refresh_token,grant_type:"refresh_token",client_id:s.config.application,client_secret:s.config.secret},new Promise(function(n,r){return t(i(s.config.accountsURL,"/oauth2/token")).post(data,e({},s.header(),header)).then(function(t){return res=JSON.parse(t),s.config.access_token=res.access_token,s.config.refresh_token=res.refresh_token,n(res)},function(t){return r(t)})})},s.prototype.token=function(){var t=window.location.toString().split("#")[1],e=!1;if("undefined"!=typeof t&&t.indexOf("access_token=")!==-1)try{var r=this.config.tokenRequester();r&&(this.config.access_token=r,sessionStorage.setItem(n,this.config.access_token),e=!0)}catch(i){e=!1}else{var s=sessionStorage[n];null!=s&&null!==s&&0!==s.length&&(this.config.access_token=s,e=!0)}return e},s.prototype.header=function(){return{Accept:"application/json",Authorization:"Bearer "+this.config.access_token,"Accept-Language":this.config.acceptLanguage,"Content-Type":"application/json"}},s.prototype.query=function(){var t=function(){function t(){this.prepare=r(this.prepare,this),this.orderby=r(this.orderby,this),this.select=r(this.select,this),this.filter=r(this.filter,this),this.skip=r(this.skip,this),this.top=r(this.top,this),this.data={}}return t.prototype.top=function(t){return this.data.top=t,this},t.prototype.skip=function(t){return this.data.skip=t,this},t.prototype.filter=function(t){return this.data.filter=t,this},t.prototype.select=function(t){return this.data.select=t,this},t.prototype.orderby=function(t){return this.data.orderby=t,this},t.prototype.prepare=function(){return this.data},t}();return new t},s.prototype.getPath=function(n,r,s){var o=this;return r=r||{},null!=r.prepare&&(r=r.prepare()),new Promise(function(u,c){return t(i(o.config.apiURL,n)).get(r,e({},o.header(),s||{})).then(function(t){return u(JSON.parse(t))},function(t){return c(t)})})},s.prototype.get=function(){var t=this;return 0===arguments.length?{me:function(e,n){return t.getPath("/v2/me",e,n)},users:function(e,n){return t.getPath("/v2/users",e,n)},mojios:function(e,n){return t.getPath("/v2/mojios",e,n)},vehicles:function(e,n){return t.getPath("/v2/vehicles",e,n)},apps:function(e,n){return t.getPath("/v2/apps",e,n)},groups:function(e,n){return t.getPath("/v2/groups",e,n)},trips:function(e,n){return t.getPath("/v2/trips",e,n)},geofences:function(e,n){return t.getPath("/v2/geofences",e,n)},user:function(e){return t.getPath("/v2/users/"+e)},mojio:function(e){return t.getPath("/v2/mojios/"+e)},vehicle:function(e){return t.getPath("/v2/vehicles/"+e)},app:function(e){return t.getPath("/v2/apps/"+e)},group:function(e){return t.getPath("/v2/groups/"+e)},trip:function(e){return t.getPath("/v2/trips/"+e)},geofence:function(e){return t.getPath("/v2/geofences/"+e)}}:this.getPath(arguments[0],arguments[1]||{})},s.prototype.push=function(){return 0===arguments.length?{mojios:function(){return push("/v2/mojios")},vehicles:function(){return push("/v2/vehicles")},mojio:function(t){return push("/v2/mojios/"+t.Id)},vehicle:function(t){return push("/v2/vehicles/"+t.Id)}}:new WebSocket(this.config.wsURL+arguments[0],this.config.access_token)},s.prototype.put=function(n,r,s){var o=this;return new Promise(function(u,c){return t(i(o.config.apiURL,n)).put(r||{},e({},o.header(),s||{})).then(function(t){return u(JSON.parse(t))},function(t){return c(t)})})},s.prototype.post=function(n,r,s){var o=this;return new Promise(function(u,c){return t(i(o.config.apiURL,n)).post(r||{},e({},o.header(),s||{})).then(function(t){return u(JSON.parse(t))},function(t){return c(t)})})},s.prototype["delete"]=function(n,r,s){var o=this;return new Promise(function(u,c){return t(i(o.config.apiURL,n))["delete"](r||{},e({},o.header(),s||{})).then(function(t){return u(JSON.parse(t))},function(t){return c(t)})})},s.prototype.permissions=function(t,e){var n=this;return{get:function(){return n.getPath(t+"/"+e+"/permissions")},"delete":function(){return n["delete"](t+"/"+e+"/permissions")},put:function(r){return n.put(t+"/"+e+"/permissions",r)},post:function(r){return n.post(t+"/"+e+"/permissions",r)}}},s.prototype.image=function(t,e){var n=this;return{get:function(){return n.getPath(t+"/"+e+"/image")},"delete":function(){return n["delete"](t+"/"+e+"/image")},put:function(r){return n.put(t+"/"+e+"/image",r,{"Content-Type":"multipart/form-data"})},post:function(r){return n.post(t+"/"+e+"/image",r,{"Content-Type":"multipart/form-data"})}}},s.prototype.tags=function(t,e){var n=this;return{"delete":function(r){return n["delete"](t+"/"+e+"/tags/"+r)},post:function(r){return n.post(t+"/"+e+"/tags/"+r)}}},s.prototype.app=function(t){var e=this;return{put:function(){return e.put("/v2/apps/"+t.Id,t)},post:function(){return e.post("/v2/apps",t)},"delete":function(){return e["delete"]("/v2/apps/"+t.Id)},secret:function(){return{get:function(){return e.getPath("/v2/apps/"+t.Id+"/secret")},"delete":function(){return e["delete"]("/v2/apps/"+t.Id+"/secret")}}},image:function(){return e.image("/v2/apps",t.Id)},permission:function(){return e.getPath("/v2/apps/"+t.Id+"/permission")},permissions:function(){return e.permissions("/v2/apps",t.Id)},tags:function(){return e.tags("/v2/apps",t.Id)}}},vehicle=function(t){var e=this;return{put:function(){return e.put("/v2/vehicles/"+t.Id,t)},post:function(){return e.post("/v2/vehicles",t)},"delete":function(){return e["delete"]("/v2/vehicles/"+t.Id)},address:function(){return e.getPath("/v2/vehicles/"+t.Id+"/address")},trips:function(n){return e.getPath("/v2/vehicles/"+t.Id+"/trips",n)},vin:function(){return e.getPath("/v2/vehicles/"+t.Id+"/vin")},serviceschedule:function(){return e.getPath("/v2/vehicles/"+t.Id+"/serviceschedule")},serviceschedulenext:function(){return e.getPath("/v2/vehicles/"+t.Id+"/serviceschedulenext")},history:function(){return{states:function(){return e.getPath("/v2/vehicles/"+t.Id+"/history/states")},locations:function(){return e.getPath("/v2/vehicles/"+t.Id+"/history/locations")}}},image:function(){return e.image("/v2/vehicles",t.Id)},permission:function(){return e.getPath("/v2/vehicles/"+t.Id+"/permission")},permissions:function(){return e.permissions("/v2/vehicles",t.Id)},tags:function(){return e.tags("/v2/vehicles",t.Id)}}},user=function(t){var e=this;return{put:function(){return e.put("/v2/users/"+t.Id,t)},post:function(){return e.post("/v2/users",t)},"delete":function(){return e["delete"]("/v2/users/"+t.Id)},vehicles:function(){return e.getPath("/v2/users/"+t.Id+"/vehicles")},mojios:function(){return e.getPath("/v2/users/"+t.Id+"/mojios")},trips:function(){return e.getPath("/v2/users/"+t.Id+"/trips")},groups:function(){return e.getPath("/v2/users/"+t.Id+"/groups")},image:function(){return e.image("/v2/users",t.Id)},permission:function(){return e.getPath("/v2/users/"+t.Id+"/permission")},permissions:function(){return e.permissions("/v2/users",t.Id)},tags:function(){return e.tags("/v2/users",t.Id)}}},geofence=function(t){var e=this;return{put:function(){return e.put("/v2/geofences/"+t.Id,t)},post:function(){return e.post("/v2/geofences",t)},"delete":function(){return e["delete"]("/v2/geofences/"+t.Id)}}},group=function(t){var e=this;return{put:function(){return e.put("/v2/groups/"+t.Id,t)},post:function(){return e.post("/v2/groups",t)},"delete":function(){return e["delete"]("/v2/groups/"+t.Id)},users:function(){return{get:function(){return e.getPath("/v2/groups/"+t.Id+"/users")},"delete":function(){return e["delete"]("/v2/groups/"+t.Id+"/users")},put:function(n){return e.put("/v2/groups/"+t.Id+"/users",n)},post:function(n){return e.post("/v2/groups/"+t.Id+"/users",n)}}},permission:function(){return e.getPath("/v2/groups/"+t.Id+"/permission")},permissions:function(){return e.permissions("/v2/groups",t.Id)},tags:function(){return e.tags("/v2/groups",t.Id)}}},trip=function(t){var e=this;return{put:function(){return e.put("/v2/trips/"+t.Id,t)},"delete":function(){return e["delete"]("/v2/trips/"+t.Id)},history:function(){return{states:function(){return e.getPath("/v2/trips/"+t.Id+"/history/states")},locations:function(){return e.getPath("/v2/trips/"+t.Id+"/history/locations")}}},permission:function(){return e.getPath("/v2/trips/"+t.Id+"/permission")},permissions:function(){return e.permissions("/v2/trips",t.Id)},tags:function(){return e.tags("/v2/trips",t.Id)}}},mojio=function(t){var e=this;return{put:function(){return e.put("/v2/mojios"+"/"+t.Id,t)},post:function(){return e.post("/v2/mojios",t)},"delete":function(){return e["delete"]("/v2/mojios"+"/"+t.Id)},permission:function(){return e.getPath("/v2/mojios"+"/"+t.Id+"/permission")},permissions:function(){return e.permissions("/v2/mojios",t.Id)},tags:function(){return e.tags("/v2/mojios",t.Id)}}},s}();"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=s:"function"==typeof define&&define.amd?define([],function(){return s}):window.MojioClientLite=s}();
//# sourceMappingURL=src/MojioClientLite-min.map