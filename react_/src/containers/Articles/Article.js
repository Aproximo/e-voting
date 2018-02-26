import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import '../../style/containers/Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {title : "loading"}
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        // this.toDo = this.toDo.bind(this);
    }


    componentWillMount() {
        // console.log("hi");
        axios.get(`http://127.0.0.1:8000/api/article/${this.props.match.params.id}`)
            .then(({ data }) => {
                    this.setState({
                        article: JSON.parse(data),
                        item: ''
                    });
                console.log(this.state);
                // this.toDo();
                }

            )
            .catch(function (error) {
                console.log(error);
            });


    }
    // toDo(){
    //     let $item = this.state.article.map((item, key) => {
    //         return (
    //             <div id={key}>
    //                 <Link to={`/articles/${item.id}`}>{item.title}</Link>
    //                 <span >{item.content}</span>
    //             </div>
    //         )
    //     });
    //     // console.log("toDo", $item);
    //     this.setState({
    //         item: $item
    //     })
    // }


    render() {
        let item = this.state.item;
        console.log('this - ', this.props.match.params.id);
        console.log("bla");
         console.log("render", {item});
        return (
           <div>
               {item}
               <span>Articles</span>
           </div>
        )
    }
}

export default Articles;