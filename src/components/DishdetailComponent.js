import React ,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, Modal,CardTitle, Breadcrumb, BreadcrumbItem, Button, ModalHeader, ModalBody,Label,Col,Row } from 'reactstrap';
import Moment from 'react-moment';
import { Link} from 'react-router-dom';
import { Control,LocalForm, Errors} from 'react-redux-form';

const required=(val)=> val&&val.length;
const minLength=(len)=>(val)=>val&&val.length>=len;
const maxLength=(len)=>(val)=>val&&val.length<=len;

class CommentForm extends Component{
            constructor(props){
                super(props);
                this.state={
                  isModalOpen:false
                };
            }
    toggleModal=()=>{
        this.setState({
        isModalOpen:!this.state.isModalOpen
        });
    }

    FormValidator=(values)=>{
        this.toggleModal();
         alert(JSON.stringify(values));
    }
    render(){
        return (
        <React.Fragment>
            <Button  onClick={this.toggleModal}><span className="fa fa-pencil"> </span>  Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>this.FormValidator(values)}>
                        <Label htmlFor="rating">Rating</Label>
                        <Control.select model=".rating" name="rating" id="rating" className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                        <Label htmlFor="name" >Your Name</Label>
                        <Control.text model=".name" name="name" id="name"
                        placeholder="Your Name" className="form-control"
                        validators={{
                            required,
                            minLength:minLength(3),
                            maxLength:maxLength(15)
                        }}/>
                        <Errors className="text-danger"
                         model=".name" show="touched"
                         messages={{
                              required:"Required",
                              minLength:"Must be greater than 2 characters",
                              maxLength:"Must be 15 characters or less"
                        }}></Errors>
                        <Label htmlFor="comment" >Comment</Label>
                        <Control.textarea model=".comment" name="comment" id="comment"
                         className="form-control" rows="6"/>
                        <Button type="submit" className="mt-1" color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </React.Fragment>
        ); 
}
}
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
                    <CommentForm/>
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