import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button';


 


class App  extends React.Component {
  constructor() {
    super()

    this.state = {
      activeTab: "Add",
      items: []
    }


    
     

  }

  

  render() { 
    return (
    <div>
      <h1>salut</h1>
      <Button />
    </div>
    )
  }
}
 
export default App ;

