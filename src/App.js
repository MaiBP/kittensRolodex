// import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
class  App extends Component { //-->first constructor runs 
  constructor(){
    console.log('1 constructor')
    super();
    this.state = { //initial value
      kittens:[],
      searchField: '',
    }
  }
  // third step --> display the info once the component mounts 
componentDidMount (){
  // console.log('3 component did mount')
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then((users) => this.setState( 
   () => {
   return {kittens: users}
 },
 () => {console.log(this.state)})) // just to see in the console what's rendering
}


onSearchChange =(e)=>{
      const searchField = e.target.value.toLocaleLowerCase(); // store the search field
      this.setState(() => {
        return {searchField}
      })
    }



render(){ //-->second step it renders //then it comes again after the info mounts
      console.log('2 render')
      const {kittens, searchField} = this.state; //optimize by destructuring 
      const {onSearchChange} = this;
      const filteredKittens = kittens.filter((kitty)=>{
          return kitty.name.toLocaleLowerCase().includes(searchField);
        });

    return (
    <div className='App'>
     <h1 className= 'app-title'> KITTENS ROLODEX</h1>

      <SearchBox
      className='search-box'
      onChangeHandler={onSearchChange} 
      placeholder='search kittens'
      />
     
      <CardList kittens={filteredKittens}/>
    </div>
  );
  }
  
}

export default App;
