import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";

class Subcategory_home extends React.Component {
  constructor(props) {
    super(props);
    this.postDeadline = this.postDeadline.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setPeriod = this.setPeriod.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }
  changeView = (a,b='',c='') => {
    this.props.changeView(a,b,c);
  }

  clickSubmit(){
    if(!this.state.period || !this.state.deadlineDate){
      alert('Please choose a period and a date.');
    } else{
      this.postDeadline(this.state.deadlineDate, this.state.period, (response)=>{
        console.log('resp: ', response);
      });
    }
  }
  postDeadline(date, period, callback) {
    let data = {
      user_id: localStorage.getItem('userId'),
      title: 'untitled',
      date: new Date(date),
      category: 'Home',
      subcategory: this.props.subcategory,
      days_period: period
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

  setPeriod(period){
    this.setState({
      period: period
    })
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
            <img src={back} onClick={()=>this.changeView('Deadline','HOME')} alt="back" />
        </div>
        
        <h1>NEW DEADLINE</h1>

        <div className="index">
        <h6>Category</h6>
        <hr/>
        <h3>HOME</h3>

        <h6>Subcategory</h6>
        <hr/>
        <h3>{this.props.subcategory}</h3>
    </div>


        <section>
        <button className="btn btn-date">
        <h3>LAST <br/> DEADLINE / CHECK</h3>
        </button>
        <div className="date">
          <input type="date" className="ml-5" onBlur={()=>this.setDate(document.querySelector('input[type="date"]').value)} />
          <hr />
        </div>
        </section>

            <section>
            <button className="btn btn-category">
              <h3>CHOOSE <br/> THE <br/> TIME</h3>
              </button>
                <div className="subcategory mb-5">
                    <p onClick={()=>this.setPeriod(90)}>3 MONTHS</p>
                    <hr/>
                    <p onClick={()=>this.setPeriod(183)}>6 MONTHS</p>
                    <hr/>
                    <p onClick={()=>this.setPeriod(365)}>1 YEAR</p>
                </div>
            </section>
            
            <button className="btn" onClick={this.clickSubmit}><h3 className="create">CREATE</h3></button>
        
          </div>
        </>
      );
    }
  }
  export default Subcategory_home;