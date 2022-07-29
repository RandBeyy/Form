

const init = function(){
    document.getElementById('button-cancel').addEventListener('click',reset)
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){
    ev.preventDefault();
    document.getElementById('lr6').reset();
}

const send = function(ev){
    ev.preventDefault(); 
    ev.stopPropagation();
    let fails = validate();
    if(fails.length === 0){
        document.getElementById('lr6').submit();
        create_window()
    }else{
        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}


const validate = function(ev){
    //let valid = true;
    let failures = [];
    //checkbox (or radio buttons grouped by name)

    
    //inputs for text, email, tel, color, number...
    let first = document.getElementById('input-first');
    let last = document.getElementById('input-last');
    let phone = document.getElementById('input-phone');
    let password = document.getElementById('input-password');
    let repassword = document.getElementById('reinput-password');
    let email = document.getElementById('input-email');
    //.value, .defaultValue, length of value
    if( first.value === ""){
        failures.push({input:'input-first', msg:'Необхідне для заповнення'})
    } 
    if( last.value === ""){
        failures.push({input:'input-last', msg:'Необхідне для заповнення'})
    }
    if( phone.value === ""){
        failures.push({input:'input-phone', msg:'Необхідне для заповнення'})
    }
    if( password.value === "" || password.value.length < 8){
        failures.push({input:'input-password', msg:'Повинен бути хоча б 8 символів у довжину'})
    }
    if( repassword.value !==  password.value){
        failures.push({input:'reinput-password', msg:'Не співпадає'})
    }  
    if( email.value === ""){
        failures.push({input:'input-email', msg:'Необхідне для заповнення'})
    }
    
    //return a boolean || an object with details about the failures
    return failures;
}

document.getElementById("lr6").onsubmit = function() {create_window()};

function create_window(){
    let first = [document.getElementById('input-first'),
                document.getElementById('input-last'),
                document.getElementById('input-phone'),
                document.getElementById('input-email')]
    var win = window.open('', '_blank', 'height=220, width=450, continued from previous line toolbar=no, directories=no, status=no, menubar=no, continued from previous line scrollbars=no, resizable=no');
    win.document.write("<p>Ім'я: " + first[0].value + "</p><p>Прізвище: " + first[1].value + "</p>"+ "</p><p>Мобільний телефон: " + first[2].value + "</p>" +  "</p><p>Електронна пошта: " + first[3].value + "</p>");
}


document.addEventListener('DOMContentLoaded', init);