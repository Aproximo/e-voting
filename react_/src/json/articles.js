import fetch from "isomorphic-fetch";
import axios from 'axios';

let x;
const articles = {


    // componentWillMount() {
    //     fetch('http://127.0.0.1:8000/api/article')
    //         .then((r) => JSON.parse(r))
    //         .then(console.log);
    // }


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         article: {title : "loading"}
    //     };
    //     this.componentWillMount = this.componentWillMount.bind(this);
    //
    //
    //
    // }
    //
    //
    //
    //
    componentWillMount() {
        this.x = this.x.bind(this)
        axios.get('http://127.0.0.1:8000/api/article')
            .then(({data}) => {

                       this.x = JSON.parse(data)

                    console.log(data);
                }
            )
            .catch(function (error) {
                console.log(error);
            })


    }
    //
    // render () {
    //     // console.log(this.state);
    //     return(<div></div>)
    //
    // }


}

export default articles

console.log(this.x)




