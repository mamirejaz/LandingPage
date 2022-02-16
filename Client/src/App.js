import React, {Component} from 'react' 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from "./Form"


class App extends Component
{
componentDidMount()
{
  axios.get('/hello')
   .then(res => this.setState({hello : res.data}))
   .catch(err => console.log(err))
}
  state = {
    hello: null
    }

  render() {
  return (
  <div className="App">
  <Form />
</div>
  )
}
}
export default App;