(function(global){
  var ajaxUtil = {};

  function obj(){
    if(window.XMLHttpRequest){
      return (new XMLHttpRequest());
    }
    else if(window.ActiveXObject){
      return (new ActiveXObject("Microsoft.XMLHTTP"))
    }
    else{
      global.alert("Ajax not supported");
      return (null);
    }
  }

  ajaxUtil.sendRequest =
    function(urlReq, respHand){
      var req = obj();
      req.onreadystatechange =
        function() {
          handRes(req, respHand);
        };
      req.open("GET",urlReq, true);
      req.send(null);
    };


    function handRes(req,respHand){
      if((req.readyState == 4) && (req.status == 200)){
        respHand(req);
      }
    }

    global.$ajaxUtil = ajaxUtil;

})(window);
