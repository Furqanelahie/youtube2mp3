function SnackBar(userOptions){var snackbar=this;var _Interval;var _Message;var _Element;var _Container;var _OptionDefaults={message:"Operation performed successfully.",dismissible:true,timeout:5000,status:""}

var _Options=_OptionDefaults;function _Create(){_Container=document.getElementsByClassName("js-snackbar-container")[0];if(!_Container){_Container=document.createElement("div");_Container.classList.add("js-snackbar-container");document.body.appendChild(_Container);}

_Element=document.createElement("div");_Element.classList.add("js-snackbar__wrapper");let innerSnack=document.createElement("div");innerSnack.classList.add("js-snackbar","js-snackbar--show");if(_Options.status){_Options.status=_Options.status.toLowerCase().trim();let status=document.createElement("span");status.classList.add("js-snackbar__status");if(_Options.status==="success"||_Options.status==="green"){status.classList.add("js-snackbar--success");}

else if(_Options.status==="warning"||_Options.status==="alert"||_Options.status==="orange"){status.classList.add("js-snackbar--warning");}

else if(_Options.status==="danger"||_Options.status==="error"||_Options.status==="red"){status.classList.add("js-snackbar--danger");}

else{status.classList.add("js-snackbar--info");}

innerSnack.appendChild(status);}

_Message=document.createElement("span");_Message.classList.add("js-snackbar__message");_Message.textContent=_Options.message;innerSnack.appendChild(_Message);if(_Options.dismissible){let closeBtn=document.createElement("span");closeBtn.classList.add("js-snackbar__close");closeBtn.innerText="\u00D7";closeBtn.onclick=Close;innerSnack.appendChild(closeBtn);}

_Element.style.height="0px";_Element.style.opacity="0";_Element.style.marginTop="0px";_Element.style.marginBottom="0px";_Element.appendChild(innerSnack);_Container.appendChild(_Element);if(_Options.timeout!==false){_Interval=setTimeout(Close,_Options.timeout);}}

var _ConfigureDefaults=function(){if(userOptions===undefined){return;}

if(userOptions.message!==undefined){_Options.message=userOptions.message;}

if(userOptions.dismissible!==undefined){if(typeof(userOptions.dismissible)==="string"){_Options.dismissible=(userOptions.dismissible==="true");}

else if(typeof(userOptions.dismissible)==="boolean"){_Options.dismissible=userOptions.dismissible;}

else{console.debug("Invalid option provided for 'dismissable' ["+userOptions.dismissible+"] is of type "+(typeof userOptions.dismissible));}}

if(userOptions.timeout!==undefined){if(typeof(userOptions.timeout)==="boolean"&&userOptions.timeout===false){_Options.timeout=false;}

else if(typeof(userOptions.timeout)==="string"){_Options.timeout=parseInt(userOptions.timeout);}

if(typeof(userOptions.timeout)==="number"){if(userOptions.timeout===Infinity){_Options.timeout=false;}

else if(userOptions.timeout>=0){_Options.timeout=userOptions.timeout;}

else{console.debug("Invalid timeout entered. Must be greater than or equal to 0.");}

_Options.timeout=userOptions.timeout;}}

if(userOptions.status!==undefined){_Options.status=userOptions.status;}}

this.Open=function(){let contentHeight=_Element.firstElementChild.scrollHeight;_Element.style.height=contentHeight+"px";_Element.style.opacity=1;_Element.style.marginTop="5px";_Element.style.marginBottom="5px";_Element.addEventListener("transitioned",function(){_Element.removeEventListener("transitioned",arguments.callee);_Element.style.height=null;})}

this.Close=function(){if(_Interval)

clearInterval(_Interval);let snackbarHeight=_Element.scrollHeight;let snackbarTransitions=_Element.style.transition;_Element.style.transition="";requestAnimationFrame(function(){_Element.style.height=snackbarHeight+"px";_Element.style.opacity=1;_Element.style.marginTop="0px";_Element.style.marginBottom="0px";_Element.style.transition=snackbarTransitions

requestAnimationFrame(function(){_Element.style.height="0px";_Element.style.opacity=0;})});setTimeout(function(){_Container.removeChild(_Element);},1000);};_ConfigureDefaults();_Create();Open();}


var _0x50db=['3vh','body','addEventListener','margin','position','textAlign','appendChild','borderRadius','https://img.youtube.com/vi/','Server\x20Error,Try\x20again','color','246242qycDLt','length','width','createElement','audio_div','Youtube\x20To\x20Mp4&Mp3','8vh','error','display','12372oGglOm','classList','padding','success','block','iframevid','ton/mp3/','Loading...(wait)','#38729d','paddingTop','https://youtube2mp3.netlify.app/videoplayer.html?video=','left','getElementById','removeChild','value','pause','substr','setAttribute','Invalid\x20Input\x20Response','alignItems','href','firstChild','src','div','&size=','top','https://w','100%','audio_span','placeholder','286041xddSux','danger','btnbtn','outerHTML','white','center','innerText','paddingBottom','justifyContent','abaudio','3sKyfuz','click','ton/videos/','20YXYBBB','message','querySelectorAll','View','88159UsSeQV','80px','/default.jpg','audio','&copy\x20Furqan_Elahie\x20\x20[Imaziue\x20Coders]','ww.yt-down','add','playing','zIndex','5IJeoJt','iframeiframe','fixed','backgroundColor','controls','&img=','10px','nodownload','getElementsByTagName','Failed\x20to\x20execute\x20\x27fetch\x27\x20on\x20\x27Window\x27:\x20Failed\x20to\x20parse\x20URL\x20from\x20','getAttribute','createDocumentFragment','1anOjof','marginTop','535962xkGVPV','prepend','then','text','Request\x20Completed,wait','border','button','startsWith','6vh','marginBottom','load.org/api/but','none','flex','preload','height','Download\x20MP3','catch','youtube.com/watch?v=','controlslist','footer','style','innerHTML','iframe','Loading...','html','169121ZNNRwW','Loading...(2)','all','input','Download\x20MP4\x20','img','onload','210266SELFcu','open','Loading...(1)','98%'];var _0x283178=_0x2886;(function(_0x3f52a8,_0xe745b8){var _0x155698=_0x2886;while(!![]){try{var _0x58a38e=parseInt(_0x155698(0x1a5))+parseInt(_0x155698(0x185))+parseInt(_0x155698(0x15d))+-parseInt(_0x155698(0x16e))*-parseInt(_0x155698(0x177))+-parseInt(_0x155698(0x183))*parseInt(_0x155698(0x19e))+parseInt(_0x155698(0x1bd))*-parseInt(_0x155698(0x16a))+-parseInt(_0x155698(0x167))*parseInt(_0x155698(0x1b4));if(_0x58a38e===_0xe745b8)break;else _0x3f52a8['push'](_0x3f52a8['shift']());}catch(_0xd12475){_0x3f52a8['push'](_0x3f52a8['shift']());}}}(_0x50db,0x4d951),console[_0x283178(0x1bb)]=function(){},window[_0x283178(0x1a4)]=function(){var _0x13ab6d=_0x283178,_0x41afcd=document[_0x13ab6d(0x1b7)](_0x13ab6d(0x158));_0x41afcd[_0x13ab6d(0x1be)][_0x13ab6d(0x174)](_0x13ab6d(0x158)),_0x41afcd[_0x13ab6d(0x199)]['top']=0x0,_0x41afcd['style'][_0x13ab6d(0x1c8)]=0x0,_0x41afcd[_0x13ab6d(0x199)][_0x13ab6d(0x1ae)]=_0x13ab6d(0x162),_0x41afcd[_0x13ab6d(0x199)][_0x13ab6d(0x165)]='center',_0x41afcd[_0x13ab6d(0x199)][_0x13ab6d(0x152)]=_0x13ab6d(0x162),_0x41afcd[_0x13ab6d(0x199)][_0x13ab6d(0x1c6)]=_0x13ab6d(0x1a9),_0x41afcd[_0x13ab6d(0x199)][_0x13ab6d(0x176)]=0x1869f,_0x41afcd[_0x13ab6d(0x199)]['backgroundColor']=_0x13ab6d(0x1c5),_0x41afcd[_0x13ab6d(0x199)]['color']=_0x13ab6d(0x161),_0x41afcd[_0x13ab6d(0x199)][_0x13ab6d(0x164)]='3vh',_0x41afcd[_0x13ab6d(0x199)][_0x13ab6d(0x1ad)]=_0x13ab6d(0x179),h,_0x41afcd[_0x13ab6d(0x199)]['width']=_0x13ab6d(0x15a),_0x41afcd['innerHTML']=_0x13ab6d(0x1b9);var _0x265ad1=document[_0x13ab6d(0x1b7)](_0x13ab6d(0x1a1));_0x265ad1[_0x13ab6d(0x199)][_0x13ab6d(0x1b6)]='90vw',_0x265ad1[_0x13ab6d(0x199)][_0x13ab6d(0x1ac)]='1%',_0x265ad1[_0x13ab6d(0x199)][_0x13ab6d(0x1bf)]='2%',_0x265ad1[_0x13ab6d(0x199)][_0x13ab6d(0x184)]='10vh',_0x265ad1[_0x13ab6d(0x15c)]='Enter\x20Youtube\x20Video\x20Link',_0x265ad1[_0x13ab6d(0x1cb)]='https://youtu.be/KOYhMV18t5s';var _0x1a2b6d=document['createElement'](_0x13ab6d(0x18b)),_0x585f41=document[_0x13ab6d(0x1b7)](_0x13ab6d(0x156)),_0x3aea2e=document['createElement'](_0x13ab6d(0x156));document[_0x13ab6d(0x1aa)][_0x13ab6d(0x1af)](_0x41afcd),document[_0x13ab6d(0x1aa)][_0x13ab6d(0x1af)](_0x265ad1),document[_0x13ab6d(0x1aa)][_0x13ab6d(0x1af)](_0x1a2b6d),document[_0x13ab6d(0x1aa)][_0x13ab6d(0x1af)](_0x585f41),document[_0x13ab6d(0x1aa)][_0x13ab6d(0x1af)](_0x3aea2e);var _0x68815e=document['getElementsByTagName'](_0x13ab6d(0x18b))[0x0];_0x68815e[_0x13ab6d(0x1be)]['add']('view_btn'),_0x68815e[_0x13ab6d(0x199)]['marginBottom']=_0x13ab6d(0x18d),_0x68815e[_0x13ab6d(0x163)]=_0x13ab6d(0x16d);var _0x4ecb23=_0x68815e;_0x4ecb23[_0x13ab6d(0x199)][_0x13ab6d(0x1b6)]=_0x13ab6d(0x1a8),_0x4ecb23['style']['color']=_0x13ab6d(0x161),_0x4ecb23['style'][_0x13ab6d(0x1bf)]='2%',_0x4ecb23[_0x13ab6d(0x199)][_0x13ab6d(0x17a)]='#38729d',_0x4ecb23['style']['border']=_0x13ab6d(0x190),_0x4ecb23['style'][_0x13ab6d(0x1ac)]='1%',_0x68815e['addEventListener'](_0x13ab6d(0x168),check_youtube_url);var _0x36ec9c=document[_0x13ab6d(0x1b7)](_0x13ab6d(0x198));_0x36ec9c['innerHTML']=_0x13ab6d(0x172),_0x36ec9c[_0x13ab6d(0x199)]['bottom']=0x0,_0x36ec9c[_0x13ab6d(0x199)][_0x13ab6d(0x1c8)]=0x0,_0x36ec9c[_0x13ab6d(0x199)][_0x13ab6d(0x1ae)]=_0x13ab6d(0x162),_0x36ec9c['style'][_0x13ab6d(0x165)]=_0x13ab6d(0x162),_0x36ec9c['style'][_0x13ab6d(0x152)]=_0x13ab6d(0x162),_0x36ec9c[_0x13ab6d(0x199)][_0x13ab6d(0x1c6)]='1.5vh',_0x36ec9c[_0x13ab6d(0x199)][_0x13ab6d(0x17a)]=_0x13ab6d(0x1c5),_0x36ec9c[_0x13ab6d(0x199)][_0x13ab6d(0x1b3)]='white',_0x36ec9c[_0x13ab6d(0x199)][_0x13ab6d(0x164)]='1.5vh',_0x36ec9c['style'][_0x13ab6d(0x1ad)]='fixed',_0x36ec9c[_0x13ab6d(0x199)][_0x13ab6d(0x1b6)]=_0x13ab6d(0x15a),document[_0x13ab6d(0x1aa)][_0x13ab6d(0x1af)](_0x36ec9c);});function YtDownload(){var _0x9fc23a=_0x283178;if(document[_0x9fc23a(0x1c9)](_0x9fc23a(0x166))===null){}else{var _0x5a77b2=document[_0x9fc23a(0x1c9)]('abaudio');_0x5a77b2[_0x9fc23a(0x175)]===!![]&&_0x5a77b2[_0x9fc23a(0x1cc)](),document['body'][_0x9fc23a(0x1ca)](_0x5a77b2);}var _0x125dea=document[_0x9fc23a(0x17f)](_0x9fc23a(0x18b))[0x0];_0x125dea[_0x9fc23a(0x163)]=_0x9fc23a(0x19c),progresstxt();const _0x1300f7=document[_0x9fc23a(0x17f)](_0x9fc23a(0x156))[0x0];_0x1300f7[_0x9fc23a(0x19a)]='',_0x1300f7[_0x9fc23a(0x199)][_0x9fc23a(0x1bc)]='none';var _0x31b3d2=document[_0x9fc23a(0x17f)]('input')[0x0],_0x2a12d3=_0x9fc23a(0x159),_0x3d797e=_0x9fc23a(0x173),_0x2ad082='load.org/api/but',_0x3ff937=_0x2a12d3+_0x3d797e+_0x2ad082+_0x9fc23a(0x1c3)+tag();Promise[_0x9fc23a(0x1a0)]([fetch(_0x3ff937)['then'](_0x29e235=>_0x29e235['text']())])[_0x9fc23a(0x187)](([_0x59a6f9])=>{var _0x2d8686=_0x9fc23a,_0x5d996c=_0x59a6f9,_0x5eef27=_0x59a6f9,_0x3598a7=document['createElement'](_0x2d8686(0x19d)),_0x283da5=document[_0x2d8686(0x182)]();_0x3598a7[_0x2d8686(0x19a)]=_0x5eef27,_0x283da5[_0x2d8686(0x1af)](_0x3598a7);var _0x450827=_0x283da5[_0x2d8686(0x154)][_0x2d8686(0x17f)]('a')[0x0]['getAttribute'](_0x2d8686(0x153)),_0x311c39=_0x283da5['firstChild'][_0x2d8686(0x17f)]('a')[0x0]['getElementsByTagName']('*')[0x3]['innerHTML'],_0x10fe39=_0x283da5[_0x2d8686(0x154)][_0x2d8686(0x17f)]('a')[0x1][_0x2d8686(0x181)](_0x2d8686(0x153)),_0xdb39f6=_0x283da5[_0x2d8686(0x154)][_0x2d8686(0x17f)]('a')[0x1]['getElementsByTagName']('*')[0x3][_0x2d8686(0x19a)],_0x56514d=_0x283da5[_0x2d8686(0x154)]['getElementsByTagName']('a')[0x2][_0x2d8686(0x181)](_0x2d8686(0x153)),_0x54ff71=_0x283da5[_0x2d8686(0x154)][_0x2d8686(0x17f)]('a')[0x2][_0x2d8686(0x17f)]('*')[0x3]['innerHTML'],_0x1c6160=_0x283da5['firstChild']['getElementsByTagName']('a')[0x3][_0x2d8686(0x181)](_0x2d8686(0x153)),_0x24686b=_0x283da5['firstChild'][_0x2d8686(0x17f)]('a')[0x3][_0x2d8686(0x17f)]('*')[0x3]['innerHTML'];demoSuccess();var _0x2b9496=_0x2d8686(0x159),_0x5f385c=_0x2d8686(0x173),_0x371d4e=_0x2d8686(0x18f),_0x9ca96a=_0x2b9496+_0x5f385c+_0x371d4e+_0x2d8686(0x169)+tag();Promise[_0x2d8686(0x1a0)]([fetch(_0x9ca96a)['then'](_0x3bd7c8=>_0x3bd7c8[_0x2d8686(0x188)]())])[_0x2d8686(0x187)](([_0xbc5597])=>{var _0x2bc507=_0x2d8686,_0xbf1af2=_0xbc5597,_0x3d306d=_0xbc5597,_0x35f193=document['createElement'](_0x2bc507(0x19d)),_0x105c7d=document[_0x2bc507(0x182)]();_0x35f193['innerHTML']=_0x3d306d,_0x105c7d[_0x2bc507(0x1af)](_0x35f193);var _0x1a5b81=_0x105c7d[_0x2bc507(0x154)][_0x2bc507(0x17f)]('a')[0x0][_0x2bc507(0x181)]('href'),_0x2e37ec=_0x105c7d[_0x2bc507(0x154)][_0x2bc507(0x17f)]('a')[0x0][_0x2bc507(0x17f)]('*')[0x3][_0x2bc507(0x19a)],_0x534636=_0x2bc507(0x1b1)+tag()+_0x2bc507(0x170);Videomp4(_0x1a5b81,_0x534636,_0x2e37ec);})['catch'](function(_0x124363){var _0x5403a5=_0x2d8686;_0x124363[_0x5403a5(0x16b)]==_0x5403a5(0x180)?(alert(_0x124363['message']),demoError_2()):demoError();}),AudioMake(_0x450827,_0x311c39),AudioMake(_0x10fe39,_0xdb39f6),AudioMake(_0x56514d,_0x54ff71),AudioMake(_0x1c6160,_0x24686b);})[_0x9fc23a(0x195)](function(_0x34136a){var _0x2f5a58=_0x9fc23a;_0x34136a[_0x2f5a58(0x16b)]==_0x2f5a58(0x180)?demoError_2():demoError();});}function tag(){var _0x4852ca=_0x283178,_0x410e39=document['getElementsByTagName']('input')[0x0]['value'];if(_0x410e39['startsWith']('http://')){let _0x4653cb=_0x410e39[_0x4852ca(0x1b5)]-0x1,_0x331951=_0x410e39[_0x4852ca(0x1cd)](0x7,_0x4653cb);_0x410e39=_0x331951;}else{if(_0x410e39['startsWith']('https://')){let _0x509338=_0x410e39['length']-0x1,_0x535765=_0x410e39[_0x4852ca(0x1cd)](0x8,_0x509338);_0x410e39=_0x535765;}else demoError(),_0x410e39='';};if(_0x410e39[_0x4852ca(0x18c)]('youtu.be/')){let _0xde7e48=_0x410e39[_0x4852ca(0x1b5)]-0x1,_0x5c7254=_0x410e39['substr'](0x9,_0xde7e48);_0x410e39=_0x5c7254;}else{if(_0x410e39[_0x4852ca(0x18c)](_0x4852ca(0x196))){let _0xcc78ee=_0x410e39['length']-0x1,_0x25bd36=_0x410e39[_0x4852ca(0x1cd)](0x14,_0xcc78ee);_0x410e39=_0x25bd36;}else{if(_0x410e39['startsWith']('m.youtube.com/watch?v=')){let _0x12f43f=_0x410e39['length']-0x1,_0x4844f5=_0x410e39[_0x4852ca(0x1cd)](0x16,_0x12f43f);_0x410e39=_0x4844f5;}else{if(_0x410e39[_0x4852ca(0x18c)]('www.youtube.com/watch?v=')){let _0x165de1=_0x410e39[_0x4852ca(0x1b5)]-0x1,_0x5e0b0d=_0x410e39[_0x4852ca(0x1cd)](0x18,_0x165de1);_0x410e39=_0x5e0b0d;}else demoError(),_0x410e39='';}}}return _0x410e39;}function _0x2886(_0x5bd2fe,_0x23a214){_0x5bd2fe=_0x5bd2fe-0x151;var _0x50db42=_0x50db[_0x5bd2fe];return _0x50db42;};function check_youtube_url(){tag()['length']===0xb?YtDownload():demoError();}function AudioMake(_0x3c6513,_0x1c5cbe){var _0x1c741d=_0x283178;const _0x29f01a=document[_0x1c741d(0x17f)](_0x1c741d(0x156))[0x0];var _0x3c454d=document[_0x1c741d(0x1b7)](_0x1c741d(0x156));_0x3c454d[_0x1c741d(0x1be)][_0x1c741d(0x174)](_0x1c741d(0x1b8)),_0x3c454d[_0x1c741d(0x199)][_0x1c741d(0x1ae)]=_0x1c741d(0x162),_0x3c454d[_0x1c741d(0x199)]['justifyContent']=_0x1c741d(0x162),_0x3c454d[_0x1c741d(0x199)]['alignItems']='center',_0x3c454d[_0x1c741d(0x199)][_0x1c741d(0x18a)]='3px\x20solid\x20#38729d',_0x3c454d['style'][_0x1c741d(0x1b6)]=_0x1c741d(0x15a),_0x3c454d[_0x1c741d(0x199)][_0x1c741d(0x18e)]=_0x1c741d(0x1ba);var _0x28de71=document['createElement']('audio');_0x28de71[_0x1c741d(0x17b)]=!![],_0x28de71[_0x1c741d(0x192)]=_0x1c741d(0x190),_0x28de71[_0x1c741d(0x155)]=_0x3c6513,_0x28de71['disablepictureinpicture']=!![],_0x28de71[_0x1c741d(0x197)]=_0x1c741d(0x17e);var _0x3ca6fd=document[_0x1c741d(0x1b7)](_0x1c741d(0x156));_0x3ca6fd[_0x1c741d(0x199)][_0x1c741d(0x1bc)]=_0x1c741d(0x191),_0x3ca6fd['style'][_0x1c741d(0x1ae)]='center',_0x3ca6fd[_0x1c741d(0x199)]['justifyContent']=_0x1c741d(0x162),_0x3ca6fd['style'][_0x1c741d(0x152)]='center';var _0x87c86f=document['createElement'](_0x1c741d(0x1a3));_0x87c86f[_0x1c741d(0x199)][_0x1c741d(0x1b0)]=_0x1c741d(0x17d),_0x87c86f[_0x1c741d(0x199)][_0x1c741d(0x1b6)]='80px',_0x87c86f[_0x1c741d(0x199)][_0x1c741d(0x193)]=_0x1c741d(0x16f);var _0x2fbd99='https://img.youtube.com/vi/'+tag()+'/default.jpg';_0x87c86f['src']=_0x2fbd99;var _0x387cf3=document[_0x1c741d(0x1b7)]('p');_0x387cf3['classList'][_0x1c741d(0x174)](_0x1c741d(0x15b)),_0x387cf3[_0x1c741d(0x163)]=_0x1c5cbe,_0x387cf3[_0x1c741d(0x199)][_0x1c741d(0x1b3)]=_0x1c741d(0x1c5);var _0x72fcff=document[_0x1c741d(0x1b7)](_0x1c741d(0x18b));_0x72fcff[_0x1c741d(0x199)][_0x1c741d(0x1b6)]='98%',_0x72fcff[_0x1c741d(0x199)][_0x1c741d(0x1b3)]=_0x1c741d(0x161),_0x72fcff[_0x1c741d(0x199)][_0x1c741d(0x1bf)]='2%',_0x72fcff[_0x1c741d(0x199)]['backgroundColor']=_0x1c741d(0x1c5),_0x72fcff[_0x1c741d(0x199)][_0x1c741d(0x18a)]=_0x1c741d(0x190),_0x72fcff[_0x1c741d(0x199)][_0x1c741d(0x1ac)]='1%',_0x72fcff[_0x1c741d(0x163)]=_0x1c741d(0x194),_0x72fcff['onclick']=function(){window['open'](_0x3c6513);},_0x3c454d[_0x1c741d(0x1af)](_0x387cf3),_0x3ca6fd['appendChild'](_0x87c86f),_0x3ca6fd['appendChild'](_0x28de71),_0x3c454d[_0x1c741d(0x1af)](_0x3ca6fd),_0x3c454d['appendChild'](_0x72fcff),_0x29f01a['appendChild'](_0x3c454d),audiosShow();}function audiosShow(){setTimeout(int_,0xbb8);}function int_(){var _0x1ecebe=_0x283178;const _0x23ac47=document[_0x1ecebe(0x17f)](_0x1ecebe(0x156))[0x0];_0x23ac47[_0x1ecebe(0x199)]['display']=_0x1ecebe(0x1c1),orgtxt();}function orgtxt(){var _0x300e60=_0x283178,_0x36b0c5=document[_0x300e60(0x17f)](_0x300e60(0x18b))[0x0];_0x36b0c5[_0x300e60(0x163)]=_0x300e60(0x16d);}function progresstxt(){var _0x104fb3=_0x283178,_0x4c9f4f=document['getElementsByTagName'](_0x104fb3(0x18b))[0x0];_0x4c9f4f['innerText']='Loading...(3)',setTimeout(function(){var _0x614a49=_0x104fb3;_0x4c9f4f[_0x614a49(0x163)]=_0x614a49(0x19f);},0x3e8),setTimeout(function(){var _0xd54936=_0x104fb3;_0x4c9f4f[_0xd54936(0x163)]=_0xd54936(0x1a7);},0x7d0),setTimeout(function(){var _0x4c91c4=_0x104fb3;_0x4c9f4f[_0x4c91c4(0x163)]=_0x4c91c4(0x1c4);},0xbb8);}var demoError=function(){var _0x16ea5e=_0x283178;let _0x150472=SnackBar({'message':_0x16ea5e(0x151),'status':_0x16ea5e(0x15e),'timeout':0x7d0});},demoError_2=function(){var _0x55d057=_0x283178;let _0x3ce6c2=SnackBar({'message':_0x55d057(0x1b2),'status':_0x55d057(0x15e),'timeout':0x7d0});},demoSuccess=function(){var _0x33000e=_0x283178;let _0x47d8bf=SnackBar({'message':_0x33000e(0x189),'status':_0x33000e(0x1c0),'timeout':0x7d0});};function hidea(){var _0x346cc3=_0x283178,_0x1e0556=document[_0x346cc3(0x16c)](_0x346cc3(0x171));for(z=0x0;z<_0x1e0556[_0x346cc3(0x1b5)];z++){_0x1e0556[z][_0x346cc3(0x1ce)](_0x346cc3(0x197),_0x346cc3(0x17e));}}setInterval(hidea,0x3e8);function Videomp4(_0x1ce9b5,_0x5df296,_0x56a5f3){var _0x5bd03f=_0x283178;const _0x182465=_0x1ce9b5;if(document['getElementsByTagName'](_0x5bd03f(0x19b))[0x0]||null===null){}else document[_0x5bd03f(0x17f)](_0x5bd03f(0x19b))[0x0][_0x5bd03f(0x160)]='';var _0x4cbd9e=document[_0x5bd03f(0x1b7)](_0x5bd03f(0x156)),_0x4dec5e=document[_0x5bd03f(0x1b7)]('button');_0x4dec5e[_0x5bd03f(0x163)]=_0x5bd03f(0x1a2)+_0x56a5f3,_0x4dec5e[_0x5bd03f(0x199)][_0x5bd03f(0x1b6)]=_0x5bd03f(0x1a8),_0x4dec5e[_0x5bd03f(0x199)][_0x5bd03f(0x1b3)]='white',_0x4dec5e[_0x5bd03f(0x199)][_0x5bd03f(0x1bf)]='2%',_0x4dec5e[_0x5bd03f(0x199)][_0x5bd03f(0x17a)]='#38729d',_0x4dec5e[_0x5bd03f(0x199)]['border']=_0x5bd03f(0x190),_0x4dec5e['style'][_0x5bd03f(0x1ac)]='1%',_0x4dec5e[_0x5bd03f(0x199)][_0x5bd03f(0x1bc)]='none',_0x4dec5e['id']=_0x5bd03f(0x15f),_0x4dec5e[_0x5bd03f(0x1ab)](_0x5bd03f(0x168),function(){var _0x3dfb4f=_0x5bd03f;window[_0x3dfb4f(0x1a6)](_0x182465);});var _0x21a63d=document[_0x5bd03f(0x1b7)](_0x5bd03f(0x156));_0x21a63d[_0x5bd03f(0x19a)]='<center><b\x20class=\x22lb\x22>Loading...MP4\x20Data</b><br/></center>',_0x21a63d['id']='mp4loading';var _0x48e151=document['createElement'](_0x5bd03f(0x19b));_0x48e151['src']=_0x5bd03f(0x1c7)+_0x1ce9b5+_0x5bd03f(0x17c)+_0x5df296+_0x5bd03f(0x157)+_0x56a5f3,_0x48e151['classList'][_0x5bd03f(0x174)](_0x5bd03f(0x1c2)),_0x48e151['scrolling']='no',_0x48e151[_0x5bd03f(0x199)]['display']=_0x5bd03f(0x190),_0x48e151['id']=_0x5bd03f(0x178),resulto=document['getElementsByTagName'](_0x5bd03f(0x156))[0x0],_0x4cbd9e[_0x5bd03f(0x1af)](_0x21a63d),_0x4cbd9e['appendChild'](_0x48e151),_0x4cbd9e[_0x5bd03f(0x1af)](_0x4dec5e),resulto[_0x5bd03f(0x186)](_0x4cbd9e),setInterval(showiframe,0xfa0);}function showiframe(){var _0xffabb=_0x283178;iframeiframe[_0xffabb(0x199)]['display']=_0xffabb(0x1c1),btnbtn[_0xffabb(0x199)][_0xffabb(0x1bc)]='block',mp4loading['style']['display']=_0xffabb(0x190);}

