(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},175:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(15),l=t.n(s),o=(t(101),t(16)),i=t(17),c=t(19),m=t(18),d=(t(102),t(7)),u=t(22),h=t(2),E=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))};function f(e){return r.a.createElement(d.b,{to:"/menu/".concat(e.dish.id)},r.a.createElement(h.d,{key:e.dish.id},r.a.createElement(h.g,{width:"100%",src:e.dish.image,alt:e.dish.name}),r.a.createElement(h.h,null,r.a.createElement(h.k,null,e.dish.name))))}var p=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(f,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(h.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(h.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},g=t(20),b=t(93),v=t.n(b),N=t(9),y=t(24),w=function(e){return e&&e.length},O=function(e){return function(a){return a&&a.length<=e}},M=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).toggleModal=function(){n.setState({isModalOpen:!n.state.isModalOpen})},n.FormValidator=function(e){n.toggleModal(),n.props.postComment(n.props.dishId,e.rating,e.author,e.comment)},n.state={isModalOpen:!1},n.FormValidator=n.FormValidator.bind(Object(g.a)(n)),n}return Object(i.a)(t,[{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.c,{onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil"}," "),"  Submit Comment"),r.a.createElement(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(h.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(h.u,null,r.a.createElement(N.LocalForm,{onSubmit:function(e){return a.FormValidator(e)}},r.a.createElement(h.r,{htmlFor:"rating"},"Rating"),r.a.createElement(N.Control.select,{model:".rating",name:"rating",id:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")),r.a.createElement(h.r,{htmlFor:"name"},"Your Name"),r.a.createElement(N.Control.text,{model:".author",name:"author",id:"author",placeholder:"Your Name",className:"form-control",validators:{required:w,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:O(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}),r.a.createElement(h.r,{htmlFor:"comment"},"Comment"),r.a.createElement(N.Control.textarea,{model:".comment",name:"comment",id:"comment",className:"form-control",rows:"6"}),r.a.createElement(h.c,{type:"submit",className:"mt-1",color:"primary"},"Submit")))))}}]),t}(n.Component);function k(e){if(null!=e.comments){var a=e.comments.map((function(e){return r.a.createElement(y.Fade,{in:!0,key:e.id},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,e.comment),r.a.createElement("li",null,"--",e.author,", ",r.a.createElement(v.a,{format:"MMM D YYYY",withTitle:!0},e.date))))}));return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement(y.Stagger,{in:!0},a),r.a.createElement(M,{dishId:e.dishId,postComment:e.postComment}))}return null}function L(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(h.d,{key:e.dish.id},r.a.createElement(h.g,{top:!0,src:e.dish.image,alt:e.dish.name}),r.a.createElement(h.e,null,r.a.createElement(h.k,null,e.dish.name),r.a.createElement(h.j,null,e.dish.description))))),r.a.createElement(k,{comments:e.comments,postComment:e.postComment,dishId:e.dishId})):r.a.createElement("div",null)}var C=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(h.b,null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement(h.b,{active:!0},e.dish?e.dish.name:null)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish?e.dish.name:null),r.a.createElement("hr",null))),e.dish?r.a.createElement(L,{dish:e.dish,comments:e.comments,postComment:e.postComment,dishId:e.dish.id,isLoading:e.isLoading,errMess:e.errMess}):null)},j=function(e){return e&&e.length},I=function(e){return function(a){return a&&e>=a.length}},F=function(e){return function(a){return a&&e<=a.length}},S=function(e){return!isNaN(Number(e))},T=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},D=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(i.a)(t,[{key:"handleSubmit",value:function(e){this.props.resetFeedbackForm(),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(h.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(h.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"#!"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(N.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(h.B,{className:"form-group"},r.a.createElement(h.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(h.l,{md:10},r.a.createElement(N.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:j,minLength:F(3),maxLength:I(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(h.B,{className:"form-group"},r.a.createElement(h.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(h.l,{md:10},r.a.createElement(N.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:j,minLengtht:F(3),maxLength:I(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(h.B,{className:"form-group"},r.a.createElement(h.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(h.l,{md:10},r.a.createElement(N.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:"form-control",validators:{required:j,minLength:F(3),maxLength:I(15),isNumber:S}}),r.a.createElement(N.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less",isNumber:"Must be a number"}}))),r.a.createElement(h.B,{className:"form-group"},r.a.createElement(h.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(h.l,{md:10},r.a.createElement(N.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:j,validEmail:T}}),r.a.createElement(N.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"required ",validEmail:"Invalid Email Address"}}))),r.a.createElement(h.B,{className:"form-group"},r.a.createElement(h.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(h.r,{check:!0},r.a.createElement(N.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(h.l,{md:{size:3,offset:1}},r.a.createElement(N.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(h.B,{className:"form-group"},r.a.createElement(h.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(h.l,{md:10},r.a.createElement(N.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(h.B,{className:"form-group"},r.a.createElement(h.l,{md:{size:10,offset:2}},r.a.createElement(h.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component);function A(e){var a=e.leader,t=e.isLoading,n=e.errMess;return t?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(h.s,{key:a.id},r.a.createElement(h.s,{object:!0,src:a.image,alt:a.name,className:"image__size"}),r.a.createElement(h.s,{body:!0,className:"ml-5"},r.a.createElement(h.s,{heading:!0},a.name),r.a.createElement("h5",null,a.designation),r.a.createElement("p",null,a.description)))}var x=function(e){var a=e.leaders.map((function(a){return r.a.createElement(y.Fade,{in:!0},r.a.createElement(A,{leader:a,isLoading:e.isLoading,errMess:e.errMess}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(h.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(h.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(h.d,null,r.a.createElement(h.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(h.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(h.d,null,r.a.createElement(h.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(h.s,{list:!0},r.a.createElement(y.Stagger,{in:!0},a)))))},R=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(g.a)(n)),n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.handleLogin=n.handleLogin.bind(Object(g.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(h.A,{onClick:this.toggleNav}),r.a.createElement(h.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"/assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(h.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(h.w,{navbar:!0},r.a.createElement(h.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(h.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(h.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(h.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(h.w,{className:"ml-auto",navbar:!0},r.a.createElement(h.x,null,r.a.createElement(h.c,{onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"},"Login"))))))),r.a.createElement(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(h.v,{toggle:this.toggleModal},"Login"),r.a.createElement(h.u,null,r.a.createElement(h.n,{onSubmit:this.handleLogin},r.a.createElement(h.o,null,r.a.createElement(h.r,{htmlFor:"username"},"Username"),r.a.createElement(h.p,{type:"text",name:"username",id:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(h.o,null,r.a.createElement(h.r,{htmlFor:"password"},"Password"),r.a.createElement(h.p,{type:"password",name:"password",id:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(h.o,{check:!0},r.a.createElement(h.r,{check:!0},r.a.createElement(h.p,{type:"checkbox",name:"remember",id:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(h.c,{type:"submit",value:"submit",color:"primary"},"Login")))),r.a.createElement(h.q,{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),t}(n.Component);var P=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))};function _(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(h.d,null,r.a.createElement(h.g,{src:a.image?a.image:null,alt:a.name}),r.a.createElement(h.e,null,r.a.createElement(h.k,null,a.name),a.designation?r.a.createElement(h.i,null,a.designation):null,r.a.createElement(h.j,null,a.description))))}var Z=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(_,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(_,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(_,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},q=[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],H=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],z=[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],B=[{id:3,name:"Alberto Somayya",image:"/assets/images/alberto1.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto2.jpg",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto3.jpg",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:0,name:"Peter Pan",image:"/assets/images/alberto4.jpg",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."}],U=function(){return{type:"DISHES_LOADING"}},G=function(e){return{type:"ADD_DISHES",payload:e}},Y=function(e){return{type:"ADD_COMMENTS",payload:e}},W=function(e){return{type:"ADD_COMMENT",payload:e}},J=function(){return{type:"PROMOS_LOADING"}},V=function(e){return{type:"ADD_PROMOS",payload:e}},K=function(){return{type:"LEADERS_LOADING"}},$=function(e){return{type:"ADD_LEADERS",payload:e}},Q=function(e){return{type:"ADD_FEEDBACK",payload:e}},X=t(53),ee=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("div",{className:"container"},r.a.createElement(X.TransitionGroup,null,r.a.createElement(X.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:1e3},r.a.createElement(d.f,null,"   2",r.a.createElement(d.e,{path:"/home",component:function(){return r.a.createElement(Z,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(d.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(p,{dishes:e.props.dishes})}}),r.a.createElement(d.e,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(C,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentisLoading:e.props.comments.isLoading,commenterrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(d.e,{path:"/contactus",component:function(){return r.a.createElement(D,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback,addFeedback:e.props.addFeedback})}}),r.a.createElement(d.e,{path:"/aboutus",component:function(){return r.a.createElement(x,{leaders:e.props.leaders.leaders,isLoading:e.props.leaders.isLoading,errMess:e.props.leaders.errMess})}}),r.a.createElement(d.d,{to:"/home"}))))),r.a.createElement(P,null))}}]),t}(n.Component),ae=Object(d.g)(Object(u.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders,addFeedback:e.addFeedback}}),(function(e){return{postComment:function(a,t,n,r){e(function(e,a,t,n){return function(r){var s={dishId:e,rating:a,author:t,comment:n};s.date=(new Date).toISOString(),setTimeout((function(){r(W(s))}),2e3)}}(a,t,n,r))},fetchDishes:function(){e((function(e){e(U(!0)),setTimeout((function(){e(G(q))}),2e3)}))},resetFeedbackForm:function(){e(N.actions.reset("feedback"))},fetchComments:function(){e((function(e){setTimeout((function(){e(Y(H))}),2e3)}))},fetchPromos:function(){e((function(e){e(J()),setTimeout((function(){e(V(z))}),2e3)}))},fetchLeaders:function(){e((function(e){e(K()),setTimeout((function(){e($(B))}),2e3)}))},postFeedback:function(a,t,n,r,s,l,o){e(function(e,a,t,n,r,s,l){return function(o){var i={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:s,message:l};return i.date=(new Date).toISOString(),fetch("http://localhost:3001/feedback",{method:"POST",body:JSON.stringify(i),headers:{"content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return o(Q(e))})).then((function(e){alert("Thank you for your feedback :"+JSON.stringify(i))})).catch((function(e){alert("Thank you for your feedback ")}))}}(a,t,n,r,s,l,o))}}}))(ee)),te=t(6),ne=t(23),re=t(94),se=t.n(re),le=t(95),oe=t.n(le),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!0,errMess:null,dishes:q});case"DISHES_FAILED":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{comments:[],errMess:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(te.a)(Object(te.a)({},e),{},{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(te.a)(Object(te.a)({},e),{},{errMess:a.payload});case"COMMENTS_LOADING":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!0,errMess:null,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(te.a)(Object(te.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(te.a)(Object(te.a)({},e),{},{promotions:a.payload,isLoading:!1,errMess:null});case"PROMOS_LOADING":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{leaders:B,errMess:null,isLoading:!0},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LEADERS_LOADING":return Object(te.a)(Object(te.a)({},e),{},{leaders:B,isLoading:!0,errMess:null});case"ADD_LEADERS":return Object(te.a)(Object(te.a)({},e),{},{leaders:a.payload,isLoading:!1,errMess:null});case"LEADERS_FAILED":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},ue={firstname:"",lastname:"",telnum:"",email:"",agree:"",contactType:"",message:""},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{feedback:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FEEDBACK":return Object(te.a)(Object(te.a)({},e),{},{feedback:e.feedback.concat(a.payload)});default:return e}},Ee=Object(ne.createStore)(Object(ne.combineReducers)(Object(te.a)({dishes:ie,comments:ce,promotions:me,leaders:de,addFeedback:he},Object(N.createForms)({feedback:ue}))),Object(ne.applyMiddleware)(se.a,oe.a)),fe=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(u.Provider,{store:Ee},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ae,null))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(172),t(173),t(174);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,a,t){e.exports=t(175)}},[[96,1,2]]]);
//# sourceMappingURL=main.65c666cf.chunk.js.map