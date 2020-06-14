import React ,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent';

function RenderMenuItem(props){
   return(
    <Card key={props.dish.id} onClick={() => props.onClick(props.dish.id)}>
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
        <CardImgOverlay>
            <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
    </Card>

   );
}
    
const Menu=(props)=>{
    const menu=props.dishes.map((dish)=>{
        return(
            <div  className="col-12 col-md-5 m-1">
                 <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });
    return(
            <div className="row">
                {menu}
            </div>
            );
}
export default Menu;