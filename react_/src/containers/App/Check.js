import React, {Component} from 'react';

class Check extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {
                    this.props.items.map((item, index) =>
                        <div key={index}><br/> {item.email} </div>
                    )
                }
            </div>
        )
    }
}

export default Check;