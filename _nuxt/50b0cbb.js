(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{257:function(t,e,r){"use strict";r.r(e);var o={props:{url:{type:String,default:""}},methods:{copyUrl:function(){navigator.clipboard.writeText(this.url),this.$toast.show({type:"success",title:"Copied!",message:"Image URL copied to clipboard!",timeout:5})}}},l=r(50),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row items-center justify-center my-2 p-2 bg-purple-800 rounded-md cursor-pointer w-80",on:{click:t.copyUrl}},[r("img",{staticClass:"w-12 h-12 ounded-md object-contain",attrs:{src:t.url}}),t._v(" "),r("p",{staticClass:"ml-2",attrs:{href:t.url}},[t._v(t._s(t.url))])])}),[],!1,null,null,null);e.default=component.exports}}]);