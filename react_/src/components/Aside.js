import React, {Component} from 'react';
import '../style/components/Aside.css';

class Aside extends Component {
    render() {
        return (
            <div className="aside">
                <ul>
                    <a  href="https://minjust.gov.ua/" >
                        <div >
                            <img src="https://avatars.mds.yandex.net/get-altay/771751/2a000001600a10178f23d53f9235b73ecbce/M" className="aside-advertising-img" alt="Aside"/><br/>

                        </div>
                    </a>
                    <a href="http://moz.gov.ua/" >
                        <div >
                            <img src="http://kprda.gov.ua/wp-content/uploads/2017/12/2764-2411_social_share_02.png" className="aside-advertising-img" alt="Aside"/><br/>

                        </div>
                    </a>
                    <a href="www.minfin.gov.ua" >
                        <div>
                            <img src="http://upload.wikimedia.org/wikipedia/commons/3/3e/%D0%9C%D1%96%D0%BD%D1%96%D1%81%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE_%D1%84%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D1%96%D0%B2_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8.png" className="aside-advertising-img" alt="Aside"/><br/>

                        </div>
                    </a>
                    <a href="sfs.gov.ua/" >
                        <div>
                            <img src="http://kprda.gov.ua/wp-content/uploads/2013/09/min_doh.jpg" className="aside-advertising-img" alt="Aside"/><br/>

                        </div>
                    </a>

                </ul>
            </div>
        )
    }
}

export default Aside;