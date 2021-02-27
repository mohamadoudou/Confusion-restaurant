import React ,{Component} from 'react';
import {Card, CardImg, CardText, CardBody, Modal,CardTitle, Breadcrumb, BreadcrumbItem, Button, ModalHeader, ModalBody,Label} from 'reactstrap';
import Moment from 'react-moment';
import { Link} from 'react-router-dom';
import { Control,LocalForm, Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required=(val)=> val&&val.length;
const minLength=(len)=>(val)=>val&&val.length>=len;
const maxLength=(len)=>(val)=>val&&val.length<=len;

class CommentForm extends Component{
            constructor(props){
                super(props);
                this.state={
                  isModalOpen:false
                };
                this.FormValidator=this.FormValidator.bind(this);
            }
    toggleModal=()=>{
        this.setState({
        isModalOpen:!this.state.isModalOpen
        });
    }

    FormValidator=(values)=>{
        this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
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
                        <Control.text model=".author" name="author" id="author"
                        placeholder="Your Name" className="form-control"
                        validators={{
                            required,
                            minLength:minLength(3),
                            maxLength:maxLength(15)
                        }}/>
                        <Errors className="text-danger"
                         model=".author" show="touched"
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
 function RenderComments(props){
        if(props.comments!=null){
           const commentaire=props.comments.map((comment)=>{
                return(
                    <Fade in  key={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author}, <Moment format="MMM D YYYY" withTitle>{comment.date}</Moment></li>
                        </ul>
                    </Fade>
                );
                });     
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <Stagger in>
                       {commentaire}
                    </Stagger>
                    <CommentForm dishId={props.dishId} postComment={props.postComment}/>
                </div>
            );
        }
        else{
            return(
               null
            );
        }
    }


    function RenderDish(props){
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                       <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                            <Card key={props.dish.id} >
                                {/* <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name}/> */}
                                <CardImg top src={props.dish.image} alt={props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </FadeTransform>
                    </div>
                    <RenderComments comments={props.comments}
                     postComment={props.postComment}
                     dishId={props.dishId}/>
                   
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
                        <BreadcrumbItem active>{props.dish?props.dish.name:null}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish?props.dish.name:null}</h3>
                        <hr />
                    </div>                
                </div>
                {
                props.dish?(<RenderDish dish={props.dish} comments={props.comments}
                postComment={props.postComment}  dishId={props.dish.id}
                isLoading={props.isLoading} errMess={props.errMess}/>):null
                }
            </div>
        );
    }



export default DishDetail;