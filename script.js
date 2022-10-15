let myLibrary= [];

function book(title,author,pages,read){
 this.title=title;
 this.author=author;
 this.pages=pages;
 this.read=read;
}

function addbookToLibrary(title,author,pages,read){
    let Book = new book(title,author,pages,read);
    myLibrary.push(Book);
  
}
let index=0;
function display(){
   
      
     
    const books = document.querySelector('.Books');
     myLibrary.forEach (myLibrary => {
     const div = document.createElement("div");
     const  btn=document.createElement('button');
     btn.setAttribute("id", "btn");
     btn.textContent="remove";
     btn.classList.add="remove"
     index++;
     btn.addEventListener('click',()=>{
        console.log("hu")
       myLibrary.splice(1,1);
       print();

     });
     btn.classList.add="remove";
     div.style.backgroundColor="white";
     div.style.height="300px";
     div.style.width="200px";
     div.style.fontFamily= 'Courier New';
     div.style.padding="10px";
     div.style.margin="10px";


     div.classList.add("card");
     books.appendChild(div);
     div.appendChild(btn);
     
     for (let key in myLibrary){
        console.log(`${key}: ${myLibrary[key]}`)
        const para = document.createElement('p');
        para.style.fontSize="30px";
        para.textContent=(`${key}: ${myLibrary[key]}`);
        div.appendChild(para);
     }
    })
    console.log(index);
   
    

}
let flag=0;
function myFunction() {
    var Title = document.getElementById("Title").value; 
    console.log(Title);
    var Author = document.getElementById("Author").value; 
    console.log(Author);
    var Pages = document.getElementById("pages").value; 
    console.log(Pages);
    var Read = document.getElementById("read").value; 
    console.log(Read);
    if((Title=="" || Pages=="" ||Author== ""|| Read=="")){
        return;
    }
   
        addbookToLibrary(Title,Author,Pages,Read);
       
   


  display();
  Myreset();
  

}

function Myreset(){
    myLibrary= [];
}
function displayform(){
     document.querySelector(".content").style.display ="";
}
// const mybtn=document.getElementById("#btn");






















// const res = document.querySelector('.res')
// let i=0;
// function myFunction() {
//     i++;
//     var Title = document.getElementById("Title").value; 
//     console.log(Title);
//     var Author = document.getElementById("Author").value; 
//     console.log(Author);
//     var Pages = document.getElementById("pages").value; 
//     console.log(Pages);
//     var Read = document.getElementById("read").value; 
//     console.log(Read);
    
//     var div = document.createElement("div");
//     div.className = `div ${i}`;  
//     div.innerHTML=Title;
//     div.innerHTML=Author
//     res.append(Title,Author);

//     var form = document.createElement("form");
//     form.setAttribute("method", "post");
//     form.setAttribute("action", "submit.php");
  
//     let FullName="hu";
//     var T = document.createElement("input");
//     T.setAttribute("type", "text");
//     T.setAttribute("name", "hu");
//     T.setAttribute("placeholder", "Full Name");
    
    
  
//                 form.appendChild(T);
//                 res.appendChild(form);
            
    
//   }
 