const _0x3e315b=_0x42d0;(function(_0x200e88,_0x1c4231){const _0x52a654=_0x42d0,_0x569632=_0x200e88();while(!![]){try{const _0x52e819=parseInt(_0x52a654(0x16a))/0x1+parseInt(_0x52a654(0x168))/0x2+-parseInt(_0x52a654(0x177))/0x3+parseInt(_0x52a654(0x181))/0x4+parseInt(_0x52a654(0x171))/0x5+parseInt(_0x52a654(0x17d))/0x6+-parseInt(_0x52a654(0x179))/0x7*(parseInt(_0x52a654(0x153))/0x8);if(_0x52e819===_0x1c4231)break;else _0x569632['push'](_0x569632['shift']());}catch(_0x1c45f1){_0x569632['push'](_0x569632['shift']());}}}(_0x336c,0x766f8));import{ElementType,IMAGE_HTTP_HOST,IMAGE_HTTP_HOST_NT}from'@/core/entities';import _0x321826 from'path';import _0x320991 from'fs';import _0x2abfc6 from'fs/promises';import{logDebug}from'@/common/utils/log';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x32f6a0 from'file-type';import{MsgListener}from'@/core/listeners';import _0x42fdf5 from'image-size';function _0x42d0(_0x24fde7,_0xdf9c7c){const _0x336c3a=_0x336c();return _0x42d0=function(_0x42d0d3,_0x3b410d){_0x42d0d3=_0x42d0d3-0x14f;let _0x10bf2b=_0x336c3a[_0x42d0d3];return _0x10bf2b;},_0x42d0(_0x24fde7,_0xdf9c7c);}function _0x336c(){const _0x48af0f=['getChatCacheList','fileUuid','下载超时','bUMzx','clearChatCache','eokiy','set','1334094mPAjXE','ext','632476LnRoBg','md5HexStr','indexOf','getImageUrl','private_rkey','hotUpdate','scanCache','3437320AyYczl','fileTypeFromFile','/gchatpic_new/0/0-0-','join','clearCache','existsSync','1717983afZsdK','delete','476wIbXyi','getStorageCleanService','iARkv','ajJIj','2282886uUYxjA','msgId','toUpperCase','vQfcW','3686084djmEYp','startsWith','clearChatCacheInfo','ladrQ','getChatCacheInfo','copyFile','getMsgService','onLoginSuccess','util','unlink','uploadFile','addCacheScanedPaths','/download','ygwIm','session','图片url获取失败','getImageSize','basename','addListener','GWEtr','262496SLIjMW','getFileSize','&rkey=','fnTNC','fYMvF','PIC','getDesktopTmpPath','OEoZw','getRkey','filePath','jjPLN','downloadMedia','setCacheSilentScan','getRichMediaFilePathForGuild'];_0x336c=function(){return _0x48af0f;};return _0x336c();}import{sessionConfig}from'@/core/sessionConfig';import{randomUUID}from'crypto';import{rkeyManager}from'../utils/rkey';import{AsyncQueue}from'@/common/utils/AsyncQueue';const getRKeyTaskQueue=new AsyncQueue(),downloadMediaTasks=new Map(),downloadMediaListener=new MsgListener();downloadMediaListener['onRichMediaDownloadComplete']=_0x41d282=>{const _0x4554a4=_0x42d0;for(const [_0x37a6e5,_0x3f7416]of downloadMediaTasks){_0x3f7416(_0x41d282),downloadMediaTasks[_0x4554a4(0x178)](_0x37a6e5);}},setTimeout(()=>{const _0x56939c=_0x42d0;napCatCore[_0x56939c(0x188)](()=>{const _0x3aa370=_0x56939c;napCatCore[_0x3aa370(0x151)](downloadMediaListener);});},0x64);export class NTQQFileApi{static async['getFileType'](_0x3059d6){const _0x5f0aef=_0x42d0;return _0x32f6a0[_0x5f0aef(0x172)](_0x3059d6);}static async[_0x3e315b(0x186)](_0x3b2a2d,_0x501a6c){const _0xb010be=_0x3e315b;await napCatCore[_0xb010be(0x189)]['copyFile'](_0x3b2a2d,_0x501a6c);}static async[_0x3e315b(0x154)](_0x32f1da){const _0x3f9e2d=_0x3e315b;return await napCatCore[_0x3f9e2d(0x189)][_0x3f9e2d(0x154)](_0x32f1da);}static async[_0x3e315b(0x18b)](_0x2422b0,_0x137eca=ElementType[_0x3e315b(0x158)],_0x3e4859=0x0){const _0x4c401f=_0x3e315b,_0x41216a={'jjPLN':function(_0x2abe29,_0x38ad8d){return _0x2abe29===_0x38ad8d;}},_0x85f768=await calculateFileMD5(_0x2422b0);let _0x2c43ec=(await NTQQFileApi['getFileType'](_0x2422b0))?.[_0x4c401f(0x169)]||'';_0x2c43ec&&(_0x2c43ec='.'+_0x2c43ec);let _0x289e2a=''+_0x321826[_0x4c401f(0x150)](_0x2422b0);_0x41216a[_0x4c401f(0x15d)](_0x289e2a[_0x4c401f(0x16c)]('.'),-0x1)&&(_0x289e2a+=_0x2c43ec);const _0x134f12=napCatCore['session'][_0x4c401f(0x187)]()[_0x4c401f(0x160)]({'md5HexStr':_0x85f768,'fileName':_0x289e2a,'elementType':_0x137eca,'elementSubType':_0x3e4859,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi[_0x4c401f(0x186)](_0x2422b0,_0x134f12);const _0x4dcaac=await NTQQFileApi[_0x4c401f(0x154)](_0x2422b0);return{'md5':_0x85f768,'fileName':_0x289e2a,'path':_0x134f12,'fileSize':_0x4dcaac,'ext':_0x2c43ec};}static async[_0x3e315b(0x15e)](_0xcd4ba2,_0x2c4b06,_0x4065af,_0x5c8565,_0x4c40a6,_0x4a25ae,_0x41077f=0x3e8*0x3c*0x2,_0x54a70a=![]){const _0x11bc65=_0x3e315b,_0xab7095={'fYMvF':function(_0xdd66e4,_0x2f2c11){return _0xdd66e4(_0x2f2c11);},'GWEtr':_0x11bc65(0x163),'eokiy':function(_0x531576){return _0x531576();},'iARkv':function(_0x173418,_0x1f2875,_0x2f4954){return _0x173418(_0x1f2875,_0x2f4954);}};if(_0x4a25ae&&_0x320991[_0x11bc65(0x176)](_0x4a25ae)){if(_0x54a70a)try{await _0x2abfc6[_0x11bc65(0x18a)](_0x4a25ae);}catch(_0x47e307){}else return _0x4a25ae;}return new Promise((_0x29781c,_0x516605)=>{const _0x5ba31a=_0x11bc65;let _0x4fafa7=![];const _0x46fbb4=_0x384825=>{const _0x51a83e=_0x42d0;if(_0x384825[_0x51a83e(0x17e)]===_0xcd4ba2){_0x4fafa7=!![];let _0x362a6d=_0x384825[_0x51a83e(0x15c)];if(_0x362a6d[_0x51a83e(0x182)]('\x5c')){const _0x24f185=sessionConfig['defaultFileDownloadPath'];_0x362a6d=_0x321826[_0x51a83e(0x174)](_0x24f185,_0x362a6d);}_0xab7095[_0x51a83e(0x157)](_0x29781c,_0x362a6d);}};downloadMediaTasks[_0x5ba31a(0x167)](_0xab7095[_0x5ba31a(0x166)](randomUUID),_0x46fbb4),_0xab7095[_0x5ba31a(0x17b)](setTimeout,()=>{const _0x17374a=_0x5ba31a;!_0x4fafa7&&_0xab7095[_0x17374a(0x157)](_0x516605,_0xab7095[_0x17374a(0x152)]);},_0x41077f),napCatCore['session']['getMsgService']()['downloadRichMedia']({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0xcd4ba2,'chatType':_0x2c4b06,'peerUid':_0x4065af,'elementId':_0x5c8565,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x4c40a6});});}static async[_0x3e315b(0x14f)](_0x3cfa4){const _0x44dde1={'OEoZw':function(_0x4198ac,_0x47bc35){return _0x4198ac(_0x47bc35);},'bUMzx':function(_0x19b251,_0x449bdd){return _0x19b251(_0x449bdd);},'ajJIj':function(_0x2f8bc1,_0xc98426,_0x126c5f){return _0x2f8bc1(_0xc98426,_0x126c5f);}};return new Promise((_0x2ae695,_0x36cf23)=>{const _0x51bb0b=_0x42d0;_0x44dde1[_0x51bb0b(0x17c)](_0x42fdf5,_0x3cfa4,(_0x4425cf,_0x13381a)=>{const _0x1c9be9=_0x51bb0b;_0x4425cf?_0x44dde1[_0x1c9be9(0x15a)](_0x36cf23,_0x4425cf):_0x44dde1[_0x1c9be9(0x164)](_0x2ae695,_0x13381a);});});}static async[_0x3e315b(0x16d)](_0x5bec2c,_0x8c2055){const _0x5655b9=_0x3e315b,_0x4417e0={'fnTNC':_0x5655b9(0x18d),'TCrkn':_0x5655b9(0x155),'ladrQ':function(_0x31f190,_0x4a710d){return _0x31f190+_0x4a710d;},'vQfcW':function(_0x5a1645,_0x501997){return _0x5a1645||_0x501997;},'ygwIm':function(_0x100ef3,_0x8a77a1,_0x388d88){return _0x100ef3(_0x8a77a1,_0x388d88);},'wPUlV':_0x5655b9(0x190)};if(!_0x5bec2c)return'';const _0x21cc7b=_0x5bec2c['originImageUrl'],_0x507474=_0x5bec2c[_0x5655b9(0x16b)],_0x206c5d=_0x5bec2c[_0x5655b9(0x16b)],_0x35d013=_0x5bec2c[_0x5655b9(0x162)];if(_0x21cc7b){if(_0x21cc7b['startsWith'](_0x4417e0[_0x5655b9(0x156)])){if(_0x21cc7b['includes'](_0x4417e0['TCrkn']))return IMAGE_HTTP_HOST_NT+_0x21cc7b;const _0x48d90d=await rkeyManager[_0x5655b9(0x15b)](),_0x4e3f5c=_0x8c2055?_0x48d90d[_0x5655b9(0x16e)]:_0x48d90d['group_rkey'];return _0x4417e0[_0x5655b9(0x184)](IMAGE_HTTP_HOST_NT,_0x21cc7b)+(''+_0x4e3f5c);}else return IMAGE_HTTP_HOST+_0x21cc7b;}else{if(_0x206c5d||_0x507474)return IMAGE_HTTP_HOST+_0x5655b9(0x173)+_0x4417e0[_0x5655b9(0x180)](_0x206c5d,_0x507474)[_0x5655b9(0x17f)]()+'/0';}return _0x4417e0[_0x5655b9(0x18e)](logDebug,_0x4417e0['wPUlV'],_0x5bec2c),'';}}export class NTQQFileCacheApi{static async[_0x3e315b(0x15f)](_0x47e404=!![]){return'';}static['getCacheSessionPathList'](){return'';}static[_0x3e315b(0x175)](_0x2d90ca=['tmp',_0x3e315b(0x16f)]){const _0x4293fd=_0x3e315b;return napCatCore[_0x4293fd(0x18f)][_0x4293fd(0x17a)]()['clearCacheDataByKeys'](_0x2d90ca);}static['addCacheScannedPaths'](_0xe49dc2={}){const _0x496618=_0x3e315b;return napCatCore[_0x496618(0x18f)][_0x496618(0x17a)]()[_0x496618(0x18c)](_0xe49dc2);}static[_0x3e315b(0x170)](){const _0x2911c7=_0x3e315b;return napCatCore['session'][_0x2911c7(0x17a)]()[_0x2911c7(0x170)]();}static['getHotUpdateCachePath'](){return'';}static[_0x3e315b(0x159)](){return'';}static[_0x3e315b(0x161)](_0x32115f,_0x5d64dd=0x3e8,_0x4231fa=0x0){const _0x43557b=_0x3e315b;return napCatCore[_0x43557b(0x18f)][_0x43557b(0x17a)]()[_0x43557b(0x185)](_0x32115f,_0x5d64dd,0x1,_0x4231fa);}static['getFileCacheInfo'](_0x257003,_0x4efcb6=0x3e8,_0x925936){const _0x4f93c8=_0x925936?_0x925936:{'fileType':_0x257003};}static async[_0x3e315b(0x165)](_0x12c7cd=[],_0x2abff9=[]){const _0x1f15f7=_0x3e315b;return napCatCore[_0x1f15f7(0x18f)][_0x1f15f7(0x17a)]()[_0x1f15f7(0x183)](_0x12c7cd,_0x2abff9);}}