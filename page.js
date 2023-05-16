function checkPassword(){
    if(document.getElementById('password').value == 'alligator'){
        alert('Good job ,dudette! Press this ok to move forward' ); 
          location.href = "page2.html";
         } else {
         alert('Nuh uh')
          return false;
        }
}