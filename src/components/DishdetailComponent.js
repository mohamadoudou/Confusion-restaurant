import React ,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Moment from 'react-moment';

    function RenderComments({comments}){
        if(comments!=null){
           const commentaire=comments.map((comment)=>{
                return(
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, <Moment format="MMM D YYYY" withTitle>{comment.date}</Moment></li>
                    </ul>
                );
                });     
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {commentaire}
                </div>
            );
        }
        else{
            return(
               <div></div>
            );
        }
    }


    function RenderDish({dish}){
        if(dish!=null){
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        
                        <Card key={dish.id} >
                            <CardImg top src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <RenderComments comments={dish.comments}/>
                </div>
            );
        }
        else{
            return(
               <div></div>
            );
        }
    }

    const DishDetail=(props)=>{

       
        const dish=props.dish;
        return(
        <div >
           <RenderDish dish={dish}/>
        </div>
        );
    }



export default DishDetail;