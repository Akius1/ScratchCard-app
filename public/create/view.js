
    $(document).ready(function(){

        $('#validatebtn').on('click',function(e){
        e.preventDefault();
        
            //Declearing variables
            var id= $('input#validate').val();
        
            var idArray=[];
            var pinArray=[];
            
    
            //Geting Existing ID from the database (db.json) and pushing it to an empty array
    
            $.get('http://localhost:3000/pin',function(data){
                $.each(data,function(i,pin){
                    idArray.push(pin.id);
                    pinArray.push(pin);
                   
                })
               
                //console.log(pinValue);
                //Checking if ID Already Exists on the database (db.json)
                for(var i=0; i<idArray.length; i++){
                
                    if(idArray[i]==id){ 
                        var pinValue = pinArray[id]["pin"];
                        
                        return $('#dis').html(`<div class="overflow-auto"><h4>Pin: ${pinValue}</h4><h4>id: ${id}</h4></div>`).css({
                            'background-color':'#fff',
                            'border':' 2px solid blue',
                            'border-radius': '10px'
                        }); 
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
        //var id= $('input#validate').val();

        $.getJSON('http://localhost:3000/pin', function(pins){
            $.each(pins, function(index, value){
                if(value.id === input){
                    id += value.id;
                }
            })
            //alert(id)
            $.ajax({
                type:"DELETE",
                url:`http://localhost:3000/pin/${input}`,
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
              