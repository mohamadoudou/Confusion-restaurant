import React  from 'react';
import {Link} from 'react-router-dom';
import {Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Loading } from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';


function RenderMenuItem(props){
   return(
    <Link to={`/menu/${props.dish.id}`}>
        <Card key={props.dish.id}>
            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
            {/* <CardImg width="100%" src={baseUrl+props.dish.image} alt={props.dish.name} /> */}
            <CardImgOverlay>
                <CardTitle>{props.dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    </Link>

   );
}
    
const Menu=(props)=>{
    const menu=props.dishes.dishes.map((dish)=>{
        
        return(
            <div  className="col-12 col-md-5 m-1" key={dish.id}>
                 <RenderMenuItem dish={dish} />
            </div>
        );
    });

 if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
 else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
else
    return(
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
            );
}
export default Menu;