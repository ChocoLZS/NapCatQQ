const _0x427b55=_0x4b23;function _0x538c(){const _0x29bb48=['KfdnB','isDelete','onQRCodeSessionFailed','HPczS','[KickedOffLine]\x20[','dataPathGlobal','floor','BVsAc','296680natAJw','129815PYEujq','数据库初始化失败','initDataListener','onMemberInfoChange','IvYpR','./.config/QQ','addKernelBuddyListener','-v2.db','GroupListener','nlIDD','启动失败:\x20','md5','getLoginList','onProfileDetailInfoChanged','Xshrl','ghYOb','oWNEu','addKernelMsgListener','buddyList','当前账号(','./nt_qq/global','stringify','fMhRJ','fileLog','proxyHandler','tzjtE','memberCount','addListener','loginService','pngBase64QrcodeData','onLoginFailed','find','forEach','length','fECAH','BuddyListener','pmalO','uin','onLoginSuccessFuncList','Mbcdk','NodeIQQNTWrapperEngine','NodeQQNTWrapperUtil',')\x20在线状态变更','sceneId','onLoginSuccess','onQRCodeLoginSucceed','NodeIKernelMsgListener','快速登录失败\x20','curVersion','dataPath','220705IluBrf','getGroupService','init\x20failed\x20','ProfileListener','VwCzQ','startNT','本账号数据/缓存目录：','mkdirSync','140022008','KzOTG','base64','initWithDeskTopConfig','engine','uid','addKernelGroupListener','没有可快速登录的QQ号','resolve','onLineDev','init','util','xyRLp','jeSBp','1870372YTOvjE','catch','consoleLogLevel','NodeIGlobalAdapter','VagVJ','initSession','loginListener','LocalLoginInfoList','packet_received','15992870kQZouG','CXzyD','fileLogLevel','FpmNb','packet_sent','onBuddyListChange','initSession\x20failed','mFlAy','hXcHd','split','_GW_B','errMsg','qrcodeUrl','114IBFFXh','assign','NodeIQQNTWrapperSession','yRhcp','digest','consoleLog','BLTXq','update','getNTUserDataInfoConfig','loginErrorInfo','then','initConfig','564samFhC','getQRCodePicture','constructor','onQRCodeGetPicture','syuqu','vzdcx','getNextMemberList','push','SuPnh','result','jPJEz','onSessionInitComplete','CFQNu','groupCode','mIrAL','onGroupListUpdate','addKernelLoginListener','207vSlLSt','GIHki','getBuddyService','NodeIKernelLoginListener','iHwyd','GBHVt','onRecvMsg','onRecvSysMsg','jEsxl','createMemberListScene','NodeIKernelProfileListener','782832ncaeFG','tXzjt','has','XPcmQ','tipsDesc','now','clientType','kNBbf','map','MRcZR','passwordLogin','NodeIKernelSessionListener','./NapCat/data','qHsTq','set','session','V1_WIN_NQ_','tipsTitle','账号设备(','isQuickLogin','infos','getBuddyList','devUid','get','getMsgService','undefined','NodeIKernelGroupListener','message_sent','TgxuO','登录失败','140022013','OAPDo','quickLogin','LPNNl','groupMemberList_MainWindow','NodeIDependsAdapter','4228NBjIUO','MsgListener','last_message_time','Windows\x2010\x20Pro'];_0x538c=function(){return _0x29bb48;};return _0x538c();}(function(_0x1fafc9,_0x2b1d27){const _0x1fa75a=_0x4b23,_0x5e1d28=_0x1fafc9();while(!![]){try{const _0xc86d5d=-parseInt(_0x1fa75a(0x1fd))/0x1+-parseInt(_0x1fa75a(0x1f0))/0x2*(-parseInt(_0x1fa75a(0x1b0))/0x3)+-parseInt(_0x1fa75a(0x1cc))/0x4+-parseInt(_0x1fa75a(0x22f))/0x5*(-parseInt(_0x1fa75a(0x1a4))/0x6)+parseInt(_0x1fa75a(0x18e))/0x7+parseInt(_0x1fa75a(0x1fc))/0x8*(parseInt(_0x1fa75a(0x1c1))/0x9)+-parseInt(_0x1fa75a(0x197))/0xa;if(_0xc86d5d===_0x2b1d27)break;else _0x5e1d28['push'](_0x5e1d28['shift']());}catch(_0x4968ed){_0x5e1d28['push'](_0x5e1d28['shift']());}}}(_0x538c,0x6955c));import _0x538e6c from'@/core/wrapper';function _0x4b23(_0x29b768,_0x59dc61){const _0x538cf0=_0x538c();return _0x4b23=function(_0x4b23d4,_0x4f0e7){_0x4b23d4=_0x4b23d4-0x186;let _0x7b9eaa=_0x538cf0[_0x4b23d4];return _0x7b9eaa;},_0x4b23(_0x29b768,_0x59dc61);}import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x45cda8 from'node:path';import _0x1ca66 from'node:os';import _0x4d3892 from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/common/utils/db';import{sleep}from'@/common/utils/helper';import _0x323502 from'node:crypto';import{rawFriends,friends,groupMembers,groups,selfInfo,stat}from'@/core/data';import{NTEventDispatch}from'@/common/utils/EventTask';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x427b55(0x1db)];[_0x427b55(0x18b)];['engine'];[_0x427b55(0x194)];[_0x427b55(0x219)];[_0x427b55(0x223)]=[];[_0x427b55(0x215)]={'get'(target,prop,receiver){const _0x514806=_0x427b55,YibxBj={'fMhRJ':function(callee,param1){return callee(param1);},'OAPDo':_0x514806(0x1e5)};if(typeof target[prop]===YibxBj[_0x514806(0x1eb)])return(...args)=>{const _0x5e24e8=_0x514806;YibxBj[_0x5e24e8(0x213)](logDebug,target[_0x5e24e8(0x1b2)]['name']+'\x20has\x20no\x20method\x20'+prop);};return Reflect[_0x514806(0x1e3)](target,prop,receiver);}};constructor(){const _0xe01f42=_0x427b55,_0x5e9e0b={'GIHki':function(_0x2110ca,_0x345e94){return _0x2110ca+_0x345e94;},'sXvuG':_0xe01f42(0x210),'fZAeT':')已登录,无法重复登录','iHwyd':function(_0x356404,_0x55075c,_0x193004){return _0x356404(_0x55075c,_0x193004);},'ghYOb':function(_0x38a53e,_0x4cb6b1){return _0x38a53e(_0x4cb6b1);},'unZUF':function(_0x49dce0,_0x182c66){return _0x49dce0(_0x182c66);},'hXcHd':function(_0x4f17f0,_0x341214){return _0x4f17f0(_0x341214);},'FpmNb':_0xe01f42(0x1d8),'BLTXq':function(_0x294a50,_0x369f67,_0x79f4b2){return _0x294a50(_0x369f67,_0x79f4b2);},'mFlAy':_0xe01f42(0x235),'tzjtE':_0xe01f42(0x19d),'KzOTG':'登录失败','pmalO':function(_0x4a86f4,_0x9e0373){return _0x4a86f4==_0x9e0373;}};this[_0xe01f42(0x23b)]=new _0x538e6c[(_0xe01f42(0x225))](),this[_0xe01f42(0x18b)]=new _0x538e6c[(_0xe01f42(0x226))](),this[_0xe01f42(0x219)]=new _0x538e6c['NodeIKernelLoginService'](),this[_0xe01f42(0x1db)]=new _0x538e6c[(_0xe01f42(0x1a6))](),this['loginListener']=new LoginListener(),this[_0xe01f42(0x194)]['onUserLoggedIn']=_0x565213=>{const _0x26bc23=_0xe01f42;logError(_0x5e9e0b[_0x26bc23(0x1c2)](_0x5e9e0b['sXvuG']+_0x565213,_0x5e9e0b['fZAeT']));},this['loginListener'][_0xe01f42(0x22a)]=_0x32c7e2=>{const _0x5f4890=_0xe01f42,_0x563fe9={'mPZLz':function(_0x4bec5c,_0x1d674c,_0x17ddce){const _0x30996b=_0x4b23;return _0x5e9e0b[_0x30996b(0x1aa)](_0x4bec5c,_0x1d674c,_0x17ddce);}};this['initSession'](_0x32c7e2['uin'],_0x32c7e2[_0x5f4890(0x23c)])[_0x5f4890(0x1ae)](_0x4179a0=>{const _0x5a3ef2=_0x5f4890;selfInfo[_0x5a3ef2(0x222)]=_0x32c7e2[_0x5a3ef2(0x222)],selfInfo[_0x5a3ef2(0x23c)]=_0x32c7e2[_0x5a3ef2(0x23c)],napCatConfig['read'](),_0x5e9e0b[_0x5a3ef2(0x1c5)](setLogLevel,napCatConfig[_0x5a3ef2(0x199)],napCatConfig[_0x5a3ef2(0x190)]),_0x5e9e0b[_0x5a3ef2(0x20c)](enableFileLog,napCatConfig[_0x5a3ef2(0x214)]),_0x5e9e0b['unZUF'](enableConsoleLog,napCatConfig[_0x5a3ef2(0x1a9)]),_0x5e9e0b[_0x5a3ef2(0x19f)](setLogSelfInfo,selfInfo);const _0x398c6=_0x45cda8[_0x5a3ef2(0x188)](this['dataPath'],_0x5e9e0b[_0x5a3ef2(0x19a)]);_0x4d3892['mkdirSync'](_0x398c6,{'recursive':!![]}),_0x5e9e0b['BLTXq'](logDebug,_0x5e9e0b[_0x5a3ef2(0x19e)],_0x398c6),dbUtil[_0x5a3ef2(0x18a)](_0x45cda8[_0x5a3ef2(0x188)](_0x398c6,'./'+_0x32c7e2['uin']+_0x5a3ef2(0x204)))[_0x5a3ef2(0x1ae)](()=>{const _0xd96d2f=_0x5a3ef2,_0x10589e={'TgxuO':function(_0x491b2e,_0x1af48a,_0x3a81b5){return _0x491b2e(_0x1af48a,_0x3a81b5);},'Mbcdk':function(_0x2a43ed,_0x387880){return _0x2a43ed instanceof _0x387880;}};this['initDataListener'](),this['onLoginSuccessFuncList'][_0xd96d2f(0x1d4)](_0x6f62a2=>{const _0x19f0bb=_0xd96d2f;new Promise((_0xaf2ad6,_0x12f7ad)=>{const _0x4b78ec=_0x4b23,_0x63ab39=_0x10589e[_0x4b78ec(0x1e8)](_0x6f62a2,_0x32c7e2[_0x4b78ec(0x222)],_0x32c7e2[_0x4b78ec(0x23c)]);_0x10589e[_0x4b78ec(0x224)](_0x63ab39,Promise)&&_0x63ab39['then'](_0xaf2ad6)['catch'](_0x12f7ad);})[_0x19f0bb(0x1ae)]();});})[_0x5a3ef2(0x18f)](_0x4621de=>{const _0x3bc623=_0x5a3ef2;_0x563fe9['mPZLz'](logError,_0x3bc623(0x1fe),_0x4621de);});})[_0x5f4890(0x18f)](_0x48b5e9=>{const _0x432cbf=_0x5f4890;_0x5e9e0b[_0x432cbf(0x1c5)](logError,_0x5e9e0b[_0x432cbf(0x216)],_0x48b5e9);throw new Error(_0x432cbf(0x207)+JSON[_0x432cbf(0x212)](_0x48b5e9));});},this[_0xe01f42(0x194)][_0xe01f42(0x1f6)]=(_0x3a66d0,_0x56cac6,_0x48c19c)=>{const _0x2a3a44=_0xe01f42;_0x5e9e0b[_0x2a3a44(0x1aa)](logError,_0x5e9e0b[_0x2a3a44(0x238)],_0x48c19c),_0x5e9e0b[_0x2a3a44(0x221)](_0x3a66d0,0x1)&&_0x56cac6==0x3&&this[_0x2a3a44(0x219)][_0x2a3a44(0x1b1)]();},this[_0xe01f42(0x194)][_0xe01f42(0x21b)]=_0x1200a5=>{const _0x477ade=_0xe01f42;_0x5e9e0b[_0x477ade(0x1c5)](logError,_0x477ade(0x1e9),_0x1200a5);},this['loginListener']=new Proxy(this[_0xe01f42(0x194)],this['proxyHandler']),this[_0xe01f42(0x219)][_0xe01f42(0x1c0)](new _0x538e6c[(_0xe01f42(0x1c4))](this['loginListener'])),this[_0xe01f42(0x1af)]();}get['dataPath'](){const _0x521e20=_0x427b55;let _0x195a14=this['util'][_0x521e20(0x1ac)]();return!_0x195a14&&(_0x195a14=_0x45cda8['resolve'](_0x1ca66['homedir'](),_0x521e20(0x202)),_0x4d3892[_0x521e20(0x236)](_0x195a14,{'recursive':!![]})),_0x195a14;}get[_0x427b55(0x1f9)](){const _0x3a97bc=_0x427b55,_0x2d9fa3={'MRcZR':_0x3a97bc(0x211)};return _0x45cda8[_0x3a97bc(0x188)](this[_0x3a97bc(0x22e)],_0x2d9fa3[_0x3a97bc(0x1d5)]);}['initConfig'](){const _0x626af8=_0x427b55,_0x5d3a65={'nmgLG':_0x626af8(0x1f3)};this[_0x626af8(0x23b)][_0x626af8(0x23a)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo['curVersion'],'os_version':_0x5d3a65['nmgLG'],'use_xlog':!![],'qua':_0x626af8(0x1dc)+qqVersionConfigInfo[_0x626af8(0x22d)]['replace']('-','_')+_0x626af8(0x1a1),'global_path_config':{'desktopGlobalPath':this['dataPathGlobal']},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x538e6c[(_0x626af8(0x191))](new GlobalAdapter())),this['loginService']['initConfig']({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this['dataPathGlobal'],'clientVer':qqVersionConfigInfo[_0x626af8(0x22d)],'hostName':hostname});}[_0x427b55(0x193)](_0x1c79b7,_0x3af611){const _0x462226={'HPczS':function(_0x11c1c6,_0x17ac83){return _0x11c1c6===_0x17ac83;},'IvYpR':function(_0x3b2f26,_0xc46fa1){return _0x3b2f26(_0xc46fa1);},'EDKSL':function(_0x3e60dc,_0x141b93){return _0x3e60dc(_0x141b93);},'kNBbf':function(_0x126f21,_0x10ca80,_0x4a5d85,_0xd1d4b3){return _0x126f21(_0x10ca80,_0x4a5d85,_0xd1d4b3);}};return new Promise(async(_0x649eda,_0x33d6c3)=>{const _0x4f92fd=_0x4b23,_0x5a6232=await _0x462226[_0x4f92fd(0x1d3)](genSessionConfig,_0x1c79b7,_0x3af611,this['dataPath']),_0x350011=new SessionListener();_0x350011[_0x4f92fd(0x1bb)]=_0x1db4e9=>{const _0x28cc13=_0x4f92fd;if(_0x462226[_0x28cc13(0x1f7)](_0x1db4e9,0x0))return _0x462226[_0x28cc13(0x201)](_0x649eda,0x0);_0x462226['EDKSL'](_0x33d6c3,_0x1db4e9);},this[_0x4f92fd(0x1db)][_0x4f92fd(0x18a)](_0x5a6232,new _0x538e6c[(_0x4f92fd(0x1ef))](new DependsAdapter()),new _0x538e6c['NodeIDispatcherAdapter'](new DispatcherAdapter()),new _0x538e6c[(_0x4f92fd(0x1d7))](_0x350011));try{this[_0x4f92fd(0x1db)][_0x4f92fd(0x234)](0x0);}catch(_0x1ac35a){try{this['session'][_0x4f92fd(0x234)]();}catch(_0x11d9fb){_0x33d6c3(_0x4f92fd(0x231)+_0x11d9fb);}}});}[_0x427b55(0x1ff)](){const _0x4faa72=_0x427b55,_0x3ac05a={'CXzyD':function(_0x34415e,_0x4e3126){return _0x34415e===_0x4e3126;},'jPJEz':function(_0x5f5a38,_0x14d6c4){return _0x5f5a38(_0x14d6c4);},'jeSBp':function(_0x2e9fa5,_0x27377f){return _0x2e9fa5+_0x27377f;},'FoksG':_0x4faa72(0x1de),'WQlkA':_0x4faa72(0x227),'yRhcp':function(_0x4c74bd,_0x602a51){return _0x4c74bd+_0x602a51;},'YEdsa':function(_0x4ad7f2,_0x43f5f5){return _0x4ad7f2+_0x43f5f5;},'oWNEu':_0x4faa72(0x1f8),'Xshrl':function(_0x2f143f,_0x13663d){return _0x2f143f/_0x13663d;},'LPNNl':_0x4faa72(0x1ee),'CFQNu':function(_0x3c9e0a,_0x2978e1,_0x1fe506){return _0x3c9e0a(_0x2978e1,_0x1fe506);}},_0x2e73d5=new MsgListener();_0x2e73d5[_0x4faa72(0x189)]=_0x16991a=>{_0x16991a['map'](_0x44c41d=>{const _0x2f4925=_0x4b23;_0x3ac05a[_0x2f4925(0x198)](_0x44c41d[_0x2f4925(0x1d2)],0x2)&&_0x3ac05a[_0x2f4925(0x1ba)](log,_0x3ac05a[_0x2f4925(0x18d)](_0x3ac05a[_0x2f4925(0x18d)](_0x3ac05a['FoksG'],_0x44c41d[_0x2f4925(0x1e2)]),_0x3ac05a['WQlkA']));});},_0x2e73d5['onKickedOffLine']=_0x1c2cc3=>{const _0x4bfc86=_0x4faa72;_0x3ac05a[_0x4bfc86(0x1ba)](log,_0x3ac05a[_0x4bfc86(0x1a7)](_0x3ac05a['YEdsa'](_0x3ac05a[_0x4bfc86(0x20d)],_0x1c2cc3[_0x4bfc86(0x1dd)]),']\x20')+_0x1c2cc3[_0x4bfc86(0x1d0)]);},_0x2e73d5['onAddSendMsg']=_0x2786e7=>{const _0xf7c7a3=_0x4faa72;stat[_0xf7c7a3(0x19b)]+=0x1,stat[_0xf7c7a3(0x1e7)]+=0x1,stat['last_message_time']=Math[_0xf7c7a3(0x1fa)](_0x3ac05a[_0xf7c7a3(0x20b)](Date[_0xf7c7a3(0x1d1)](),0x3e8));},_0x2e73d5[_0x4faa72(0x1c7)]=_0x2a3e36=>{const _0x356452=_0x4faa72;stat[_0x356452(0x196)]+=0x1,stat['message_received']+=_0x2a3e36[_0x356452(0x21e)],stat[_0x356452(0x1f2)]=Math[_0x356452(0x1fa)](_0x3ac05a[_0x356452(0x20b)](Date['now'](),0x3e8));},_0x2e73d5[_0x4faa72(0x1c8)]=(..._0x5aea9c)=>{const _0x148a9d=_0x4faa72;stat[_0x148a9d(0x196)]+=0x1;},this[_0x4faa72(0x218)](_0x2e73d5);const _0x9c7be2=new BuddyListener();_0x9c7be2[_0x4faa72(0x19c)]=_0x2c8c61=>{const _0x435c82=_0x4faa72;rawFriends[_0x435c82(0x21e)]=0x0,rawFriends['push'](..._0x2c8c61);for(const _0x1ad749 of _0x2c8c61){for(const _0xba4ac0 of _0x1ad749[_0x435c82(0x20f)]){const _0x27bf5a=friends[_0x435c82(0x1e3)](_0xba4ac0[_0x435c82(0x23c)]);_0x27bf5a?Object['assign'](_0x27bf5a,_0xba4ac0):friends[_0x435c82(0x1da)](_0xba4ac0[_0x435c82(0x23c)],_0xba4ac0);}}},this[_0x4faa72(0x218)](_0x9c7be2),this[_0x4faa72(0x1db)][_0x4faa72(0x1c3)]()[_0x4faa72(0x1e1)](!![])[_0x4faa72(0x1ae)](_0x3a29ce=>{});const _0x4fb328=new ProfileListener();_0x4fb328[_0x4faa72(0x20a)]=_0x40590f=>{const _0x206c0e=_0x4faa72;_0x40590f[_0x206c0e(0x23c)]===selfInfo['uid']&&Object[_0x206c0e(0x1a5)](selfInfo,_0x40590f);},_0x4fb328['onSelfStatusChanged']=_0x42ebe3=>{},this[_0x4faa72(0x218)](_0x4fb328);const _0x13b647=new GroupListener();_0x13b647[_0x4faa72(0x1bf)]=(_0x3f07ee,_0x340b3d)=>{const _0x117ba6=_0x4faa72,_0x4492c8={'SuPnh':_0x3ac05a[_0x117ba6(0x1ed)]};_0x340b3d[_0x117ba6(0x1d4)](_0x8bd78a=>{const _0x11abff=_0x117ba6,_0x31852f=groups[_0x11abff(0x1e3)](_0x8bd78a[_0x11abff(0x1bd)]);_0x31852f&&_0x8bd78a[_0x11abff(0x217)]===_0x31852f[_0x11abff(0x217)]?Object['assign'](_0x31852f,_0x8bd78a):groups[_0x11abff(0x1da)](_0x8bd78a[_0x11abff(0x1bd)],_0x8bd78a);const _0x3ce785=this[_0x11abff(0x1db)][_0x11abff(0x230)]()[_0x11abff(0x1ca)](_0x8bd78a[_0x11abff(0x1bd)],_0x4492c8[_0x11abff(0x1b8)]);this['session'][_0x11abff(0x230)]()[_0x11abff(0x1b6)](_0x3ce785,undefined,0xbb8)[_0x11abff(0x1ae)](_0x40334a=>{});});},_0x13b647['onMemberListChange']=_0x32f9e8=>{const _0x405ea5=_0x4faa72,_0x48e224=_0x32f9e8[_0x405ea5(0x228)]['split']('_')[0x0];if(groupMembers[_0x405ea5(0x1ce)](_0x48e224)){const _0x5cb66d=groupMembers[_0x405ea5(0x1e3)](_0x48e224);_0x32f9e8['infos'][_0x405ea5(0x21d)]((_0x60468b,_0x348620)=>{const _0x4eedb6=_0x405ea5,_0x1dd25e=_0x5cb66d[_0x4eedb6(0x1e3)](_0x348620);_0x1dd25e?Object[_0x4eedb6(0x1a5)](_0x1dd25e,_0x60468b):_0x5cb66d[_0x4eedb6(0x1da)](_0x348620,_0x60468b);});}else groupMembers[_0x405ea5(0x1da)](_0x48e224,_0x32f9e8[_0x405ea5(0x1e0)]);},_0x13b647[_0x4faa72(0x200)]=(_0x2973af,_0x1c7288,_0x1c1d8a)=>{const _0x47c690=_0x4faa72;_0x3ac05a[_0x47c690(0x198)](_0x1c7288,0x0)&&_0x1c1d8a[_0x47c690(0x1e3)](selfInfo[_0x47c690(0x23c)])&&_0x1c1d8a['get'](selfInfo[_0x47c690(0x23c)])?.[_0x47c690(0x1f5)]&&_0x3ac05a[_0x47c690(0x1bc)](setTimeout,()=>{groups['delete'](_0x2973af);},0x1388);const _0x2373fe=groupMembers[_0x47c690(0x1e3)](_0x2973af);_0x2373fe?_0x1c1d8a[_0x47c690(0x21d)]((_0x2cf75a,_0x2172c5)=>{const _0x1b27f9=_0x47c690,_0x515e68=_0x2373fe[_0x1b27f9(0x1e3)](_0x2172c5);_0x515e68?Object[_0x1b27f9(0x1a5)](_0x515e68,_0x2cf75a):_0x2373fe[_0x1b27f9(0x1da)](_0x2172c5,_0x2cf75a);}):groupMembers['set'](_0x2973af,_0x1c1d8a);},this['addListener'](_0x13b647);}[_0x427b55(0x218)](_0x406851){const _0x391235=_0x427b55,_0x45ef34={'syuqu':_0x391235(0x205),'xyRLp':_0x391235(0x1f1),'nlIDD':_0x391235(0x232)};_0x406851=new Proxy(_0x406851,this[_0x391235(0x215)]);switch(_0x406851['constructor']['name']){case _0x391235(0x220):{return this[_0x391235(0x1db)][_0x391235(0x1c3)]()[_0x391235(0x203)](new _0x538e6c['NodeIKernelBuddyListener'](_0x406851));}case _0x45ef34[_0x391235(0x1b4)]:{return this[_0x391235(0x1db)][_0x391235(0x230)]()[_0x391235(0x186)](new _0x538e6c[(_0x391235(0x1e6))](_0x406851));}case _0x45ef34[_0x391235(0x18c)]:{return this['session'][_0x391235(0x1e4)]()[_0x391235(0x20e)](new _0x538e6c[(_0x391235(0x22b))](_0x406851));}case _0x45ef34[_0x391235(0x206)]:{return this['session']['getProfileService']()['addKernelProfileListener'](new _0x538e6c[(_0x391235(0x1cb))](_0x406851));}default:return-0x1;}}[_0x427b55(0x229)](_0x43e920){const _0x195025=_0x427b55;NTEventDispatch[_0x195025(0x18a)]({'ListenerMap':_0x538e6c,'WrapperSession':this[_0x195025(0x1db)]}),this[_0x195025(0x223)][_0x195025(0x1b7)](_0x43e920);}async[_0x427b55(0x1ec)](_0x182049){const _0x126fea=_0x427b55,_0x4c9bcf={'GBHVt':function(_0xa4ae8a,_0x53fb70){return _0xa4ae8a!==_0x53fb70;},'KfdnB':_0x126fea(0x187),'vzdcx':function(_0x745c49,_0x5c3259){return _0x745c49(_0x5c3259);},'BVsAc':_0x126fea(0x22c)},_0x1f946f=await this[_0x126fea(0x219)][_0x126fea(0x209)]();if(_0x4c9bcf[_0x126fea(0x1c6)](_0x1f946f[_0x126fea(0x1b9)],0x0))throw new Error(_0x4c9bcf[_0x126fea(0x1f4)]);const _0x496b74=_0x1f946f[_0x126fea(0x195)][_0x126fea(0x21c)](_0x400ea2=>_0x400ea2['uin']===_0x182049);if(!_0x496b74||!_0x496b74?.[_0x126fea(0x1df)])throw new Error(_0x182049+'快速登录不可用');await _0x4c9bcf[_0x126fea(0x1b5)](sleep,0x3e8);const _0x12ae4d=await this[_0x126fea(0x219)]['quickLoginWithUin'](_0x182049);if(!_0x12ae4d[_0x126fea(0x1b9)])throw new Error(_0x4c9bcf[_0x126fea(0x1fb)]+_0x12ae4d[_0x126fea(0x1ad)][_0x126fea(0x1a2)]);return _0x12ae4d;}async['qrLogin'](_0x433518){const _0x1f2f8e={'tXzjt':function(_0x51e0d5,_0x3e25bd,_0xf2f742,_0x513c48){return _0x51e0d5(_0x3e25bd,_0xf2f742,_0x513c48);}};return new Promise((_0x122e35,_0x3b9866)=>{const _0x292b31=_0x4b23,_0x4974b7={'jEsxl':_0x292b31(0x239),'VagVJ':function(_0x236854,_0x505c08,_0x2c6398,_0x49d66a){const _0x2057ba=_0x292b31;return _0x1f2f8e[_0x2057ba(0x1cd)](_0x236854,_0x505c08,_0x2c6398,_0x49d66a);}};this[_0x292b31(0x194)][_0x292b31(0x1b3)]=_0x20c87b=>{const _0x4667a8=_0x292b31,_0x867c3=_0x20c87b[_0x4667a8(0x21a)][_0x4667a8(0x1a0)]('data:image/png;base64,')[0x1],_0x198190=Buffer['from'](_0x867c3,_0x4974b7[_0x4667a8(0x1c9)]);_0x4974b7[_0x4667a8(0x192)](_0x433518,_0x20c87b[_0x4667a8(0x1a3)],_0x20c87b['pngBase64QrcodeData'],_0x198190);},this[_0x292b31(0x219)][_0x292b31(0x1b1)]();});}async[_0x427b55(0x1d6)](_0x2bc3be,_0x11331a,_0x13de44,_0x89ec92,_0xa280c3){const _0x435e15=_0x427b55,_0x530ba9={'RYcWu':_0x435e15(0x208),'XPcmQ':'hex','qHsTq':function(_0x40d4b9,_0x1ea98c){return _0x40d4b9&&_0x1ea98c;},'mIrAL':function(_0x5b350a,_0x4aced5){return _0x5b350a||_0x4aced5;},'fECAH':function(_0x3b1407,_0x661520){return _0x3b1407(_0x661520);},'VwCzQ':_0x435e15(0x1ea)},_0x5a9894=_0x323502['createHash'](_0x530ba9['RYcWu'])[_0x435e15(0x1ab)](_0x11331a)[_0x435e15(0x1a8)](_0x530ba9[_0x435e15(0x1cf)]),_0x1fa02c={'uin':_0x2bc3be,'passwordMd5':_0x5a9894,'step':_0x530ba9[_0x435e15(0x1d9)](_0x13de44,_0x89ec92)&&_0xa280c3?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x530ba9[_0x435e15(0x1be)](_0x13de44,''),'proofWaterRand':_0x89ec92||'','proofWaterSid':_0x530ba9[_0x435e15(0x1be)](_0xa280c3,'')};await this[_0x435e15(0x219)]['getLoginList'](),await _0x530ba9[_0x435e15(0x21f)](sleep,0x3e8);const _0x2d2701=await this['loginService'][_0x435e15(0x1d6)](_0x1fa02c);switch(_0x2d2701[_0x435e15(0x1b9)]){case'0':{break;}case _0x435e15(0x237):{break;}case'4':case _0x530ba9[_0x435e15(0x233)]:default:}}async['getQuickLoginList'](){const _0x2d3651=_0x427b55,_0x4f1ff2=await this['loginService'][_0x2d3651(0x209)]();return _0x4f1ff2;}}export const napCatCore=new NapCatCore();