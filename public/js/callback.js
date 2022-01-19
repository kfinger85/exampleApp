window.onload = () => {
const posts = [
        {title: 'My trip to Hell' , body:'It was hot', time:10},
        {title: 'My trip to Heaven' , body:'It was boring and long', time:20}, 
        {title: 'Theres more that meets the eye', body:['this', 'is', 2], time:'?'}
    ]
    function getposts()
    {
        setTimeout(()=> {
            let output = ''; 
            output += `<ul>`; 
            posts.forEach((post) =>
            {
                output += `<li><strong>${post.title}</strong></li>`;
                output += `<li class="shortcut">${post.body}</li>`;
                output += `<li class="time">${post.time}</li>`;
            });
            output += `</ul>`;
            document.body.innerHTML = output; 
        },1000);
    }
    function createPost(post)
    {
        setTimeout(()=>
        {
            posts.push(post)

        },500); 
    }
    getposts(); 
    createPost({title: 'My trip to Peragiory' , body:'It was ok'}); 
    function promiseing()
    {
        let p = new Promise((resolve, reject) => {
            a = 2; 
            if(a == 3)
            {
                resolve('success!'); 
            }else
                reject('reject'); 
        });
        
        p.then(
            (message) => {
            console.log("This is the message " + message); 

        }).catch((message) => {
            console.log("This is the catch " + message);

        });
    }
    async function goodway()
    {
        try{
            const f = await fetch('https://harrybackline.com/dashboard/login.php', 
            {
                method:'GET'

            })            
            console.log(f); 
        }catch
        {
            var output = `<li class='error'>Your Done SON</li>`;
            document.body.insertAdjacentHTML('beforeend',output); 
         }
    }
    goodway(); 

}