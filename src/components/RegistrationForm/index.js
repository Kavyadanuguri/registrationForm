// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isValue: false,
    text1: '',
    text2: '',
    input1: '',
    input2: '',
  }

  errorQuote1 = () => {
    const {input1} = this.state
    if (input1.length === 0) {
      this.setState({text1: 'Required'})
    } else {
      this.setState({text1: ''})
    }
  }

  errorQuote2 = () => {
    const {input2} = this.state
    if (input2.length === 0) {
      this.setState({text2: 'Required'})
    } else {
      this.setState({text2: ''})
    }
  }

  getForm = () => {
    this.setState({isValue: false, input1: '', input2: ''})
  }

  formSubmit = event => {
    event.preventDefault()
    const {input1, input2} = this.state

    if (input1.length === 0) {
      this.setState({text1: 'Required'})
    }
    if (input2.length === 0) {
      this.setState({text2: 'Required'})
    }
    if (input1.length !== 0 && input2.length !== 0) {
      this.setState({isValue: true})
    }
  }

  getFirstName = event => {
    const length = event.target.value
    console.log(length)
    this.setState({input1: event.target.value})
  }

  getSecondName = event => {
    this.setState({input2: event.target.value})
  }

  render() {
    const {isValue, text1, text2, input1, input2} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading1">Registration</h1>

        <div className="container1">
          {!isValue ? (
            <form onSubmit={this.formSubmit}>
              <div className="con1">
                <label className="label1" htmlFor="label1">
                  FIRST NAME
                </label>
                <input
                  className="input1"
                  id="label1"
                  placeholder="First Name"
                  type="text"
                  onChange={this.getFirstName}
                  onBlur={this.errorQuote1}
                  value={input1}
                />
                <p className="error-msg">{text1}</p>
              </div>
              <div className="con1">
                <label className="label1" htmlFor="label2">
                  LAST NAME
                </label>
                <input
                  className="input1"
                  id="label2"
                  value={input2}
                  placeholder="Last Name"
                  type="text"
                  onChange={this.getSecondName}
                  onBlur={this.errorQuote2}
                />
                <p className="error-msg">{text2}</p>
              </div>
              <div className="btn-container">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="container2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p className="heading2">Submitted Successfully</p>
              <button onClick={this.getForm} className="btn1" type="button">
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
