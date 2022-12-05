var user_input= ""; 

function display(event){
    console.log(event.target.value) 
    user_input+= event.target.value
    document.querySelector(".login_display").textContent=user_input 
}

function delete_value(){ 
    user_input= user_input.slice(0,-1) 
    document.querySelector(".login_display").textContent=user_input 

}

function check_id(){
    /*fs.readFile('./text.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
    console.log(window.api.fs)*/
    window.location="google.com";
}