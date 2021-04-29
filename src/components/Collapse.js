//Sayfada yapılanların kısa özeti
//1- ilk constructor()  --> state initialization this.state{showContent: false} kısmı
//2- sonra render metodu ilk kez calisti
//3- onClick event çalıştı
//4- setState state nesnesini güncellediği --> triggerred render
//5- render metodugüncel JSX'i sayfada gösteriyor.



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

        this.state = { //showMore arrow function içine atarsak?
            //showContent: "test content" //ilerde bu ifadeyi boolean ifade yapıcaz.
            showContent: false //Bu yazım şekli statik. setState metodu dinatic hale değiricez.
            
        }

        /*console.log(this); //3 tane Collapse {props: undefined, context: undefined, refs: {…}, updater: {…}, state: {…}}
        // this.showMore = () => {// Böyle yazımın sorunu 1den fazla metot olduğunun hepsni constructor() içine mi yazıcaz? Kod okunurluğu zorlaştırır. Bu sorunu bind(bağlamak) metodu ile hallederiz.
        //     console.log(this); //thisi gördü. çıktısı: 1tane Collapse {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
        // }*/
        //this.showMore = this.ShowMore.bind(this) // Kodun açıklaması: bind içindeki this'i (-yani class Collapse'den gelen objeyi-) this.ShowMore'a bağla demek.
    }
    
    /*
    showMore() {
        console.log(this); //undefined alırız sebebi burdaki yazdığımız showMore() metodu React.Component'e ulaşamıyor.
        //class Collapse extends React.Component içinde constructor() ve render() metotları olduğu için this'i algılayabiliyor. 
        //Kendi yazdığımız metota this'i React.Component'e tanıtmak için ne yapabiliriz?   constructor() içine yazarız. 
    }*/

    /*
    //Ancak genelde bu yöntemde kullanılmaz arrow function kullanılır.
    ShowMore() { //this.ShowMore = this.ShowMore.bind(this) kod ile this Collapse'e  reference(refer) edecek. 
        //console.log(this);
        this.setState({showContent: true})
    }*/

    showMore = () => { //arrow fonksiyonda yazınca this'i direk tanıyor.  constructor() içinde this.showMore = this.ShowMore.bind(this) diye tanıtmamıza gerek kalmıyor.
        //arrow function and binding googling sonuç: Does not have its own bindings to -this- or -super-, and should not be used as -methods-. 
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        console.log(this);
        this.setState({showContent: !this.state.showContent}) //onClick={this.showMore} tıkladık tetiklendi true oldu açtı, bastık tetiklendi false oldu kapandı.

        /*this.state = { //State değerini direk değiştirmek istesek? Uyarı geldi: Do not mutate state directly. Use setState()  react/no-direct-mutation-state
                       //Neden setState() metodunu kullan diyor? React sayfayı tekrardan render ediyor. setState() metodu render() metodunun tekrar çalışması için trigger işlevi görüyor.
                       //this.state = {showContent: true} diye direk çağırınca sayfayı tekrardan render etmiyor.. 
            showContent: true 
        }*/
    }


    render() {
        //console.log(this);  //3 tane Collapse {props: undefined, context: undefined, refs: {…}, updater: {…}, state: {…}}
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
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {this.props.baslik /*Buton isimleri*/}
                </button>

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