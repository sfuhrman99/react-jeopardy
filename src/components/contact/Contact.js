import React, { Component } from 'react';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            formData: {
                firstName: '',
                lastName: ''
              }
          };
      }


      handleChange = (event) => {
        const formData = {...this.state.formData};
      }

    render() {
        return (
          <div className="Contact">
            <form>
              <div>
                <label htmlFor="">First Name</label>
                <input type="text" name="firstName" value = {this.state.formData.firstName}/>
              </div>
              <div>
             <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" value={this.state.formData.lastName}/>
            </div>
            <button>Submit Form</button>
            </form>
          </div>
        );
      }
    }

   export default Contact;