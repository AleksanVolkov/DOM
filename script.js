//const box= document.getElementById('box1');

//console.log(box);


//const btn = document.getElementsByTagName('button'); // обращение к всем элементам с тегом button  (будут представленны в виле массива)

/*const btn = document.getElementsByTagName('button')[2];*/ //Обращение к конкретной кнопке в массиве под номером 2(это будет 3 кнопка так как массив начинается с 0)


////console.log(btn[0]);



//const rect =  document.getElementsByClassName('btn');
//console.log(rect);

const box = document.getElementById('box1'),
      square1 = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle1'),
      quere = document.querySelectorAll('.circle2'),
      buttons = document.querySelectorAll('.btn');
     /* buttons= document.getElementById('buttons'),
      buttons1 = document.getElementById('buttons1');*/
      console.log(quere);
        

      box.style.backgroundColor = 'blue';
      box.style.width = '250px';

      square1[2].style.backgroundColor = 'green';


      quere[0].style.backgroundColor = 'black';

      /*buttons.style.cssText = 'background-color:red;';
      buttons1.style.cssText = 'background-color:red;';*/

      /*buttons[0].style.cssText = 'background-color: red;';*/


   /* for(let i=0 ; i< buttons.length; i++){
        buttons[i].style = 'background-color: blue; width:80px; height:50px; border-radius: 10px;';
    }*/
    
   buttons.forEach (item => {
       item.style.backgroundColor = 'green',
       item.style.width = '150px',
       item.style.height = '150px';
    
   });

   /*const div = document.createElement('div');

   div.classList.add('btn');

   document.body.append(div);*/
   
   const dop = document.createElement('div');

   dop.classList.add('dive');

   document.querySelector('.square2').append(dop);

//    buttons[1].replaceWith(circle[0]);
  
   dop.innerHTML=("<p>Ну что. пора божить</p>");

//    function films (){
//        alert('hello world');
       
//    }

//    films();
//    function prompt1 (){
//     for(let i=0; i<2; i++){
//      const prm = prompt('ты любишь фильмы?','');
    
    
//         if(prm != null && prm !='' ){
//             console.log('ok');
//         }else{console.log('error');
//         i--;
//     }
// }
// }
    
    
    
        

//    prompt1();