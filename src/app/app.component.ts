import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'homework2';

  Post = 
  [
    {
      user : " user1" ,
      timestamp : new Date("2020/11/19"),
      comment : "comment 1 ",

      showCommentBox : true ,

    },
    {
      user : " user2" ,
      timestamp : new Date("2020/11/11"),
      comment : "comment 2 ",
      showCommentBox : true

    }
  ]

  comment="" ;

  OnInput(event: any, post : any) {
    if(post.comment != event.target.value)
    {
      post.comment = event.target.value;
      console.log("done")
    }
    
    
    
    
    }

  delete(post: any)
  { 
    this.Post.splice(this.Post.indexOf(post),1) ;
    console.log("ook")
  }
  

  
  editChange(post, value)
  {
    post.showCommentBox= !post.showCommentBox; 
    value= post.comment ;
    
    
  }
  save(post , content : string)
  { 
    let check  = false ;
    
    for(let char of content)
    {
      if (char  != " ")
      check= true ;
    }
    
    
    if(content == ""  || !check) 
    
    {
    alert("NULL input, Enter again ")
    }
     
    else 
    {
      post.comment = content ;

        console.log("ok");
    
    this.editChange(post, "")
     }
    
    
  }
  
  checkValid(value :string)
  {
    let check  = false ;
    
   for(let char of value)
   {
     if (char!= " ")
     check= true ;
   }
      if(value =="" || !check )
      {
        return false ;
        
      }
      else 
        return true ;
  }
  @ViewChild('newComment')  newCmt :ElementRef;
  post(_user, _comment)
  {
    
    let userCheck = this.checkValid(_user) ;
    let commentCheck = this.checkValid(_comment);
    console.log(userCheck + " " + commentCheck);
    
    if(userCheck && commentCheck) 
    {
      this.Post.push({user : _user ,
        timestamp :  new Date,
        comment : _comment,
    
        showCommentBox : true ,});

        (<HTMLInputElement>document.getElementById("userNameInput")).value=" " ;
     (<HTMLInputElement>document.getElementById("comment")).value=" ";
    
    
     

    }

     

    }
    


    
    changeSend(value)
    {
    
      let button = (<HTMLInputElement>document.getElementById("send")) ;
        
  
     
       let check  = false ;
        
       for(let char of value)
       {
         if (char!= " ")
         check= true ;
       }
          if(value ="" || !check )
          {
          button.style.backgroundColor = "#dc3545" ;
          
          
        }
        else{
          button.style.backgroundColor = "green"
        }
    }

    resetForm(form)
    {
      form.reset() ;
    }

  }
  

  
      
      
 
   

  


