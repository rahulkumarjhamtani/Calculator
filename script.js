let display = document.getElementById('textarea');
buttons = document.querySelectorAll('button');
let dvalue = '';

display.addEventListener("focus", (e)=>{
    e.target.value = "";
})

for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttontext = e.target.innerText;
        console.log('Text',buttontext);
        
        if(buttontext == '×')
        {
            buttontext = '*';
            dvalue += buttontext;
            display.value = dvalue;
        }
        else if(buttontext == '÷')
        {
            buttontext = '/';
            dvalue += buttontext;
            display.value = dvalue;
        }
        else if(buttontext == 'AC')
        {
            dvalue = "";
            display.value = dvalue;
        }
        else if(buttontext == '=')
        {
            display.value = eval(dvalue);
        }
        else
        {
            dvalue += buttontext;
            display.value = dvalue;
        }
    })
}
