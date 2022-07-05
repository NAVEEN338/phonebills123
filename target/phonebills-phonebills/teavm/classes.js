"use strict";
function $rt_cls(clsProto){var cls=clsProto.classObject;if(typeof cls==='undefined'){cls=A();cls.$data = clsProto;clsProto.classObject=cls;}return cls;}
function $rt_str(str) {var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return B.C(characters);}
function $rt_ustr(str) {var result = "";var sz = D(str);var array = $rt_createCharArray(sz);E(str, 0, sz, array, 0);for (var i = 0; i < sz; i = (i + 1) | 0) {result += String.fromCharCode(array.data[i]);}return result;}
function $rt_objcls() { return F; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(G.H());}return val;}
function $rt_intern(str) {return I(str);}
function F(){}
$rt_declClass(F,{name:"java.lang.Object",clinit:function(){F_$clinit();}});
function F_$clinit(){F_$clinit=function(){};
J=function($this){$this.$id = $rt_nextId();}
}
$rt_methodStubs(F_$clinit,['J']);
function K($this){var copy = new $this.constructor();for (var field in $this) {if (!$this.hasOwnProperty(field)) {continue;}copy[field] = $this[field];}return copy;}
F.J=function(){
var result=new F();result.J();return result;}
$rt_virtualMethods(F,
"L",function(){return K(this);},
"J",function(){J(this);});
function M(){F.call(this);this.N=false;this.O=false;}
$rt_declClass(M,{name:"java.lang.Throwable",superclass:F,clinit:function(){M_$clinit();}});
function M_$clinit(){M_$clinit=function(){};
P=function($this){$this.N=1;$this.O=1;R($this);return;}
}
$rt_methodStubs(M_$clinit,['P']);
function R($this){return $this;}
M.P=function(){
var result=new M();result.P();return result;}
$rt_virtualMethods(M,
"Q",function(){return R(this);},
"P",function(){P(this);});
function S(){M.call(this);}
$rt_declClass(S,{name:"java.lang.Exception",superclass:M,clinit:function(){S_$clinit();}});
function S_$clinit(){S_$clinit=function(){};
T=function($this){P($this);return;}
}
$rt_methodStubs(S_$clinit,['T']);
S.T=function(){
var result=new S();result.T();return result;}
$rt_virtualMethods(S,
"T",function(){T(this);});
function U(){S.call(this);}
$rt_declClass(U,{name:"java.lang.RuntimeException",superclass:S,clinit:function(){U_$clinit();}});
function U_$clinit(){U_$clinit=function(){};
V=function($this){T($this);return;}
}
$rt_methodStubs(U_$clinit,['V']);
U.V=function(){
var result=new U();result.V();return result;}
$rt_virtualMethods(U,
"V",function(){V(this);});
function W(){U.call(this);}
$rt_declClass(W,{name:"java.lang.IndexOutOfBoundsException",superclass:U,clinit:function(){W_$clinit();}});
function W_$clinit(){W_$clinit=function(){};
X=function($this){V($this);return;}
}
$rt_methodStubs(W_$clinit,['X']);
W.X=function(){
var result=new W();result.X();return result;}
$rt_virtualMethods(W,
"X",function(){X(this);});
function Y(){F.call(this);}
$rt_declClass(Y,{name:"java.util.Map$Entry",superclass:F});
function Y_$clinit(){Y_$clinit=function(){};
}
function Z(){F.call(this);}
$rt_declClass(Z,{name:"java.lang.Cloneable",superclass:F});
function Z_$clinit(){Z_$clinit=function(){};
}
function AB(){F.call(this);}
$rt_declClass(AB,{name:"java.lang.CharSequence",superclass:F});
function AB_$clinit(){AB_$clinit=function(){};
}
function BB(){W.call(this);}
$rt_declClass(BB,{name:"java.lang.StringIndexOutOfBoundsException",superclass:W,clinit:function(){BB_$clinit();}});
function BB_$clinit(){BB_$clinit=function(){};
CB=function($this){X($this);return;}
}
$rt_methodStubs(BB_$clinit,['CB']);
BB.CB=function(){
var result=new BB();result.CB();return result;}
$rt_virtualMethods(BB,
"CB",function(){CB(this);});
function DB(){F.call(this);}
$rt_declClass(DB,{name:"java.util.Map",superclass:F});
function DB_$clinit(){DB_$clinit=function(){};
}
function EB(){F.call(this);}
$rt_declClass(EB,{name:"java.util.AbstractMap",interfaces:[DB],superclass:F,clinit:function(){EB_$clinit();}});
function EB_$clinit(){EB_$clinit=function(){};
FB=function($this){J($this);return;}
}
$rt_methodStubs(EB_$clinit,['FB']);
EB.FB=function(){
var result=new EB();result.FB();return result;}
$rt_virtualMethods(EB,
"FB",function(){FB(this);});
function GB(){F.call(this);}
$rt_declClass(GB,{name:"java.io.Serializable",superclass:F});
function GB_$clinit(){GB_$clinit=function(){};
}
function HB(){EB.call(this);this.IB=0;this.JB=0.0;this.KB=null;this.LB=0;this.MB=0;}
$rt_declClass(HB,{name:"java.util.HashMap",interfaces:[GB],superclass:EB,clinit:function(){HB_$clinit();}});
function HB_$clinit(){HB_$clinit=function(){};
NB=function(a,b){if(((a!==b)&&(PB(a,b)==0))){a=0;}else{a=1;}return a;}
QB=function($this,a){RB($this,a,0.75);return;}
SB=function(a){if((a<1073741824)){if((a!=0)){a=((a-1)|0);a=(a|(a>>1));a=(a|(a>>2));a=(a|(a>>4));a=(a|(a>>8));return (((a|(a>>16))+1)|0);}return 16;}return 1073741824;}
RB=function($this,a,b){FB($this);$this.IB=0;if((!((a>=0)&&(b>0.0)))){$rt_throw(TB.UB());}a=SB(a);$this.LB=0;$this.KB=WB($this,a);$this.JB=b;XB($this);return;}
YB=function(a){return AC(a);}
BC=function($this){QB($this,16);return;}
}
$rt_methodStubs(HB_$clinit,['NB','QB','SB','RB','YB','BC']);
function CC($this,a,b,c){var d;d=$this.KB.data[b];while(((d!==null)&&(!((d.DC==c)&&(NB(a,d.EC)!=0))))){d=d.FC;}return d;}
function GC($this,a,b){var c,d,e;if((a!==null)){c=YB(a);d=(c&(($this.KB.data.length-1)|0));e=CC($this,a,d,c);if((e===null)){$this.IB=(($this.IB+1)|0);e=JC($this,a,d,c);d=(($this.LB+1)|0);$this.LB=d;if((d>$this.MB)){LC($this);}}}else{e=NC($this);if((e===null)){$this.IB=(($this.IB+1)|0);e=JC($this,null,0,0);d=(($this.LB+1)|0);$this.LB=d;if((d>$this.MB)){LC($this);}}}a=e.OC;e.OC=b;return a;}
function PC($this,a){a=RC($this,a);if((a===null)){return null;}return a.OC;}
function WB($this,a){return $rt_createArray(SC,a);}
function TC($this,a){var b,c,d,e,f,g;if((a!=0)){a=(a<<1);}else{a=1;}a=SB(a);b=WB($this,a);c=0;d=((a-1)|0);while((c<$this.KB.data.length)){e=$this.KB.data[c];$this.KB.data[c]=null;while((e!==null)){f=(e.DC&d);a=e.FC;g=b.data;e.FC=g[f];g[f]=e;e=a;}c=((c+1)|0);}$this.KB=b;XB($this);return;}
function RC($this,a){var b;if((a!==null)){b=YB(a);a=CC($this,a,(b&(($this.KB.data.length-1)|0)),b);}else{a=NC($this);}return a;}
function XB($this){$this.MB=(($this.KB.data.length*$this.JB)|0);return;}
function UC($this,a,b){return GC($this,a,b);}
function JC($this,a,b,c){var d;d=SC.WC(a,c);d.FC=$this.KB.data[b];$this.KB.data[b]=d;return d;}
function LC($this){TC($this,$this.KB.data.length);return;}
function NC($this){var a;a=$this.KB.data[0];while(((a!==null)&&(a.EC!==null))){a=a.FC;}return a;}
HB.QB=function(a){
var result=new HB();result.QB(a);return result;}
HB.RB=function(a,b){
var result=new HB();result.RB(a,b);return result;}
HB.BC=function(){
var result=new HB();result.BC();return result;}
$rt_virtualMethods(HB,
"QB",function(a){QB(this,a);},
"HC",function(a,b,c){return CC(this,a,b,c);},
"RB",function(a,b){RB(this,a,b);},
"VC",function(a,b){return GC(this,a,b);},
"YC",function(a){return PC(this,a);},
"VB",function(a){return WB(this,a);},
"XC",function(a){TC(this,a);},
"QC",function(a){return RC(this,a);},
"XB",function(){XB(this);},
"ZC",function(a,b){return UC(this,a,b);},
"IC",function(a,b,c){return JC(this,a,b,c);},
"KC",function(){LC(this);},
"MC",function(){return NC(this);},
"BC",function(){BC(this);});
function TB(){U.call(this);}
$rt_declClass(TB,{name:"java.lang.IllegalArgumentException",superclass:U,clinit:function(){TB_$clinit();}});
function TB_$clinit(){TB_$clinit=function(){};
UB=function($this){V($this);return;}
}
$rt_methodStubs(TB_$clinit,['UB']);
TB.UB=function(){
var result=new TB();result.UB();return result;}
$rt_virtualMethods(TB,
"UB",function(){UB(this);});
function AD(){F.call(this);this.OC=null;this.EC=null;}
$rt_declClass(AD,{name:"java.util.MapEntry",interfaces:[Z,Y],superclass:F,clinit:function(){AD_$clinit();}});
function AD_$clinit(){AD_$clinit=function(){};
BD=function($this,a,b){J($this);$this.EC=a;$this.OC=b;return;}
}
$rt_methodStubs(AD_$clinit,['BD']);
AD.BD=function(a,b){
var result=new AD();result.BD(a,b);return result;}
$rt_virtualMethods(AD,
"BD",function(a,b){BD(this,a,b);});
function SC(){AD.call(this);this.FC=null;this.DC=0;}
$rt_declClass(SC,{name:"java.util.HashMap$HashEntry",superclass:AD,clinit:function(){SC_$clinit();}});
function SC_$clinit(){SC_$clinit=function(){};
WC=function($this,a,b){BD($this,a,null);$this.DC=b;return;}
}
$rt_methodStubs(SC_$clinit,['WC']);
SC.WC=function(a,b){
var result=new SC();result.WC(a,b);return result;}
$rt_virtualMethods(SC,
"WC",function(a,b){WC(this,a,b);});
function CD(){F.call(this);}
CD.DD=null;CD.ED=null;$rt_declClass(CD,{name:"naveen.Client",superclass:F,clinit:function(){CD_$clinit();}});
function CD_$clinit(){CD_$clinit=function(){};
FD=function(){CD.ED=window;CD.DD=CD.ED.document;return;}
GD=function(a){var b;b=CD.DD.createElement($rt_ustr($rt_s(0)));a=CD.DD.createTextNode($rt_ustr($rt_s(1)));b.appendChild(a);CD.DD.body.appendChild(b);return;}
FD();}
$rt_methodStubs(CD_$clinit,['FD','GD']);
function HD(){F.call(this);}
$rt_declClass(HD,{name:"java.util.Comparator",superclass:F});
function HD_$clinit(){HD_$clinit=function(){};
}
function ID(){F.call(this);}
$rt_declClass(ID,{name:"java.lang.String$1",interfaces:[HD],superclass:F,clinit:function(){ID_$clinit();}});
function ID_$clinit(){ID_$clinit=function(){};
JD=function($this){J($this);return;}
}
$rt_methodStubs(ID_$clinit,['JD']);
ID.JD=function(){
var result=new ID();result.JD();return result;}
$rt_virtualMethods(ID,
"JD",function(){JD(this);});
function KD(){F.call(this);this.LD=false;}
$rt_declClass(KD,{name:"java.lang.Class",superclass:F,clinit:function(){KD_$clinit();}});
function KD_$clinit(){KD_$clinit=function(){};
A=function(){return KD.MD();}
MD=function($this){J($this);$this.LD=1;return;}
}
$rt_methodStubs(KD_$clinit,['A','MD']);
KD.MD=function(){
var result=new KD();result.MD();return result;}
$rt_virtualMethods(KD,
"MD",function(){MD(this);});
function ND(){F.call(this);}
$rt_declClass(ND,{name:"java.lang.Comparable",superclass:F});
function ND_$clinit(){ND_$clinit=function(){};
}
function B(){F.call(this);this.OD=null;this.PD=0;}
B.QD=null;B.RD=null;$rt_declClass(B,{name:"java.lang.String",interfaces:[AB,ND,GB],superclass:F,clinit:function(){B_$clinit();}});
function B_$clinit(){B_$clinit=function(){};
C=function($this,a){var b,c;J($this);b=a.data;c=b.length;$this.OD=$rt_createCharArray(c);a=0;while((a<c)){$this.OD.data[a]=b[a];a=((a+1)|0);}return;}
SD=function(){B.QD=ID.JD();B.RD=HB.BC();return;}
SD();}
$rt_methodStubs(B_$clinit,['C','SD']);
function I($this){var a;a=PC(B.RD,$this);if((a!==null)){$this=a;}else{UC(B.RD,$this,$this);}return $this;}
function AC($this){var a,b,c;if(($this.PD==0)){a=$this.OD.data;b=a.length;c=0;while((c<b)){$this.PD=((((31*$this.PD)|0)+a[c])|0);c=((c+1)|0);}}return $this.PD;}
function TD($this,a){if(((a>=0)&&(a<$this.OD.data.length))){return $this.OD.data[a];}$rt_throw(BB.CB());}
function E($this,a,b,c,d){var e,f;if(((a>=0)&&((a<=b)&&((b<=$this.UD())&&(d>=0))))){e=((d+((b-a)|0))|0);f=c.data;if((e<=f.length)){while((a<b)){c=((d+1)|0);e=((a+1)|0);f[d]=$this.VD(a);d=c;a=e;}return;}}$rt_throw(W.X());}
function D($this){return $this.OD.data.length;}
function PB($this,a){var b,c;if(($this!==a)){if(((a instanceof B)!=0)){b=a;if((D(b)==D($this))){c=0;block4:{while(true){if((c>=D(b))){break block4;}if((TD($this,c)!=TD(b,c))){break;}c=((c+1)|0);}return 0;}return 1;}return 0;}return 0;}return 1;}
B.C=function(a){
var result=new B();result.C(a);return result;}
$rt_virtualMethods(B,
"WD",function(){return I(this);},
"ZB",function(){return AC(this);},
"VD",function(a){return TD(this,a);},
"XD",function(a,b,c,d){E(this,a,b,c,d);},
"UD",function(){return D(this);},
"OB",function(a){return PB(this,a);},
"C",function(a){C(this,a);});
function YD(){F.call(this);}
$rt_declClass(YD,{name:"org.teavm.jso.JS",superclass:F,clinit:function(){YD_$clinit();}});
function YD_$clinit(){YD_$clinit=function(){};
}
$rt_stringPool(["div","TeaVM generated element"]);
var main=GD;
//# sourceMappingURL=classes.js.map