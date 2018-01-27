webpackJsonp([0],{584:function(t,e,i){function n(t){i(616)}var a=i(9)(i(603),i(628),n,"data-v-3b9265fb",null);t.exports=a.exports},587:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(57),a=i.n(n),s=i(66),o=i.n(s),A=i(201),l=i.n(A),r=i(202),c=i.n(r),d=i(129),p=i(49),g=i(86),u=i.i(d.a)("transform");e.default={mixins:[g.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay({list:this.songs})}},i.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTransalteY,t),i=1,n=0,a=Math.abs(t/this.imageHeight);t>0&&(i=1+a,n=10),this.$refs.layer.style[u]="translate3d(0,"+e+"px,0)",t<this.minTransalteY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[u]="scale("+i+")",this.$refs.bgImage.style.zIndex=n}},components:{Scroll:o.a,Loading:l.a,SongList:c.a}}},588:function(t,e,i){e=t.exports=i(576)(!0),e.push([t.i,".music-list[data-v-4a6057ee]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-4a6057ee]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-4a6057ee]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-4a6057ee]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-4a6057ee]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-4a6057ee]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-4a6057ee]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-4a6057ee]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-4a6057ee]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-4a6057ee]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-4a6057ee]{position:relative;height:100%;background:#222}.music-list .list[data-v-4a6057ee]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-4a6057ee]{padding:20px 30px}.music-list .list .loading-container[data-v-4a6057ee]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/Administrator/Desktop/vue-music-master (1)/vue-music-master/src/components/musicList/musicList.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"musicList.vue",sourcesContent:["\n.music-list[data-v-4a6057ee] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-4a6057ee] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-4a6057ee] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-4a6057ee] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-4a6057ee] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-4a6057ee] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-4a6057ee] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-4a6057ee] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-4a6057ee] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-4a6057ee] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-4a6057ee] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-4a6057ee] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-4a6057ee] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-4a6057ee] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},589:function(t,e,i){var n=i(588);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(577)("17fcc5d8",n,!0,{})},590:function(t,e,i){function n(t){i(589)}var a=i(9)(i(587),i(591),n,"data-v-4a6057ee",null);t.exports=a.exports},591:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music-list"},[i("div",{staticClass:"back",on:{click:t.back}},[i("i",{staticClass:"icon-back"})]),t._v(" "),i("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[i("div",{staticClass:"play-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[i("i",{staticClass:"icon-play"}),t._v(" "),i("span",{staticClass:"text"},[t._v("随机播放全部")])])])]),t._v(" "),i("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),i("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[i("div",{staticClass:"song-list-wrapper"},[i("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[i("loading")],1)])],1)},staticRenderFns:[]}},594:function(t,e,i){"use strict";function n(){var t=o()({},{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0});return i.i(A.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function a(t){var e=o()({},{g_tk:5381,loginUin:0,hostUin:0,format:A.a,inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:200,songstatus:1});return i.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,l.c)}e.b=n,e.a=a;var s=i(87),o=i.n(s),A=i(200),l=i(65)},603:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(57),a=i.n(n),s=i(49),o=i(594),A=i(65),l=i(130),r=i(590),c=i.n(r);e.default={data:function(){return{songs:[]}},components:{MusicList:c.a},computed:a()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},i.i(s.a)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id||this.$router.push("/singer"),i.i(o.a)(this.singer.id).then(function(e){e.code===A.a&&(t.songs=t._normalizeSongs(e.data.list))})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t,n){var a=t.musicData;a.songid&&a.albummid&&e.push(i.i(l.b)(a))}),e}}}},606:function(t,e,i){e=t.exports=i(576)(!0),e.push([t.i,".slide-enter-active[data-v-3b9265fb],.slide-leave-active[data-v-3b9265fb]{transition:all .3s}.slide-enter[data-v-3b9265fb],.slide-leave-to[data-v-3b9265fb]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["C:/Users/Administrator/Desktop/vue-music-master (1)/vue-music-master/src/views/singer/details.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"details.vue",sourcesContent:["\n.slide-enter-active[data-v-3b9265fb],\n.slide-leave-active[data-v-3b9265fb] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-3b9265fb],\n.slide-leave-to[data-v-3b9265fb] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},616:function(t,e,i){var n=i(606);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(577)("09a0fd72",n,!0,{})},628:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("music-list",{attrs:{songs:t.songs,"bg-image":t.bgImage,title:t.title}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.ab8b06ade73a5c5458d8.js.map