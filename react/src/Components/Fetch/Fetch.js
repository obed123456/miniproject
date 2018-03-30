import React, {Component} from 'react';

class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      allclasses : [],
    }
  }

componentDidMount() {
  console.log(this)

  fetch('http://localhost:3000/api/getallclasseswithname')
  .then((response) => {
    // if(response.ok) {
      response.json()
    .then((json) => {
      let allclasses = json; // all objects
      console.log(allclasses);
      // let street = []
       let street = allclasses.filter((element) => element.danceClasses === 'Street').map(element => {
         console.log("element.sFname: " + element.sFname)
         return (<li>{element.sFname}</li>);
       });
       console.log("street: " + street + "type: " + (typeof street))
      return street;
    }).then((street) => this.setState({allclasses: street}));


    })

}

  render() {
    console.log(this.state.allclasses)
    return this.state.allclasses

  }
}

export default Fetch;
