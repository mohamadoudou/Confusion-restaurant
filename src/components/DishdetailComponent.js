import React ,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Moment from 'react-moment';
import { Link} from 'react-router-dom';
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


    function RenderDish({dish,comments}){
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
                    <RenderComments comments={comments}/>
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
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <RenderDish dish={props.dish} comments={props.comments}/>
            </div>
        );
    }



export default DishDetail;