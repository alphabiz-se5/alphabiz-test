(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{d37d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticStyle:{padding:"0",margin:"0"},attrs:{padding:""}},[s("div",{staticStyle:{padding:"0",margin:"0",height:"calc(100vh - 50px)"},attrs:{id:"player-container",lang:t.lang}},[s("input",{ref:"file",staticStyle:{display:"none"},attrs:{id:"media-file-upload",type:"file","data-cy":"file-input"},on:{input:t.change}}),s("input",{ref:"subtitle",staticStyle:{display:"none"},attrs:{type:"file",accept:".srt,.vtt"},on:{input:t.manualAddSubtitle}}),s("div",{staticStyle:{height:"100%"},attrs:{id:"video-container"}},[s("div",{staticClass:"container"},[s("video",{ref:"video",staticClass:"video-js vjs-default-skin vjs-16-9 vjs-big-play-centered vjs-fluid",staticStyle:{height:"100%"},attrs:{crossorigin:"anonymous",id:"my-video"}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isAudio,expression:"isAudio"}],staticClass:"audio-info-container"},[s("p",{staticClass:"info"},[t._v("This is an audio file")]),s("img",{attrs:{src:"favicon.ico",alt:"favicon",width:"60px"}})])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSplash,expression:"showSplash"}],attrs:{id:"video-splash"}},[s("div",{staticClass:"loading"},[s("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"24px",color:"primary"}}),s("p",[t._v(t._s(t.videoLoadingHint))])],1)])])},r=[],a=(s("5319"),s("ddb0"),s("2b3d"),s("9861"),s("f0e2")),n=(s("fda2"),s("4e68"),s("3708")),o=s.n(n),l=(s("7f10"),s("6922")),d=s.n(l);const c=s("3e8f"),u=s("df7c");function h(t){if(!c.existsSync(t))return[];const e=u.dirname(t.path),s=u.extname(t.path),i=t.name.substring(0,t.name.lastIndexOf("."));console.log(e,i,s);const r=v(e,i),a=m(e,r),n=b(e,i),o=g(e,n);return[...a,...o]}function p(t){if(!c.existsSync(t))return[];const e=u.dirname(t.path),s=t.name.substring(0,t.name.lastIndexOf(".")),i=y(e,s);return f(e,i)}function y(t,e){let s;try{s=c.readdirSync(t),s=s.filter((t=>t.startsWith(e)&&t.endsWith(".ass")))}catch(i){console.log(i)}return s}function f(t,e){const s=[];try{e.forEach(((e,i,r)=>{r[i]=t+"/"+e;const a=c.readFileSync(r[i],"utf-8"),n=u.extname(e.substring(0,e.lastIndexOf("."))).substring(1);s.push({src:URL.createObjectURL(new Blob([a])),label:n})}))}catch(i){console.log(i)}return console.log(s),s}function g(t,e){const s=[];try{e.forEach(((e,i,r)=>{r[i]=t+"/"+e;const a=c.readFileSync(r[i],"utf-8"),n=u.extname(e.substring(0,e.lastIndexOf("."))).substring(1);s.push({src:URL.createObjectURL(new Blob([S(a)])),label:n})}))}catch(i){console.log(i)}return console.log(s),s}function m(t,e){const s=[];try{e.forEach(((e,i,r)=>{r[i]=t+"/"+e;const a=c.readFileSync(r[i],"utf-8"),n=u.extname(e.substring(0,e.lastIndexOf("."))).substring(1);s.push({src:URL.createObjectURL(new Blob([a])),label:n})}))}catch(i){console.log(i)}return console.log(s),s}function v(t,e){let s;try{s=c.readdirSync(t),s=s.filter((t=>t.startsWith(e)&&t.endsWith(".vtt")))}catch(i){console.log(i)}return s}function b(t,e){let s;try{s=c.readdirSync(t),s=s.filter((t=>t.startsWith(e)&&t.endsWith(".srt")))}catch(i){console.log(i)}return s}function S(t){var e=t.replace(/\r+/g,"");e=e.replace(/^\s+|\s+$/g,"");var s=e.split("\n\n"),i="";if(s.length>0){i+="WEBVTT\n\n";for(var r=0;r<s.length;r+=1)i+=$(s[r])}return i}function $(t){var e="",s=t.split(/\n/);while(s.length>3){for(var i=3;i<s.length;i++)s[2]+="\n"+s[i];s.splice(3,s.length-3)}var r=0;if(!s[0].match(/\d+:\d+:\d+/)&&s[1].match(/\d+:\d+:\d+/)&&(e+=s[0].match(/\w+/)+"\n",r+=1),!s[r].match(/\d+:\d+:\d+/))return"";var a=s[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);return a?(e+=a[1]+":"+a[2]+":"+a[3]+"."+a[4]+" --\x3e "+a[5]+":"+a[6]+":"+a[7]+"."+a[8]+"\n",r+=1,s[r]&&(e+=s[r]+"\n\n"),e):""}s("5898");const x=s("ed08").isElectron();function w(t){if(!x||"string"!==typeof t)return t;const e=s("df7c"),i=e.basename(t);return{name:i,path:t}}const T=s("ed08").isElectron();let B=null,P=null;T&&(B=s("bdb9").remote,P=s("bdb9").ipcRenderer),window.videojs=a["default"],window.libjass=o.a,s("d80d"),s("01a0"),s("8d5e"),function(){const t=a["default"].getComponent("Button");a["default"].registerComponent("FileButton",a["default"].extend(t,{constructor:function(){t.apply(this,arguments);const e=arguments[1];this._text=e.text||"Open File...",this.el_.innerHTML=`<span class="open" title="${this._text}"></span>`}})),a["default"].registerComponent("SubsButton",a["default"].extend(t,{constructor:function(){t.apply(this,arguments);const e=arguments[1];this._text=e.text||"Add subtitles...",this.el_.innerHTML=`<span class="subs" title="${this._text}"></span>`}}));const e=a["default"].getComponent("MenuItem");a["default"].registerComponent("AddSubButton",a["default"].extend(e,{constructor:function(){e.apply(this,arguments);const t=arguments[1];this._text=t.text||"Add subtitles...",this.el_.innerHTML+=`<span>${this._text}</span>`}}))}();var C={name:"Player",inject:["rootApp","io"],data(){return{sb:[],player:null,pipStatus:!1,subsBtn:null,progressInterval:null,progress:0,videoLoadingHint:"",showSplash:!1,isAudio:!1}},computed:{lang(){const t=this.$store.state.setting.settings.language?this.$store.state.setting.settings.language.value:"en-US";return this.player&&this.player.language(t),t}},methods:{splashShow(){this.showSplash=!0},splashHide(){this.showSplash=!1},openFile(){this.$refs.file.click()},async addSubtitle(t,e){var s;let i=t;if("string"===typeof t){if(t.startsWith("blob:"))return;i=t.startsWith("play://")?w(t.replace("play://","")):w(t)}if(e||(e=(null===(s=i)||void 0===s?void 0:s.name)||""),!T){const t=e.match(/\.[^.]+$/)[0];if(!t)return;if(![".srt",".vtt"].includes(t.toLowerCase()))return;const s=".vtt"===t.toLowerCase();return this.player.ass({subtitles:[]}),new Promise((t=>{const r=new FileReader;r.onload=i=>{const r=s?i.target.result:S(i.target.result);this.player.addRemoteTextTrack({src:URL.createObjectURL(new Blob([r])),kind:"captions",label:e},!0),this.subsBtn.addClass("hidden"),t()},r.readAsText(i)}))}console.log("sub",i,e);let r=!1;h(i).forEach(((t,s)=>{r=!0,this.player.addRemoteTextTrack({kind:"captions",label:t.label||e,src:t.src},!0)})),this.player.ass({subtitles:[]}),p(i).forEach((t=>{r=!0,this.player.ass().addSubtitle(t.src,t.label||e)})),r&&this.subsBtn.addClass("hidden");const a=this.player.textTracks();a&&a[0]&&(a[0].mode="showing")},async manualAddSubtitle(t){const e=t.target.files;if(!e.length)return;const s=e[0];await this.addSubtitle(s,s.name);let i=-1;const r=this.player.textTracks();setTimeout((()=>{for(let t=0;t<r.length;t++)r[t].label===s.name&&(i=t),r[t].mode="disabled";-1!==i&&(r[i].mode="showing"),this.appendAddSubBtn(),t.target.value=""}),500)},appendAddSubBtn(){if(!T)return;const t=this;setTimeout((()=>{const e=this.player.controlBar.subsCapsButton,s=e.menu.children();if(!s)return;if(s.some((t=>"AddSubButton"===t.name_)))return;const i=e.menu.addChild("AddSubButton",{text:t.$t("add_subtitles")},2);i.addClass("add-sub-btn"),i.on("click",(()=>this.$refs.subtitle.click()))}),1e3)},updatePlayer(t){if(!t)return;this.player||this.loadPlayer();let e="string"===typeof t?t:URL.createObjectURL(t);console.log(t,e),this.$store.dispatch("currentVideoUrlMutation",e),e.startsWith("play://")&&(e+=`?infoHash=${this.$store.state.video.currentVideo.infoHash}`),this.player.src([{src:e,type:"video/mp4"}]),T&&this.subsBtn.removeClass("hidden"),this.$refs.subtitle.value="";var s=this.player.remoteTextTracks(),i=s.length;for(let n=i-1;n>=0;n--)this.player.removeRemoteTextTrack(s[n]);if(this.addSubtitle(t,t.name),!B||!B.splayerx)return this.appendAddSubBtn();const r=B.splayerx,a=t.path;r.getMediaInfo(a,(t=>{const{streams:e}=JSON.parse(t),s=e.filter((t=>"subtitle"===t.codec_type));let i=!1;r.stopExtractSubtitles();const n=(t,e)=>{if(!t[e])return void this.appendAddSubBtn();const{index:s,tags:o}=t[e];if(!o)return n(t,e+1);let l="";const d=c=>{r.extractSubtitles(a,s,c,!0,10,((s,r,a,c)=>{if(a)return console.log(o),n(t,e+1);c&&(l+=c.toString("utf8")),"EOF"===s?(l.length&&this.player.ass().addSubtitle(URL.createObjectURL(new Blob([l])),o.title),i||(i=!0,this.subsBtn.addClass("hidden")),n(t,e+1)):d(r)}))};d(0)};n(s,0)}))},change(t){console.log("Open Media File: "+t.target.files[0].name),0!==t.target.files.length&&(this.updatePlayer(t.target.files[0]),setTimeout((()=>{this.player.play(),this.$refs.file.value=null}),500))},loadPlayer(t=!1){if(a["default"].getPlayer("my-video")&&!t)return void(this.player=a["default"].getPlayer("my-video"));if(t&&(Object(a["default"])("my-video")&&Object(a["default"])("my-video").dispose(),document.querySelector("#video-container .container").innerHTML='<video\n          crossorigin="anonymous"\n          id="my-video"\n          class="video-js vjs-default-skin vjs-16-9 vjs-big-play-centered vjs-fluid"\n          ref="video"\n          style="height:100%"\n        ></video>'),this.player=Object(a["default"])("my-video",{plugins:{hotkeys:d.a},autoplay:!0,preload:"auto",controls:!0,controlBar:{volumePanel:{inline:!1},subtitlesButton:!1}}),this.player.on("change",(()=>{console.log("changed")})),this.player.on("ready",(()=>{const t=this.$store.state.video.currentVideo.remotePlay;t&&T?(this.splashShow(),this.videoLoadingHint=this.$t("waiting_for_torrent"),P.send("get-stream-address"),P.once("stream-address",((t,e)=>{this.splashHide(),this.videoLoadingHint="";const{address:s}=e;console.log("Stream play",e,s),this.$store.dispatch("currentVideoUrlMutation",s);try{this.player.src([{src:s,type:"video/mp4"}]);const t=()=>{console.log("start playing"),this.player.currentTime(this.$store.state.video.currentVideo.currentTime),this.$store.dispatch("resetRemotePlay"),this.player.off("play",t)};this.player.on("play",t),this.player.play()}catch(t){console.log("src err",t),this.player.currentTime(this.$store.state.video.currentVideo.currentTime),this.$store.dispatch("resetRemotePlay")}}))):this.splashHide()})),this.player.on("play",(()=>{this.splashHide(),this.$store.dispatch("updateVideoStatusMutation",!0)})),this.player.on("pause",(()=>{this.$store.dispatch("updateVideoStatusMutation",!1)})),this.player.on("leavepictureinpicture",(()=>{this.$store.dispatch("updateVideoPIPStatusMutation",!1),this.pipStatus=!1,this.$router.push("/player"),setTimeout((()=>this.player.play()),500)})),this.player.on("enterpictureinpicture",(()=>{this.$store.dispatch("updateVideoPIPStatusMutation",!0),this.pipStatus=!0,setTimeout((()=>this.player.play()),500)})),this.player.on("error",(()=>{this.splashHide();const t=this.player.languages()[this.player.language()],e=t&&t[this.player.error_.message]||this.player.error_.message;this.$q.notify(e),this.$store.dispatch("currentVideoUrlMutation",null),this.loadPlayer(!0)})),this.player.textTracks().on("change",(()=>{const t=this.player.textTracks();let e=!1;for(const s in t)t[s]&&"showing"===t[s].mode&&(e=!0);e||setTimeout((()=>{this.player.ass().current_track=void 0}),100)})),this.$store.state.video.currentVideo.url&&!this.$store.state.video.currentVideo.remotePlay){let t=this.$store.state.video.currentVideo.url;t.startsWith("play://")&&(t+=`?infoHash=${this.$store.state.video.currentVideo.infoHash}`),this.player.src([{src:t,type:"video/mp4"}]),this.splashHide(),this.player.currentTime(this.$store.state.video.currentVideo.currentTime)}this.fileList||this.player.bigPlayButton.on("click",this.openFile);const e=this.player.controlBar.addChild("FileButton",{text:this.$t("open_file")},1);e.on("click",this.openFile),this.subsBtn=this.player.controlBar.addChild("SubsButton",{text:this.$t("add_subtitles")},14),this.subsBtn.on("click",(()=>this.$refs.subtitle.click())),this.$store.dispatch("updateVideoPIPStatusMutation",!1)},updateProgress(t){if(t){let e=document.querySelector("#download-progress");if(!e){const t=document.querySelector(".vjs-progress-holder");if(!t)return;e=t.appendChild(document.createElement("div")),e.id="download-progress"}e.style.background=t.reduce(((t,e)=>t+`, ${e.color} 0%, ${e.color} ${e.length}, ${e.color} 0%`),"linear-gradient(90deg")+", transparent 0%)"}}},updated(){this.loadPlayer()},activated(){this.$store.state.video.currentVideo.remotePlay?this.loadPlayer(!0):(this.$store.state.video.currentVideo.shouldReset&&(this.$store.state.video.currentVideo.shouldReset=!1,this.loadPlayer(!0)),this.loadPlayer()),this.io.on("server_progress",(t=>{if("/player"!==this.$router.currentRoute.path)return;const e=t.find((t=>{var e;return null===(e=this.$store.state.video.currentVideo)||void 0===e?void 0:e.url.includes(t.name)}));if(e&&e.progress){const t=[],s=e.progress.length;let i=e.progress[0],r=1;for(let a=1;a<s;a++)if(e.progress[a]===i&&a<s-1)r+=1;else{if(e.progress[a+1]===i){r+=1;continue}a===s-1&&(r+=1),r&&t.push({color:1===i?"gold":"transparent",length:r/s*100+"%"}),i=e.progress[a],r=1}this.updateProgress(t)}}))},mounted(){this.loadPlayer(!0)},watch:{"$store.state.video.currentVideo.url"(t,e){t&&t!==e&&this.updatePlayer(t)}},beforeDestroy(){this.$store.dispatch("currentVideoCurrentTimeMutation",this.player.currentTime()),this&&this.player&&this.player.dispose(),clearInterval(this.progressInterval)},created(){window.addEventListener("error",(t=>{console.log("Uncaught global error",t.message,"\nThis has no effect to app and can be ignore"),this.splashHide()}))}},_=C,j=(s("e786"),s("2877")),k=s("9989"),L=s("58ea"),V=s("eebe"),R=s.n(V),H=Object(j["a"])(_,i,r,!1,null,null,null);e["default"]=H.exports;R()(H,"components",{QPage:k["a"],QCircularProgress:L["a"]})},e30e:function(t,e,s){},e786:function(t,e,s){"use strict";s("e30e")}}]);