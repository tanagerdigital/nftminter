(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5977)}])},5977:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return q}});var a=n(5893),i=n(9008),s=n.n(i),r=n(9889),o=n.n(r),p=n(5675),l=n.n(p),u=n(250),d=n.n(u);let c=t=>{let{person:e}=t;return(0,a.jsxs)("div",{className:d().person,onClick:function(){window.open(e.url)},children:[(0,a.jsx)(l(),{src:"/nftminter/images/twitter_black.png",alt:"",width:"30",height:"30"}),(0,a.jsx)("span",{children:e.name})]})},m=t=>{let{persons:e}=t;return(0,a.jsx)("div",{className:d().persons,children:e.map((t,e)=>(0,a.jsx)(c,{person:t},e))})},y=t=>{let{desc:e}=t;return(0,a.jsx)("div",{className:d().desc,children:e})},g=t=>{let e,{step:n}=t;return console.log("step.person: ",n.person),e=void 0!==n.person?(0,a.jsx)(m,{persons:n.person}):(0,a.jsx)(y,{desc:n.desc}),(0,a.jsxs)("div",{className:d().guideline,children:[(0,a.jsx)("div",{className:d().title,children:n.title}),e]})},_=[{title:"1.Where 2 find my NFT",desc:"当 NFT 显示 mint 成功后，你不会在这个页面看到它。 正确的方式是，访问 OpenSea，在个人资料 - 我的搜集处找到它。"},{title:"2. Visit our Github",desc:"访问 Tanager 的 Github ，你可以参考我们页面的代码，自行开发一套 Mint NFT 网页流程。"},{title:"3. Read our articles about NFT and marketing",desc:"2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"},{title:"4. Get to know Tanager and our Core Developers",person:[{name:"@tanager2022",url:"https://twitter.com/tanager2022"},{name:"@KunLiu_xyz",url:"https://twitter.com/KunLiu_xyz"},{name:"@0xNomadJames",url:"https://twitter.com/0xNomadJames"}]}],b=()=>(0,a.jsx)("div",{className:o().background,children:_.map((t,e)=>(0,a.jsx)(g,{step:t},e))});var f=n(7294),w=n(1417),T=n(241),h=n(4146),x=n(1744);let v=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address[]",name:"_droplist",type:"address[]"}],name:"airdrop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_uri",type:"string"}],name:"changeBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintStart",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isStart",type:"bool"}],name:"setStart",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];var j=null,N=null,M=null;async function k(){if(console.log("start ethers"),window.ethereum){window.ethers=w;let t=new T.Q(window.ethereum);await t.send("eth_requestAccounts",[]),N=t.getSigner();let e=await t.getNetwork(),n=e.chainId;if(e.name,80001!==n){alert("Unsupported ChainID: ".concat(n,".Supported ChainID: 80001. Mumbai Test Network."));return}window.signer=N,console.log("signer address",j=await N.getAddress()),M=new h.CH("0x681e419EF87Ed964ccd7C3b6425361Df23639276",v,t),window.tanager101=M}else alert("Please connect to Metamask.")}async function F(){await M.connect(N).mint()}async function C(){let t=await N.provider.getBalance(await N.getAddress());return x.dF(t)}async function I(){return console.log("connect wallet"),await k(),j}var A=n(1002),S=n.n(A);let P=()=>{let[t,e]=(0,f.useState)("Connect Wallet"),[n,i]=(0,f.useState)(!1);async function s(){try{i(!0);let t=await I();e(t.replace(t.substring(8,38),"*******")),console.log("set addr: ",t),i(!1)}catch(n){e("Connect Wallet"),i(!1),console.log(n)}}return(0,a.jsxs)("nav",{className:"flex justify-between items-center py-4 mx-auto",children:[(0,a.jsxs)("div",{className:S().titleWrapper,children:[(0,a.jsx)(l(),{src:"/nftminter/images/logo.png",alt:"Tanager Logo",width:47,height:47}),(0,a.jsx)("span",{className:S().header_title,children:"Tanager"})]}),(0,a.jsx)("button",{className:S().connect_button,onClick:s,children:t})]})};var L=n(5077),O=n.n(L);let R=["https://testnets.opensea.io/collection/tanager101","https://mirror.xyz/0x2cE37FE0723b15D59Cc3adb843D3f79baec47333","https://github.com/tanagerdigital/nftminter","https://twitter.com/tanager2022"],E=()=>!0,W=()=>{function t(t){console.log("platform",R[t]),E()&&window.open(R[t])}async function e(){try{await F();let t=await C();console.log("balance:",t)}catch(e){console.log("mint error:",e),alert(e)}}return(0,a.jsxs)("div",{className:"corners",children:[(0,a.jsxs)("div",{className:O().content,children:[(0,a.jsx)("div",{className:O().title,children:"Tanager"}),(0,a.jsx)("div",{className:O().button_wrapper,onClick:e,children:(0,a.jsx)("div",{className:"".concat(O().title," ").concat(O().button),children:"Mint your 1st NFT"})})]}),(0,a.jsx)("div",{className:"".concat(O().topLeft," ").concat(O().corner_button),onClick:()=>t(0)}),(0,a.jsx)("div",{className:"".concat(O().topRight," ").concat(O().corner_button),onClick:()=>t(1)}),(0,a.jsx)("div",{className:"".concat(O().bottomLeft," ").concat(O().corner_button),onClick:()=>t(2)}),(0,a.jsx)("div",{className:"".concat(O().bottomCenter," ").concat(O().arrow_button),onClick:function(){console.log("down")}}),(0,a.jsx)("div",{className:"".concat(O().bottomRight," ").concat(O().corner_button),onClick:()=>t(3)})]})};var z=n(4848),J=n.n(z);let D=()=>(0,a.jsxs)("div",{className:"min-h-screen",children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Tanager Minter"}),(0,a.jsx)("title",{children:"Tanager Mint Page"}),(0,a.jsx)("meta",{name:"description",content:"2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"}),(0,a.jsx)("meta",{itemProp:"name",content:"Tanager Mint Page"}),(0,a.jsx)("meta",{itemProp:"description",content:"2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"}),(0,a.jsx)("meta",{itemProp:"image",content:"https://tanagerdigital.github.io/nftminter/images/logo.png"}),(0,a.jsx)("meta",{property:"og:url",content:"https://tanagerdigital.github.io/nftminter"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"Tanager Mint Page"}),(0,a.jsx)("meta",{property:"og:description",content:"2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"}),(0,a.jsx)("meta",{property:"og:image",content:"https://tanagerdigital.github.io/nftminter/images/logo.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Tanager Mint Page"}),(0,a.jsx)("meta",{name:"twitter:description",content:"2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://tanagerdigital.github.io/nftminter/images/logo.png"})]}),(0,a.jsxs)("div",{className:J().header,children:[(0,a.jsx)(P,{}),(0,a.jsxs)("main",{className:"main",children:[(0,a.jsx)(W,{}),(0,a.jsx)(b,{})]})]})]});var q=D},9889:function(t){t.exports={background:"guide_background__H96To"}},250:function(t){t.exports={guideline:"guideline_guideline__QWLZq",title:"guideline_title__SiVc4",desc:"guideline_desc__FFcAJ",persons:"guideline_persons__Xqjye",person:"guideline_person__fdPzm"}},1002:function(t){t.exports={titleWrapper:"header_titleWrapper__SjPSs",header_title:"header_header_title__uKVKe",connect_button:"header_connect_button__bqArP"}},5077:function(t){t.exports={corners:"mint_corners__lqZ6g",corner_button:"mint_corner_button__gZxBy",arrow_button:"mint_arrow_button__hc8A_",topLeft:"mint_topLeft__HlNcy",topRight:"mint_topRight__WzrJa",bottomLeft:"mint_bottomLeft__cyJAQ",bottomRight:"mint_bottomRight__HoJRd",bottomCenter:"mint_bottomCenter__t3BKc",content:"mint_content__e2Jxr",background:"mint_background__59HS2",title:"mint_title___Ltmu",button_wrapper:"mint_button_wrapper__Z6T1Q",button:"mint_button__asyiz"}},4848:function(t){t.exports={main:"index_main__3wZvj",header:"index_header__pInMz"}},8677:function(){},2808:function(){}},function(t){t.O(0,[38,774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);