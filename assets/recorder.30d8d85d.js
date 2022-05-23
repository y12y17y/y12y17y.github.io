var S=Object.defineProperty;var A=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var M=(l,y,g)=>y in l?S(l,y,{enumerable:!0,configurable:!0,writable:!0,value:g}):l[y]=g,B=(l,y)=>{for(var g in y||(y={}))C.call(y,g)&&M(l,g,y[g]);if(A)for(var g of A(y))x.call(y,g)&&M(l,g,y[g]);return l};import{b as D,_,h as U,i as O,o as j,c as I,a as b,d as V}from"./index.878767be.js";var R={exports:{}};/*!
 * 
 * js-audio-recorder - js audio recorder plugin
 * 
 * @version v1.0.7
 * @homepage https://github.com/2fps/recorder
 * @author 2fps <echoweb@126.com> (https://www.zhuyuntao.cn)
 * @license MIT
 *         
 */(function(l,y){(function(g,f){l.exports=f()})(D,function(){return function(g){var f={};function p(r){if(f[r])return f[r].exports;var e=f[r]={i:r,l:!1,exports:{}};return g[r].call(e.exports,e,e.exports,p),e.l=!0,e.exports}return p.m=g,p.c=f,p.d=function(r,e,i){p.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:i})},p.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},p.t=function(r,e){if(1&e&&(r=p(r)),8&e||4&e&&typeof r=="object"&&r&&r.__esModule)return r;var i=Object.create(null);if(p.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:r}),2&e&&typeof r!="string")for(var t in r)p.d(i,t,function(o){return r[o]}.bind(null,t));return i},p.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return p.d(e,"a",e),e},p.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},p.p="",p(p.s=1)}([function(g,f,p){function r(e,i,t){for(var o=0;o<t.length;o++)e.setUint8(i+o,t.charCodeAt(o))}Object.defineProperty(f,"__esModule",{value:!0}),f.compress=function(e,i,t){for(var o=i/t,h=Math.max(o,1),s=e.left,a=e.right,n=Math.floor((s.length+a.length)/o),d=new Float32Array(n),u=0,w=0;u<n;){var c=Math.floor(w);d[u]=s[c],u++,a.length&&(d[u]=a[c],u++),w+=h}return d},f.encodePCM=function(e,i,t){t===void 0&&(t=!0);var o=0,h=e.length*(i/8),s=new ArrayBuffer(h),a=new DataView(s);if(i===8)for(var n=0;n<e.length;n++,o++){var d=(u=Math.max(-1,Math.min(1,e[n])))<0?128*u:127*u;d=+d+128,a.setInt8(o,d)}else for(n=0;n<e.length;n++,o+=2){var u=Math.max(-1,Math.min(1,e[n]));a.setInt16(o,u<0?32768*u:32767*u,t)}return a},f.encodeWAV=function(e,i,t,o,h,s){s===void 0&&(s=!0);var a=t>i?i:t,n=h,d=new ArrayBuffer(44+e.byteLength),u=new DataView(d),w=o,c=0;r(u,c,"RIFF"),c+=4,u.setUint32(c,36+e.byteLength,s),r(u,c+=4,"WAVE"),r(u,c+=4,"fmt "),c+=4,u.setUint32(c,16,s),c+=4,u.setUint16(c,1,s),c+=2,u.setUint16(c,w,s),c+=2,u.setUint32(c,a,s),c+=4,u.setUint32(c,w*a*(n/8),s),c+=4,u.setUint16(c,w*(n/8),s),c+=2,u.setUint16(c,n,s),r(u,c+=2,"data"),c+=4,u.setUint32(c,e.byteLength,s),c+=4;for(var m=0;m<e.byteLength;)u.setUint8(c,e.getUint8(m)),c++,m++;return u}},function(g,f,p){var r,e=this&&this.__extends||(r=function(s,a){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,d){n.__proto__=d}||function(n,d){for(var u in d)d.hasOwnProperty(u)&&(n[u]=d[u])})(s,a)},function(s,a){function n(){this.constructor=s}r(s,a),s.prototype=a===null?Object.create(a):(n.prototype=a.prototype,new n)});Object.defineProperty(f,"__esModule",{value:!0});var i=p(2),t=p(0),o=p(3),h=function(s){function a(n){n===void 0&&(n={});var d=s.call(this,n)||this;return d.isrecording=!1,d.ispause=!1,d.isplaying=!1,d}return e(a,s),a.prototype.setOption=function(n){n===void 0&&(n={}),this.setNewOption(n)},a.prototype.start=function(){return this.isrecording?Promise.reject():(this.isrecording=!0,this.startRecord())},a.prototype.pause=function(){this.isrecording&&!this.ispause&&(this.ispause=!0,this.pauseRecord())},a.prototype.resume=function(){this.isrecording&&this.ispause&&(this.ispause=!1,this.resumeRecord())},a.prototype.stop=function(){this.isrecording&&(this.isrecording=!1,this.ispause=!1,this.stopRecord())},a.prototype.play=function(){this.stop(),this.isplaying=!0,this.onplay&&this.onplay(),o.default.addPlayEnd(this.onplayend);var n=this.getWAV();n.byteLength>44&&o.default.play(n.buffer)},a.prototype.getPlayTime=function(){return o.default.getPlayTime()},a.prototype.pausePlay=function(){!this.isrecording&&this.isplaying&&(this.isplaying=!1,this.onpauseplay&&this.onpauseplay(),o.default.pausePlay())},a.prototype.resumePlay=function(){this.isrecording||this.isplaying||(this.isplaying=!0,this.onresumeplay&&this.onresumeplay(),o.default.resumePlay())},a.prototype.stopPlay=function(){this.isrecording||(this.isplaying=!1,this.onstopplay&&this.onstopplay(),o.default.stopPlay())},a.prototype.destroy=function(){return o.default.destroyPlay(),this.destroyRecord()},a.prototype.getRecordAnalyseData=function(){return this.getAnalyseData()},a.prototype.getPlayAnalyseData=function(){return o.default.getAnalyseData()},a.prototype.getPCM=function(){this.stop();var n=this.getData();return n=t.compress(n,this.inputSampleRate,this.outputSampleRate),t.encodePCM(n,this.oututSampleBits,this.littleEdian)},a.prototype.getPCMBlob=function(){return new Blob([this.getPCM()])},a.prototype.downloadPCM=function(n){n===void 0&&(n="recorder");var d=this.getPCMBlob();i.downloadPCM(d,n)},a.prototype.getWAV=function(){var n=this.getPCM();return t.encodeWAV(n,this.inputSampleRate,this.outputSampleRate,this.config.numChannels,this.oututSampleBits,this.littleEdian)},a.prototype.getWAVBlob=function(){return new Blob([this.getWAV()],{type:"audio/wav"})},a.prototype.downloadWAV=function(n){n===void 0&&(n="recorder");var d=this.getWAVBlob();i.downloadWAV(d,n)},a.prototype.download=function(n,d,u){i.download(n,d,u)},a.prototype.getChannelData=function(){var n=this.getPCM(),d=n.byteLength,u=this.littleEdian,w={left:null,right:null};if(this.config.numChannels===2){var c=new DataView(new ArrayBuffer(d/2)),m=new DataView(new ArrayBuffer(d/2));if(this.config.sampleBits===16)for(var v=0;v<d/2;v+=2)c.setInt16(v,n.getInt16(2*v,u),u),m.setInt16(v,n.getInt16(2*v+2,u),u);else for(v=0;v<d/2;v+=2)c.setInt8(v,n.getInt8(2*v)),m.setInt8(v,n.getInt8(2*v+1));w.left=c,w.right=m}else w.left=n;return w},a}(p(5).default);f.default=h},function(g,f,p){function r(e,i,t){var o=document.createElement("a");o.href=window.URL.createObjectURL(e),o.download=i+"."+t,o.click()}Object.defineProperty(f,"__esModule",{value:!0}),f.downloadWAV=function(e,i){i===void 0&&(i="recorder"),r(e,i,"wav")},f.downloadPCM=function(e,i){i===void 0&&(i="recorder"),r(e,i,"pcm")},f.download=function(e,i,t){return r(e,i,t)}},function(g,f,p){Object.defineProperty(f,"__esModule",{value:!0});var r=p(4),e=null,i=0,t=0,o=null,h=null,s=null,a=!1,n=0,d=function(){};function u(){return a=!1,o.decodeAudioData(s.slice(0),function(m){(e=o.createBufferSource()).onended=function(){a||(n=o.currentTime-t+i,d())},e.buffer=m,e.connect(h),h.connect(o.destination),e.start(0,i),t=o.currentTime},function(m){r.throwError(m)})}function w(){e&&(e.stop(),e=null)}var c=function(){function m(){}return m.play=function(v){return o||(o=new(window.AudioContext||window.webkitAudioContext),(h=o.createAnalyser()).fftSize=2048),this.stopPlay(),s=v,n=0,u()},m.pausePlay=function(){w(),i+=o.currentTime-t,a=!0},m.resumePlay=function(){return u()},m.stopPlay=function(){i=0,s=null,w()},m.destroyPlay=function(){this.stopPlay()},m.getAnalyseData=function(){var v=new Uint8Array(h.frequencyBinCount);return h.getByteTimeDomainData(v),v},m.addPlayEnd=function(v){v===void 0&&(v=function(){}),d=v},m.getPlayTime=function(){var v=a?i:o.currentTime-t+i;return n||v},m}();f.default=c},function(g,f,p){Object.defineProperty(f,"__esModule",{value:!0}),f.throwError=function(r){throw new Error(r)}},function(g,f,p){Object.defineProperty(f,"__esModule",{value:!0});var r=p(0),e=function(){function i(t){t===void 0&&(t={}),this.size=0,this.lBuffer=[],this.rBuffer=[],this.tempPCM=[],this.inputSampleBits=16,this.fileSize=0,this.duration=0,this.needRecord=!0;var o,h=new(window.AudioContext||window.webkitAudioContext);this.inputSampleRate=h.sampleRate,this.setNewOption(t),this.littleEdian=(o=new ArrayBuffer(2),new DataView(o).setInt16(0,256,!0),new Int16Array(o)[0]===256),i.initUserMedia()}return i.prototype.setNewOption=function(t){t===void 0&&(t={}),this.config={sampleBits:~[8,16].indexOf(t.sampleBits)?t.sampleBits:16,sampleRate:~[8e3,11025,16e3,22050,24e3,44100,48e3].indexOf(t.sampleRate)?t.sampleRate:this.inputSampleRate,numChannels:~[1,2].indexOf(t.numChannels)?t.numChannels:1},this.outputSampleRate=this.config.sampleRate,this.oututSampleBits=this.config.sampleBits},i.prototype.startRecord=function(){var t=this;return this.context&&this.destroyRecord(),this.initRecorder(),navigator.mediaDevices.getUserMedia({audio:!0}).then(function(o){t.audioInput=t.context.createMediaStreamSource(o),t.stream=o}).then(function(){t.audioInput.connect(t.analyser),t.analyser.connect(t.recorder),t.recorder.connect(t.context.destination)})},i.prototype.pauseRecord=function(){this.needRecord=!1},i.prototype.resumeRecord=function(){this.needRecord=!0},i.prototype.stopRecord=function(){this.audioInput&&this.audioInput.disconnect(),this.source&&this.source.stop(),this.recorder.disconnect(),this.analyser.disconnect(),this.needRecord=!0},i.prototype.destroyRecord=function(){return this.clearRecordStatus(),this.stopStream(),this.closeAudioContext()},i.prototype.getAnalyseData=function(){var t=new Uint8Array(this.analyser.frequencyBinCount);return this.analyser.getByteTimeDomainData(t),t},i.prototype.getData=function(){return this.flat()},i.prototype.clearRecordStatus=function(){this.lBuffer.length=0,this.rBuffer.length=0,this.size=0,this.fileSize=0,this.PCM=null,this.audioInput=null,this.duration=0},i.prototype.flat=function(){var t=null,o=new Float32Array(0);this.config.numChannels===1?t=new Float32Array(this.size):(t=new Float32Array(this.size/2),o=new Float32Array(this.size/2));for(var h=0,s=0;s<this.lBuffer.length;s++)t.set(this.lBuffer[s],h),h+=this.lBuffer[s].length;for(h=0,s=0;s<this.rBuffer.length;s++)o.set(this.rBuffer[s],h),h+=this.rBuffer[s].length;return{left:t,right:o}},i.prototype.initRecorder=function(){var t=this;this.clearRecordStatus(),this.context=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048;var o=this.context.createScriptProcessor||this.context.createJavaScriptNode;this.recorder=o.apply(this.context,[4096,this.config.numChannels,this.config.numChannels]),this.recorder.onaudioprocess=function(h){if(t.needRecord){var s,a=h.inputBuffer.getChannelData(0),n=null;t.lBuffer.push(new Float32Array(a)),t.size+=a.length,t.config.numChannels===2&&(n=h.inputBuffer.getChannelData(1),t.rBuffer.push(new Float32Array(n)),t.size+=n.length),t.fileSize=Math.floor(t.size/Math.max(t.inputSampleRate/t.outputSampleRate,1))*(t.oututSampleBits/8),s=100*Math.max.apply(Math,a),t.duration+=4096/t.inputSampleRate,t.onprocess&&t.onprocess(t.duration),t.onprogress&&t.onprogress({duration:t.duration,fileSize:t.fileSize,vol:s})}}},i.prototype.stopStream=function(){this.stream&&this.stream.getTracks&&(this.stream.getTracks().forEach(function(t){return t.stop()}),this.stream=null)},i.prototype.closeAudioContext=function(){return this.context&&this.context.close&&this.context.state!=="closed"?this.context.close():new Promise(function(t){t()})},i.initUserMedia=function(){navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(t){var o=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return o?new Promise(function(h,s){o.call(navigator,t,h,s)}):Promise.reject(new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 getUserMedia !"))})},i.prototype.transformIntoPCM=function(t,o){var h=new Float32Array(t),s=new Float32Array(o),a=r.compress({left:h,right:s},this.inputSampleRate,this.outputSampleRate);return r.encodePCM(a,this.oututSampleBits,this.littleEdian)},i.getPermission=function(){return this.initUserMedia(),navigator.mediaDevices.getUserMedia({audio:!0}).then(function(t){t&&t.getTracks().forEach(function(o){return o.stop()})})},i}();f.default=e}]).default})})(R);var P=R.exports;new P;const k={setup(){const l=U({recorder:null,formData:null,showAnima:!1,mation:!0,isHistory:!0,duration:0,submit(){l.recorder.pause(),l.timer=null;var y=new FromData,g=l.recorder.getWAVBlob(),f=new Blob([g],{type:"audio/wav"}),p=new File([f],new Date().getTime()+".wav");y.append("file",p),l.duration=Math.ceil((new Data-l.duration)/1e3),console.log(l.duration),sendAudio(y).then(r=>{console.log(r)})},voice(){l.recorder=new P({sampleBits:16,sampleRate:16e3,numChannels:1}),l.duration=new Date,P.getPermission().then(()=>{console.log("start"),l.recorder.start()},y=>{console.log(y.message)})},handleStop(){console.log("stop"),l.recorder.stop(),l.mation=!1},handlePlay(){console.log("play"),l.recorder.play()},handleDestroy(){console.log("destroy"),l.recorder&&l.recorder.destroy()}});return B({},O(l))}},z={class:"mation"},E=V('<div class="ap"><div class="box"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div><div class="ap_aps"><div class="box"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>',2),T={style:{position:"relative",top:"50px",margin:"0 auto",width:"350px"}};function F(l,y,g,f,p,r){return j(),I("div",z,[E,b("div",T,[b("button",{style:{background:"#ff0000",left:"0px"},onClick:y[0]||(y[0]=(...e)=>l.voice&&l.voice(...e))}),b("button",{style:{background:"#0000ff",left:"100px"},onClick:y[1]||(y[1]=(...e)=>l.handlePlay&&l.handlePlay(...e))}),b("button",{style:{background:"#ffff00",left:"200px"},onClick:y[2]||(y[2]=(...e)=>l.handleStop&&l.handleStop(...e))}),b("button",{style:{background:"#00ff00",left:"300px"},onClick:y[3]||(y[3]=(...e)=>l.handleDestroy&&l.handleDestroy(...e))})])])}var N=_(k,[["render",F]]);export{N as default};
