import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import '../../style/containers/Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {title : "loading"}
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.toDo = this.toDo.bind(this);
    }


    componentWillMount() {
        axios.get(`http://127.0.0.1:8000/api/article/${this.props.match.params.id}`)
            .then(({ data }) => {
                    this.setState({
                        article: JSON.parse(data),
                        item: ''
                    });
                    console.log(this.state.article);
                    this.toDo();
                }
            )
            .catch(function (error) {
                console.log(error);
            });

    }

    toDo(){
        let $item = this.state.article.map((item, key) => {
            return (
                <li id={key}>{item.content}</li>
            )
        });
        this.setState({
            item: $item
        })
    }




    render() {
        let item = this.state.item;
  

        return (
            <div>
                {item}
                <span>Article</span>
            </div>

        )
    }
}


export default Article;

