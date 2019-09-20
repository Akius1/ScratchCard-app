$(document).ready(function(){

    
    
    function show(){
        let pinArray = [];
        $.get('http://localhost:3000/pin',function(data){
            $.each(data,function(i,pin){
                pinArray.push(pin);
            })
            
            for(var i=0; i<pinArray.length; i++){
                let value = pinArray[i]["pin"];
                let amount = pinArray[i]["amount"];
                $('.row').append(`<div class="col-md-4"><li><a href="#">${value}</a></li><li>amount: ${amount}</li><li>Validity: Valid</li></div>`).css({
                    'background-color':'#ccc',
                    'list-style':'none',
                    'color':'#000',
                    'font-weight':'bold',
                    'width':'auto',
                    'margin': '5em',
                    'padding': '2em',
                    'background-size': 'cover', 
                    //'height': '50vh',
                    'border':' 2px solid yellow',
                    'border-radius': '10px'
                });        
            }
        })
    }
    show()
       
      
        
        
      
       
    })
