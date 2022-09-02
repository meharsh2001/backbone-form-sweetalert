dialog = Backbone.View.extend({
    el: 'html',
    events: {  
    "click": "dialog"      
    }, 
    dialog: function(){

      $(document).ready(
      function() {  
          $("#reviewbtn").click(function(){
          $("#review-dialog").dialog({width:400,resizable:false,modal:true,buttons:{
            "cancel":{
                text: "Cancel",         
                id: "cancel-id",
                click:function(){
                  $("#otp").val("");
                  $(this).dialog("close");}
              },
              "delete":{
                text: "Add review",         
                id: "my-review-id",
                click:function(){
                  var otp = $("#otp").val();
                  alert(otp);
              }}
          }});
        })
  }); 
        }
});    
var backbone= new dialog() ;  

return backbone;