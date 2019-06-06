import React from "react";
import back from "../img/back.png";

class Subcategory_person extends React.Component {
  constructor(props) {
    super(props);
    this.postDeadline = this.postDeadline.bind(this);
    this.setDate = this.setDate.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }
  changeView = (a,b='',c='') => {
    this.props.changeView(a,b,c);
  }

  clickSubmit(){
    if(!this.state.deadlineDate){
      alert('Please choose a date.');
    } else{
      this.postDeadline(this.state.deadlineDate, (response)=>{
        this.changeView('success');
      });
    }
  }
  postDeadline(date, callback) {
    let data = {
      user_id: localStorage.getItem('userId'),
      title: 'untitled',
      date: new Date(date),
      category: this.props.category==='PEOPLE'?"People":"Animals",
      subcategory: this.props.subcategory,
      days_period: 365
    };
    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
    fetch('https://nodedue.mohole.it/deadlines', {
      method: 'POST',
      body: formBody,
      headers: {
        "Authorization": "Bearer "+localStorage.getItem('authToken'),
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then((response) => {
        callback(response);
    });
    //.catch(error=> console.error('Error:', error));
  }

  setDate(deadlineDate){
    this.setState({ 
      deadlineDate: deadlineDate
    })
  }
    render() {
      return(
        <>
          <div className="container">
          <div className="control">
           <img src={back} onClick={()=>this.props.category==='PEOPLE'?this.changeView('Deadline','PEOPLE'):this.changeView('Deadline','ANIMALS')} alt="back" />
        </div>
        
        <h1>NEW DEADLINE</h1>

        <div className="index">
        <h6>Category</h6>
        <hr/>
        <h3>{this.props.category==='PEOPLE'?"PERSON":"ANIMALS"}</h3>


        <h6>Subcategory</h6>
        <hr/>
        <h3>{this.props.subcategory}</h3>

        {/* <h6>Birthday</h6>
        <hr />
        <h3>DD/MM/YY</h3> */}
    </div>

        <section>
    <button className="btn btn-date">
    <h3>{this.props.category==='PEOPLE'?"ISSUING":"LAST VACINATION"}</h3>
        </button>
        <div className="date">
                <input type="date" className="ml-5" onBlur={()=>this.setDate(document.querySelector('input[type="date"]').value)} />
                <hr/>     
        </div>
        </section>
        
        <button className="btn" onClick={this.clickSubmit}><h3 className="create">CREATE</h3></button>
        
          </div>
        </>
      );
    }
  }
  export default Subcategory_person;