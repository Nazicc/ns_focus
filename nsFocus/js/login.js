function _(id){
	return document.getElementById(id);
};
function _t(tn){
	return document.getElementsByTagName(tn);
};
function _c(cn){
	return document.getElementsByClassName(cn);
};

function resizeBgImg(){
	var img = _('bg_img');
	img.style.height = window.innerHeight+'px';
	img.style.width = window.innerWidth+'px';
};
window.onload = resizeBgImg;
window.onresize = resizeBgImg;

function sel_item(){
	var el = _t('span');
	if(el[0].className == 'sel_item sel_item_bg'){
		_t('ul')[0].style.display = 'block';
		el[0].className = 'sel_item sel_item_click';
	}else{
		_t('ul')[0].style.display = 'none';
		el[0].className = 'sel_item sel_item_bg';
	};
	_c('sel_lang')[0].innerHTML = this.childNodes[1].innerHTML;
};
var sl = _c('sel_item');
sl[0].onclick = sel_item;

function fst_opt_over(){
	this.className = 'sel_opt opt_over';
};
function fst_opt_normal(){
	this.className = 'sel_opt';
};

function opt_over(){
	this.className = 'sel_opt opt_over';
};
function opt_normal(){
	this.className = 'sel_opt';
};

function lst_opt_over(){
	this.className = 'sel_opt lst_opt lst_opt_over';
};
function lst_opt_normal(){
	this.className = 'sel_opt lst_opt';
};

var l = document.getElementsByTagName('li');

for(var i=0;i<l.length;i++){
	if(!!!i){
		l[i].onmouseover = fst_opt_over;
		l[i].onmouseout = fst_opt_normal;
	}else if(i==(l.length-1)){
		l[i].onmouseover = lst_opt_over;
		l[i].onmouseout = lst_opt_normal;
	}else{
		l[i].onmouseover = opt_over;
		l[i].onmouseout = opt_normal;
	};
	l[i].onclick = sel_item;
};


function un_focus(){
	var it = _c('input_txt');
	it[0].focus();
	var hld = _c('holder_un');
	hld[0].style.color = '#dcdcdc';
};
function pw_focus(){
	var it = _c('input_txt');
	it[1].focus();
	var hld = _c('holder_pw');
	hld[0].style.color = '#dcdcdc';
};
var id = _c('input_div');
id[0].onclick = un_focus;
id[1].onclick = pw_focus;


function un_blur(){
	var hld = _c('holder_un');
	hld[0].style.color = '#6dadc3';
};
function pw_blur(){
	var hld = _c('holder_pw');
	hld[0].style.color = '#6dadc3';
};
var input = _c('input_txt');
input[0].onblur = un_blur;
input[1].onblur = pw_blur;


function un_change(){
	var hld = _c('holder_un');
	if(this.value){
		hld[0].style.visibility = 'hidden';
	}else{
		hld[0].style.visibility = 'visible';
	};
	var p = _c('prompt');
	p[0].style.visibility = 'hidden';
};
function pw_change(){
	var hld = _c('holder_pw');
	if(this.value){
		hld[0].style.visibility = 'hidden';
	}else{
		hld[0].style.visibility = 'visible';
	};
	var p = _c('prompt');
	p[0].style.visibility = 'hidden';
};
var input = _c('input_txt');
input[0].onkeyup = un_change;
input[1].onkeyup = pw_change;


function submit_form(){
	var info = _c('input_txt');
	
	if(!!info[0].value&&!!info[1].value){
		var p = _c('prompt');
		p[0].style.visibility = 'visible';
	}
	return false;
};
var sub_form = _c('login_form');
sub_form[0].onsubmit = submit_form;