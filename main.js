let usel_value = document.querySelector('.numberOfLines').value;

document.querySelector('.btnnumber').onclick = function () {
    usel_value = document.querySelector('.numberOfLines').value;
    document.querySelector('.firstDiv').innerHTML = "";
    document.querySelector('#inputCheck').innerHTML = "";
    if(usel_value >= 1) {document.querySelector('.btnResult').style.display = "block"}
    else{
    document.querySelector('.btnResult').style.display = "none"
    };
    for(let i=0; i<usel_value;i++){
        
        let div = document.createElement('div');
        div.className = "totSamiyDiv";
        div.style = "display: block";
        div.innerHTML = "";
        document.querySelector('.firstDiv').prepend(div);
        
        let select = document.createElement('select');
        select.className = "mySelect";
        select.innerHTML = "";
        document.querySelector('.totSamiyDiv').prepend(select);
        
        let option = document.createElement('option');
        option.innerHTML = "Один";
        document.querySelector('.mySelect').append(option);
        let option2 = document.createElement('option');
        option2.innerHTML = "Два";
        document.querySelector('.mySelect').append(option2);
        let option3 = document.createElement('option');
        option3.innerHTML = "Три";
        document.querySelector('.mySelect').append(option3);
        
        let button = document.createElement('button');
        button.className = "btnDel";
        button.innerHTML = "Удалить";
        document.querySelector('.totSamiyDiv').append(button);
    };
};

let click;
document.addEventListener("click", function (e) {
    click = e.target;
    if(click.innerHTML == "Удалить")  {click.parentElement.remove()};
    if(document.querySelector('.firstDiv').innerHTML == ""){document.querySelector('.btnResult').style.display = "none"};
    if(document.querySelector('.firstDiv').innerHTML == ""){document.querySelector('#inputCheck').innerHTML = "";};
    });

document.querySelector('.btnResult').onclick = function () {   
    let selectValue = document.querySelectorAll('.mySelect');
    document.querySelector('#inputCheck').innerHTML = "";
    for(let i=0;i<usel_value;i++){
        let p = document.createElement('p');
        p.innerHTML = selectValue[i].value;
        document.querySelector('#inputCheck').append(p);
       };
};
