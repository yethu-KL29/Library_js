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

function display(){
    const books = document.querySelector('.Books');
     myLibrary.forEach (myLibrary => {
     const div = document.createElement("div");
     div.classList.add("card");
     books.appendChild(div);
     for (let key in myLibrary){
        console.log(`${key}: ${myLibrary[key]}`)
        const para = document.createElement('p');
        para.textContent=(`${key}: ${myLibrary[key]}`);
        div.appendChild(para);
     }
    })
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

}
function Myreset(){
    myLibrary= [];
}
function displayform(){
     document.querySelector(".content").style.display ="";
}























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
 