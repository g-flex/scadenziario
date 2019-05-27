import React from "react";
import logo from "../img/brain_logo.png";
class Register extends React.Component {
  render() {
    return(
      <>
        <div class="container">
        <div class="row">
           <div class="col">
            <img src={logo} />
           </div>
        </div>
        <div class="row">
           <div class="col-12"><h1>Create Account</h1></div>
           <div class="col-12">
            <form>
              <div class="form-group d-flex justify-content-center">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
              </div>
              <div class="form-group d-flex justify-content-center">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Surname" />
              </div>
              <div class="form-group d-flex justify-content-center">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
              </div>
              <div class="form-group d-flex justify-content-center">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div class="form-group d-flex justify-content-center">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Repeat Password" />
              </div>
              <div><button type="submit" class="btn btn-primary">Create account</button></div>
             </form>
            </div>
        </div>
    </div>
      </>
    );
  }
}
export default Register;
    
/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> */