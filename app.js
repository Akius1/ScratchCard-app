/**const app = express();
const port = 3000;

// Start your server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})*/

$( document ).ready(function(){
    //Login Code
    $('#loginbtn').on('click',function(e){
        e.preventDefault();

        //Declaring variables

        var userArray =[];
        var email = $('#email').val();
        var password = $('#password').val();
        const BASE_URL = 'http://localhost:3000/user';
        var user ={
         email: $("input#email").val(),
         password: $("input#password").val(),
        };

        //Getting already existing emails from the data base 
        $.getJSON(BASE_URL,function(data){
            $.each(data,function(i,user){
            userArray.push(user.email);
            })
    
            //Checking if the email already exists on the database and giving or restricting access
            for(var i=0; i<userArray.length; i++){
                if(userArray[i]==email){

                return window.location.href="create/create.html";
                }
            }
            return alert("Enter a valid email, or kindly Sign Up");
        });

    });
});
