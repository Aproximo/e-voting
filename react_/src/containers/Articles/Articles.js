import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {title : "loading"},
            choice: ''
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.toDo = this.toDo.bind(this);
    }

    componentWillMount() {
        axios.get('http://127.0.0.1:8000/api/article')
            .then(({ data }) => {
                    this.setState({
                        article: JSON.parse(data),
                        item: ''
                    });
                    console.log(this.state);
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
                <div>
                    <Link to={`/article/${item.id}`}>{item.title}</Link>
                </div>
            )
        });
        this.setState({
            item: $item
        })
    }

    render() {
        let item = this.state.item;
        if(!item) {
            return (
                <span>Articles</span>
            )
        } else {
            return (
                <ul>
                    {item}.forEach(function(item) {
                    <li key={item.id}>item</li>
                    })
                </ul>
            )
        }

    }
}

export default Articles;
