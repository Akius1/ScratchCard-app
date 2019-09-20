
    $(document).ready(function(){

        $('#validatebtn').on('click',function(e){
        e.preventDefault();
        
            //Declearing variables
            var id= $('input#validate').val();
        
            var idArray=[];
            var pinArray=[];
            
    
            //Geting Existing Serial Numbers from the database (db.json)
    
            $.get('http://localhost:3000/pin',function(data){
                $.each(data,function(i,pin){
                    idArray.push(pin.id);
                    pinArray.push(pin);
                   
                })
               
                console.log(pinValue);
                //Checking if serial Number Already Exists on the database (db.json)
                for(var i=0; i<idArray.length; i++){
                
                    if(idArray[i]==id){ 
                        var pinValue = pinArray[id]["pin"];
                        //alert("RECHARGE PIN IS VALID");
                        return $('#dis').html('<h4>Recharge pin:'+' '+pinValue+'</h4>'+' '+'\n'+''+'<h4>Id Number:'+" "+id+'</h4>'); 
                    }
                }
                 alert("RECHARGE PIN IS INVALID");
            })
             
        })

        //To Delete a Recharge Pin from Database (db.json)    
    $('#deletebtn').on('click',function(e){
        e.preventDefault();
        
        //Geting Existing Serial Numbers and id from the database (db.json)
            
                
        var input = $("#validate").val()
        var id= $('input#validate').val();

        $.getJSON('http://localhost:3000/pin', function(pins){
            $.each(pins, function(index, value){
                if(value.id === input){
                    id += value.id;
                    console.log(value) 
                }
            })
            //alert(id)
            $.ajax({
                type:"DELETE",
                url:`http://localhost:3000/pin/${id}`,
                success: function(){
                    return alert("Deleted");
                },
                error:function(){
                    alert("Invalid Recharge pin");
                }
            })

        })    

    })
})
              