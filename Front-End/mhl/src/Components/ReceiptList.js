import React, { Component } from 'react';
import RecipeReviewCard from './Reciept';
import '../View/ReceptList.css'


class RecepitList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ReceptList">
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
            </div>
         );
    }
}
 

export default RecepitList;