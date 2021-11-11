
function getCourses(){
 
    fetch('http://localhost:9000/courses')        
      .then((response) => response.json())
      .then((data) => {
     console.log(data.courses)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      //const container = document.getElementById('content-2');
     // data.courses.querySelector('.content-2')
     // .innerHTML = data.courses.reduce((a, fw) => a +=
    //   `<div class="card" style="width: 18rem;">
    //   <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
    //   <div class="card-body">
    //     <h5 class="card-title">${fw.courseName}</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    //   <ul class="list-group list-group-flush">
    //     <li class="list-group-item">Cras justo odio</li>
    //     <li class="list-group-item">Dapibus ac facilisis in</li>
    //     <li class="list-group-item">Vestibulum at eros</li>
    //   </ul>
    //   <div class="card-body">
    //     <a href="#" class="card-link">Card link</a>
    //     <a href="#" class="card-link">Another link</a>
    //   </div>
    // </div>`, ''
   // );
     //data.courses.forEach((course,idx) => {
         data.courses.forEach(res => {
            const body = document.body;

            const div = document.createElement('div');
            div.className = 'container'
            
            
            const heading1 = document.createElement('h3')
            heading1.className = res.courseName;
            heading1.innerText = 'Soupe à l’oignon'
            
            
            const p1 = document.createElement('p')
            p1.className = 'paragraph'
            
            p1.textContent = "This is a traditional French soup made of onions and beef stock, usually served with croutons and melted cheese on top.The soup’ s unique flavor comes from the caramelization of the onions "
            
            const img1 = document.createElement('img')
            img1.className = 'images'
            img1.setAttribute('src', 'https://www.expatica.com/app/uploads/sites/5/2014/05/french-onion-soup.jpg');
            
            
            div.appendChild(heading1)
            div.appendChild(p1);
            div.appendChild(img1);
            body.appendChild(div)
        }
        //     let card = document.createElement("div");
    
        //     let name = document.createTextNode('Name:' + res.courseName + ', ');
        //     card.appendChild(name);
    
        //     let description = document.createTextNode('Description:' + res.courseDescription + ', ');
        //     card.appendChild(description);
    
        //     let date = document.createTextNode('date:' + res.courseOutline);
        //     card.appendChild(date);
    
        //     let container = document.querySelector("#container");
        //     container.appendChild(card);
        // });
       // const card = document.createElement('div');
//         card.classList = 'card-body';

//         const content = `
//     <div class="card">
//     <div class="card-header" id="heading-${idx}">
//       <h5 class="mb-0">
//         <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">

//                 </button>
//       </h5>
//     </div>

//     <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
//       <div class="card-body">

//         <h5>${course.courseName}</h5>
//         <p>${course.description}</p>
//         <p>${course.outline}</p>
//         ...
//       </div>
//     </div>
//   </div>
//       })
//       `;

//       container.innerHTML += content;
       //  ); }
         );}

getCourses();