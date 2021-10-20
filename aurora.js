aurora={
id:1,
arr:['aurora-outer','aurora-agrabah','aurora-northern','aurora-northern-intense',
'aurora-northern-dimmed','aurora-northern-dusk','aurora-northern-warm','aurora-outer',],

set:function(id){
window.localStorage.setItem('aurora-bg', id);
aurora.view();
},

view:function(){
var bg=window.localStorage.getItem('aurora-bg');
if(!bg){bg='aurora-outer'}
out ='<div id="aurora" class="aurora-bg '+bg+'"><div class="aurora-inner"></div></div> \
<div class="auroral-stars"></div> \
<a class="prev" onclick="aurora.getaurora(-1)">&#10094;</a> \
<a class="next" onclick="aurora.getaurora(1)">&#10095;</a> ';
var e = document.createElement("div");
e.innerHTML = out;
document.getElementsByTagName('body')[0].appendChild(e);
},

auroraGet:function(p) {
this.id+=  p;
this.auroraSet();
},

auroraSet:function() {
n = this.id;
arr=this.arr;
if (n >=  arr.length-1) {this.id = 0}
if (n <=  0) {this.id = arr.length-1}
document.getElementById("aurora").className = arr[n];
console.log(arr[n]);
console.log(n);
this.set(arr[n])
},
};
aurora.view();
