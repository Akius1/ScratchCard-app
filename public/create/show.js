$(document).ready(function(){ 
    
    function show(){
        let pinArray = [];
        // Getting current date
        var now = new Date();

        var day = ("0" + now.getDate()).slice(-2);

        var month = ("0" + (now.getMonth() + 1)).slice(-2);

        var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
        //Getting data from db  
        $.get('http://localhost:3000/pin',function(data){
            $.each(data,function(i,pin){
                pinArray.push(pin);
            })
            $('.row').append(`<table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Pin</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Amount</th>
                <th scope="col">Validity</th>
              </tr>
            </thead>
            </table>`)
            // looping and getting desired value
            for(var i=0; i<pinArray.length; i++){
                let value = pinArray[i]["pin"];
                let amount = pinArray[i]["amount"];
                let id =pinArray[i]["id"];
               
                $('.row').append(`<table class="table table-dark">
                <tbody><tr><th scope="row">${id}</th><td><a href="#"> ${value}</a></td><td>N${amount}</td><td>${today}</td></tr></tbody></table>`).css({
                    'background-color':'#ccc',
                    'list-style':'none',
                    'color':'#000',
                    'font-weight':'bold',
                    'width':'auto',
                    'margin': '5em',
                    'padding': '2em',
                    'background-size': 'cover', 
                    'border':' 2px solid yellow',
                    'border-radius': '10px'
                });        
            }
        })
    }
    show()
      
        
        
      
       
    })
