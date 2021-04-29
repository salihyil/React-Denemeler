//Sayfada yapılanların kısa özeti
//1- ilk constructor()  --> state initialization this.state{showContent: false} kısmı
//2- sonra render metodu ilk kez calisti
//3- onClick event çalıştı
//4- setState state nesnesini güncellediği --> triggerred render
//5- render metodu güncel JSX'i sayfada gösteriyor.

import React from 'react';

class Collapse extends React.Component {

    /*
    constructor() {
        super();
        this.state = {
            showContent: false
        }
    }
    */

    state = { showContent: false };// state'i direk böylede yazabilirdik. constructor() olayını anlamak için state'i metot içinde kullandık.

    showMore = () => {
        // console.log(this);
        this.setState({ showContent: !this.state.showContent })

    }

    /*
    componentDidMount(){
        console.log("componentDidMount oluşturuldu"); //3 tane çıktı verdi. Çünkü 3 tane <Collapse component çağırıyoruz.  index.jsde 3 tane Collapse var.
    }

    componentDidUpdate(){
        console.log("componentDidUpdate güncellendi");// Collapse component'lere tıklayınca componentDidUpdate() metodu çalışıyor.
    }

    componentWillUnmount(){

    }
    */

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {/* {this.props.children.props.cardTitle} 
                    {/*this.props içinde 3 tane {href: "collapseExample1", children: {…}} children dediği PersonelCard component
                    this Burdaki class Collapse'dan oluşacak obje  */}


                    {/* {this.props.children.props.cardTitle} Kodunu kullanmıyoruz. Çünkü yeni bir children olsaydı hep elden children yazmak gerekirdi.*/}
                    {console.log("this.props.children",this.props.children) }
                    {/* Çıktısı:<PersonelCard children olduğu için onun değerler gözüküyor. */}

                    {React.Children.map(this.props.children, childrens => childrens.props.cardTitle)}
                    {/* Bu this.props.children içinde yer alan her birincil alt eleman için bir fonksiyon çağırır, this‘i (kendisini) thisArg ile belirleyin. 
                    Eğer this.props.children bir dizi ise taranacak ve dizi içindeki her alt eleman için fonksiyon çağrılacaktır. 
                    Eğer alt elemanlar null veya undefined ise, bu metod bir dizi yerine null veya undefined döndürür. */}

                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show" id={this.props.href}>
                            {/* {this.props.children} */}
                            {React.Children.map(this.props.children, childrens => childrens)}

                        </div>
                    ) : null
                }
            </div>
        );
    };
};

export default Collapse;