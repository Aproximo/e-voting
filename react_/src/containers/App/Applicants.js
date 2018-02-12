import React, {Component} from 'react';

class Applicants extends Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                {
                    this.props.items.map((item, index) =>
                        <a href={item.link} key={index}><br/> {item.name} </a>
                    )
                }
            </div>
        )
    }
}

export default Applicants;