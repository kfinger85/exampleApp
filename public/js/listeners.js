window.onload = () => {
function postioningfun()
{
    const body = document.body; 
    const papadiv = document.createElement('div') 
    papadiv.className = 'papa';
    papadiv.id='papa'; 
    document.getElementById('content-wrap').append(papadiv);
    const span1 = document.createElement('span')
    span1.id='span1'; 
    span1.innerText='Hey guy!'; 
    papadiv.append(span1); 
    const span2 = document.createElement('span')
    span2.id='span2';
    span2.innerText='Hey buddy!';
    papadiv.append(span2);
    span2.style.display = 'block'; 
    setTimeout(()=> {span1.setAttribute('title','gotca');}, 1000); 
    const testingspan = document.getElementById('testingspan'); 
    console.log(testingspan); 
    const quthediv = document.querySelector('#thediv');
    setTimeout(()=> 
    {testingspan.style.color = 'blue'; 
    papadiv.append(testingspan);  
    },1000); 
    setTimeout(()=> 
    {
    //console.log(papadiv.children);
    //console.log(span2.parentElement);    
    },1100);    
}
async function letslisten(){
    await postioningfun();
    const popuptext = document.createElement('span');
    popuptext.id = 'popup';
    popuptext.style.display = 'none';
    popuptext.textContent = 'Hello!';  
    document.getElementById('footer').append(popuptext); 
    const testingspan = document.getElementById('testingspan');
    const papadiv = document.getElementById('papa'); 


    testingspan.addEventListener('mouseover', (e)=>{ 
        console.log('%c' + e.target, "color: blue; font-size: 20px");
        console.log('%c' + e, "color: red; font-size: 20px"); 
        testingspan.style.color = 'grey';    
    }); 
    testingspan.addEventListener('mouseout', (event)=>{
        testingspan.style.color = 'blue';    
    });

    papadiv.addEventListener('mouseover', (event) =>
    {
        papadiv.style.borderStyle = 'dotted dashed solid double'; 
        popuptext.style.display = 'inline'; 
    }); 
    papadiv.addEventListener('mouseout', (event)=>{
        papadiv.style.borderStyle = 'none'; 
        popuptext.style.display = 'none';
    }); 
        papadiv.addEventListener('mouseover', (e) => {
            const key = document.createElement('button');
            key.className = 'button1';
            key.innerHTML = '<span>click me</span>' 
            document.getElementById('content-wrap').append(key); 
        }, {once: true});  
}
function backgroundchange()
{
    console.log("Mister would you please help me!");
}
letslisten(); 
       
}
