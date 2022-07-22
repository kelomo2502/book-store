import React from 'react';


class BookList extends React.Component {
    
    
  render() {
    return (
        <ul>
                 {this.props.books.map(todo =>  (   
                <li className='list-style' key={todo.id}> 
                <h3>{todo.title}</h3> 
                <p>{todo.author}</p>
                <button className="removeBtn">Remove</button> 
               </li>   

                  ))}
        </ul>

    );
  }
}

export default BookList;