(function (d,c) {
  var KrFilter = {
		'blacklist': ['Phixor2000','zxcvb5nm','david811201','wearing3828','big100','GalaxyGio','x73796481','QWESDXZVA155','missingyouqq','mark180','tinyui'],
		'objs': d.getElementsByClassName('FM-blist5'),
		'max': d.getElementsByClassName('FM-blist5').length
	};

	function banned (obj) {
		for (var i = KrFilter.blacklist.length; i--;){
			if (obj.innerHTML.search(KrFilter.blacklist[i])!== -1) {
				return true;
			}
		}
		return false;
	}
	function hide (obj) {
		obj.parentNode.style.display = 'none'
		return true;
	}

	for (var i = KrFilter.max; i--;) {
		if (banned(KrFilter.objs[i])) {
			hide(KrFilter.objs[i]);
		}
	}

})(document,console);
