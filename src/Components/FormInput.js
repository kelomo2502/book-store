import React from 'react';

class FormInput extends React.Component {
   
        
    
  render() {
    return (
        <div>
            <h3>ADD NEW BOOK</h3>
            <input type="text" placeholder='Enter Title'/>
            <input type="text" placeholder='Enter Author'/>
            <button>Add Book</button>
        </div> 
       

        

    );
  }
}

export default FormInput;