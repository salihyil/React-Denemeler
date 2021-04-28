import React from 'react';

// const Collapse = (props) => {
//     console.log("Collapse props.children", props.children); //props.children ile <Collapse>: Parent component <PersonelCard />: children component oluyor. 
//     return ( // concat() Methodu 2 stringi birbirine bağlamak
//         <div>
//             <a className="btn btn-primary w-100" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
//                 {props.baslik}
//                 </a>
//             <div className="collapse" id={props.href}>
//                 {props.children} 

//             </div>
//         </div>
//         //{props.children} ile <PersonelCard /> children'a ulaşıyoruz. 
//     );
// };

class Collapse extends React.Component {

    constructor() { // state'i oluşturmak için en uygun yerlerden bir tanesi constructor() metodunun içerisidir.
        super(); // super() metodu ne işimize yarıyor? React.Component içerisindeki constructor() metoduna ait olan tüm özellikleri almamıza yarıyor.

        this.state = {
            //showContent: "test content" //ilerde bu ifadeyi boolean ifade yapıcaz.
            showContent: true //Bu yazım şekli statik. setState metodu dinatic hale değiricez.
        }
    }

    render() {
        return ( // concat() Methodu 2 stringi birbirine bağlamak
            // <div>
            //     <a className="btn btn-primary w-100" data-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
            //         {this.props.baslik}

            //         </a>
            //     <div className="collapse show" id={this.props.href}>
            //         {this.props.children} 
            //         {this.state.showContent}
            //         {/* propslar: Immutable yani değiştirilemez içerik 
            //             stateler: değiştirilebilir içerikler 
            //             Bu ne demek ilerki derslerde bootstrap ile çağırdığımız kodları state ile içeriği göster yada gösterme diye kullanıcaz.  
            //         */}
            //     </div>
            // </div>

            //9. video state kısım start
            <div>
                <a className="btn btn-primary w-100" >
                    {this.props.baslik /*Buton isimleri*/}
                </a>

                {
                    this.state.showContent ? ( // Burada if-elsein tek satırlık yazılışını kullandık.
                        <div className="collapse show" id={this.props.href}>
                            {this.props.children /* PersonalCard component içindekilerinin aktarıldığı yer */}
                            {/* propslar: Immutable yani değiştirilemez içerik 
                                stateler: değiştirilebilir içerikler 
                                Bu ne demek bootstrap ile çağırdığımız kodları state ile içeriği göster yada gösterme diye kullanıcaz.  
                            */}
                        </div>
                    ) : null 
                }

            </div>
            //9. video state kısım end
        );
    };
};









export default Collapse;