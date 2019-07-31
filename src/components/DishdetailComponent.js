import React from 'react';  
import {Card,CardImg,CardText,CardTitle} from 'reactstrap';



 
    function RenderDish(dish){
        var  detail=<div></div>
      {
          detail=
          <Card className="col-md-6 col-xs-12 text-left">
          <CardImg  src={dish.dish.image} alt={dish.dish.name}/>
          <CardTitle>{dish.dish.name}</CardTitle>
          <CardText>{dish.dish.description}</CardText>
      </Card>
      }
      return detail;
    }

    function RenderComments(comments){
      console.log(comments);
      if(comments!=null)
      {
        return comments.comments.map((c)=>{
    
          return (
              <div key={c.id}> 
                  <div>{c.comment}</div><br/>
                  <div>--{c.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</div><br/>
              </div>
  
           );
      })
      } else return <div></div>

    }


    
     const DishDetail=(props)=>{
      if(props.selectedDish!=null){
        return (
          <div className="container">
              <div className="row">
                  <RenderDish dish={props.selectedDish} ></RenderDish>
                
                      <div className="col-md-6 col-xs-12 text-left">
                      <CardTitle>Comments</CardTitle>
                      <RenderComments comments={props.selectedDish.comments}></RenderComments>  */}
                      </div>
                      
              </div>
    
        
           </div>
       )
      }else return <div></div>
     
     }
    


  


export default DishDetail;