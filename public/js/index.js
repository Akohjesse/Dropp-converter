setTimeout(()=>{
  alert('Hey there, this app is currently under development, you can contribute to this open source project at Github.com/Akohjesse/Dropp-converter')
}, 2000)

this.addEventListener('click', (e)=> {
   if(e.target.classList.contains('menu_box')){
    document.querySelector('.menu_box').style = 'display:none ';
   }
  
})

const  animate_landing_page = () =>{
  const array = {
    pictures : ['jpg', 'excel', 'md', 'html','sass', 'mp3-svgrepo-com', 'json', 'png', 'mp4', 'ppt','word', 'pdf','textfile'],
    svg: ['upload','01', 'dnd'],
    h3: ['Upload file', 'wait 2s...', 'Download file']
  }

  
  const three_d_image = document.querySelector('.support .wrap .hh221 .image');
  const how_to_h3 = document.querySelector('.Howto .wrap .text_field .h3');
 var i = 0,
     y = 0,
     x = 0;
  
  setInterval(()=>{
    three_d_image.innerHTML = `<img class="animate__animated animate__bounceIn" src='/images/${array.pictures[i]}.svg' alt='file formats'>`;
    if(i > (array.pictures.length - 2 )){
      i = 0;
    }
    else{
      i++
    }
  }, 800);

  


 const support_numbers = document.querySelector('#support');
 let u = 0;


  setInterval(()=>{
    support_numbers.textContent = 0 + u;
    u++;
    if(u > array.pictures.length){
     support_numbers.textContent = array.pictures.length;
    }
  }, 200)
}

this.addEventListener('DOMContentLoaded', animate_landing_page);
document.querySelector('.ri-home-smile-line').addEventListener('click', ()=>{
  document.querySelector('.menu_box').style = 'display:block;';
})


