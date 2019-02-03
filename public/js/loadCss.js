function loadBG(){ 
    $(document).ready(function(){
        if($("body").size()>0){
                if (document.createStyleSheet){
                    document.createStyleSheet('style.css');
                }
                else {
                    $("head").append($("<link rel='stylesheet' href='css/bootstrap.min.css' type='text/css' media='screen' />"));
                    $("head").append($("<link rel='stylesheet' href='css/font-awesome.min.css' type='text/css'  />"));
                    $("head").append($("<link rel='stylesheet' href='css/style.css' type='text/css' />"));
                }
            }
        });
} 
window.onload=loadBG();