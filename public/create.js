$(document).ready(function(){

    //Generating Recharge Pin and Serial Number
    $('#generate').on('click',function(e){
          
        //Generating Recharge Pin   
    
        // Declare a digits variable  
        // which stores all digits

        e.preventDefault();
        var amount = $('#amount').val();
        var digits = '0123456789'; 
        var pin = ''; 
        for (let i = 0; i < 16; i++ ) { 
            pin += digits[Math.floor(Math.random() * 10)]; 
        } 

        //Generating Serial Number
        var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
        var serial = ''; 

        for (let i = 0; i < 10; i++ ) { 
            serial += string[Math.floor(Math.random() * string.length)]; 
        }
    
        //Displaying Recharge Pin and Serial Number on Div on HTML page
        $('#display').html('<h6>Recharge pin:'+' '+pin+'</h6>'+' '+'\n'+''+'<h6>Serial Code:'+" "+serial+'</h6>');

         //Getting generated Pin and serial number values in to an object 
        var pin ={
            "pin": pin,
            "serial": serial,
            "amount": amount
        };
    
        //Posting the Generated Recharge Pin and Serial Number to Database(db.json)
        $.post('http://localhost:3000/pin',pin, function(data, success){
            alert(JSON.stringify(success));
            console.log(data);
            //window.location.href="generate/generate.html";
            },
            "json"
            ) 
      
    })
})