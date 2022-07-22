import React from 'react';
import BookList from './BookList';
import FormInput from './FormInput';

class Book extends React.Component {
   
        state = { 
            books: [
              {
                id: 1,
                title: "Things Fall Apart",
                author: "Chinua Achebe"
              },
              
            ]
       
    }
    
  render() {
    return (
        <div>
        <BookList books={this.state.books} /> 
        <div>
           <FormInput/>
        </div> 
        </div>

    );
  }
}

export default Book;