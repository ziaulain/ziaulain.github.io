
(function() {
  document.getElementById('first_container').setAttribute("style","height:"+$(window).height()+"px");
  document.getElementById('scnd_container').setAttribute("style","margin-top:"+($(window).height()-50)+"px;");
  //document.getElementById('logo').setAttribute("style","margin-top: -"+$(window).height()+"px;");
  
  document.getElementById('header_text').setAttribute("style","margin-top:"+($(window).height()/2-50)+"px;");

})();

