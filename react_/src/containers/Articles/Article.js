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
        // this.toDo = this.toDo.bind(this);
    }


    componentWillMount() {
        // console.log("hi");
        axios.get(`http://127.0.0.1:8000/api/article/${this.props.match.params.id}`)
            .then(({ data }) => {
                    this.setState({
                        article: JSON.parse(data),

                    });
                    console.log(this.state);
                    

                }

            )
            .catch(function (error) {
                console.log(error);
            });


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

