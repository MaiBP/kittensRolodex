import {Component} from 'react'
import Card from '../card/card.component'
import '../card-list/card-list.styles.css'
class  CardList extends Component {

    render(){
        // console.log('render from CardList') //renders calls when state changes or props
        const {kittens} = this.props; //destructuring 
        
        return (
          <div className="card-list">
            {kittens.map((kitty) => {
              return <Card kitty={kitty} />;
            })}
          </div>
        );
    }
}
export default CardList;