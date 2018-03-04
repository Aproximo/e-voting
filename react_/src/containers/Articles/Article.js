import React, {Component} from 'react';
import axios from 'axios';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {title : "loading"}
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        axios.get(`http://127.0.0.1:8000/api/article/${this.props.match.params.id}`)
        .then(({ data }) => {
            this.setState({
                article: JSON.parse(data),
                item: ''
            });
            console.log(this.state.article);
            }
        )
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        if(!this.state.article) {
            return (
                <span>Article</span>
            )
        } else {
            return (
                <div>
                    <ul>
                        <li>{this.state.article.title}</li>
                        <li>{this.state.article.content}</li>
                    </ul>
                </div>
            )
        }

    }
}

export default Article;

