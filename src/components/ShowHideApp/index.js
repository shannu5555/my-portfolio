import {Component} from 'react'

import './index.css'

class ShowHideApp extends Component{

    state = {
        showFirstName: false,
        showLastName: false,
      }

    onClickShowFirstName = () => {
        this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
      }

    onClickShowLastName = () => {
        this.setState(prevState => ({showLastName: !prevState.showLastName}))
      }
    

    render(){
        

          const {showFirstName, showLastName} = this.state

        return(
            <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickShowLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Joe</p>}
          </div>
        </div>
      </div>
    
        )
    }
}

export default ShowHideApp
