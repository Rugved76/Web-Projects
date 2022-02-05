let block = document.querySelectorAll('#parent .square');
    let header = document.querySelector('header');
    const savebtn = document.getElementById('button');
    const resetbtn = document.getElementById('reset');
    let audio = document.getElementById('sound');


    let counter=localStorage.getItem('cnt')||0; 
    
    for(let item of block ){
        item.addEventListener('click',()=>{
            item.className="squarex";
            counter++;
            audio.play();
        },{once:true});
    }
    for (let i = 0; i < counter; i++) {
        block[i].className="squarex";
    }

    header.addEventListener('click',()=>{
        window.open("https://www.instagram.com/rugv_d/");
    })
   
    savebtn.addEventListener('click',()=>{
        localStorage.setItem('cnt',counter);
        location.reload();
        for(let i =0 ;i<counter; i++){
            block[i].className="square";
            block[i].textContent=day;
        } 
    })

    resetbtn.addEventListener('click',()=>{
        for(let i =0 ;i<counter; i++){
            block[i].className="square";
        }
        // counter=0;
        localStorage.clear();
        location.reload();
    })