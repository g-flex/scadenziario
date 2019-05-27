import React from 'react';
// import './Login.scss';
import axios from 'axios';


class Login extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			error: false,
			user:{
				name:"",
				email:"",
				token:"",
				remember:""
			}
		}
	}

	async componentDidMount() {
		console.log('mounted');
	}



	handleClick(event){
		event.preventDefault();
		let p;
		this.setState({error: true});
		/* controllo che entrambi i campi siano "pieni" */
		if(!document.querySelector("input[type='text']").value || !document.querySelector("input[type='password']").value){
			if(this.state.error===false){
				p=document.createElement("p");
				p.setAttribute('class','error');
				p.innerHTML='Username o Password vuota.<br/>Compila tutte le caselle';
				document.querySelector(".info").appendChild(p);
			}
		}else{
			this.setState({error:false});
			if (document.querySelector(".error")) {
				document.querySelector(".error").remove();
			}
			// Controllo i dati d'accesso dello studente
			let check=document.querySelector("#remember").checked;
			console.log('posting email: '+document.querySelector("input[type='text']").value+' pass: '+document.querySelector("input[type='password']").value);
			axios
			.post('http://localhost:1337/auth/local', {
				identifier: document.querySelector("input[type='text']").value,
				password: document.querySelector("input[type='password']").value
			})
			.then(response => {
				this.setState({
					error:false,
					user:{
						name:response.data.user.username,
						email:response.data.user.email,
						token:response.data.jwt,
						remember:check
					}
				});
				console.log(response);
				if(this.state.user.remember){
					console.log("save");
				//	localStorage.setItem('user', JSON.stringify(this.state.user));
				}
				axios
				.get('http://localhost:1337/deadlines')
				.then(response => {
					console.log('resp: ', response);
				})
				.catch(error => {
					console.log('error: ', error);
				});
			})
			.catch(error => {
				if(this.state.error===false){
					let p=document.createElement("p");
					p.setAttribute('class','error');
					p.innerHTML='Username o Password sbagliata';
					document.querySelector(".info").appendChild(p); 
				}else{
					p.innerHTML='Username o Password sbagliata';
				}
			});
		}
	}

	render() { 
		if(this.state.user.name || localStorage.getItem('user')){
		//  return <Redirect to='/components/Tabbar'/>
		return(
		  <>
		  	<span>Logged</span>
		  </>
		)
		}else{
		  return (
		  <>
			<section className="container-login">
			  <form>
				<h1>Login</h1>
				<div className="info">
				  <input type="text" name="username" placeholder="xxxxx@mohole.it" />
				  <input type="password" name="password" placeholder="Password" />
				</div>
				<div>
				  <span className="check">
					<input id="remember" type="checkbox"/><label htmlFor="remember">Ricordami</label>
				  </span>
				  <input onClick={this.handleClick} type="submit" value="Login"/>
				  <a onClick={this.forgotPass} href="#">Password dimenticata?</a>
				</div>
			  </form>
			</section>
		  
		  </>
		)
		}
		
	   }


}


export default Login;