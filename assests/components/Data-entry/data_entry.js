const data =[{
    name:['johnny','steven','joe','hilder','hilda','marcus'],
    password: ['mock',],
}]


function login(){
    let username = document.querySelector('#username');
    let password = document.querySelector('#password')
    if(username.textContent.toLowerCase == "janedoe" && password.textContent.toLowerCase == 'mock'){
        window.location.assign('http://127.0.0.1:5500/projects/Form-U-Later/assests/components/Data-entry/data_entry.html')
        displayName();
    }else{
        data.map(el => el.name.push(...username.textContent))
        data.map(el => el.password.push(...password.textContent));
        window.location.assign('http://127.0.0.1:5500/projects/Form-U-Later/assests/components/Data-entry/data_entry.html')
    }
}

function displayName(){
    const name = data.map(el => 
        el.name.length
        );
    document.querySelector("#nameofuser").textContent = name[Math.random() * 10]  ;
}