//index.js react uygulamsının başlangıç noktasıdır.
import React from 'react'; //'react' çağırılan module nerede? module "C:/Users/salih/AppData/Local/Microsoft/TypeScript/4.2/node_modules/@types/react/index"
import ReactDOM from 'react-dom';
import PersonelCard from './components/PersonelCard';
import Collapse from './components/Collapse';

/*function App() { //fonkisyonel componant bu 
    return <h1>Benim adım Salih yılmaz11</h1>
}
classNameName App2 extends React.Component {
    render() {
        return <h1>Benim adım Salih yılmaz1</h1>
    }
}
reactDOM.render( //oluşturduğumuz componentı sayfamızda göstermek için componentı render etmemiz lazım.
    <App2 />, //önce neyi göstereceğimiz burda App() fonksiyonunu göstericez.
    document.querySelector("#root")  //ikinci parametrede nerede göstereceğimizi yazıyoruz.
);
*/

/* JSX Değişkenleri ve İfadeleri
const name = "Dünya"; // değişken tanımlama
const element = <h1>Merhaba1, {name} {2+2}</h1> //{name} değişkeni kullanmak
reactDOM.render(
   element,
   document.querySelector("#root")
)*/

/* DOM'a JSX Render Etmek
function formatMessage(message) {
    return message.fistName + " " + message.lastName;
}

const message = {
    fistName: "Salih",
    lastName: "Yılmaz"
}

const element = (
    <h1>
        {formatMessage(message)}
    </h1>
)

reactDOM.render(
    element,
    document.querySelector("#root");
) */

// JSX ile Inline CSS Kullanımı
/*
let styles = {
    color: "red",
    backgroundColor: "black", background-color => backgroundColor
    fontWeight: "bold"  // camelCase şeklinde yazılır font-weight => fontWeight diye yazılır.
};

let element = <div style={styles}>Merhaba</div>;

reactDOM.render(element, document.getElementById("root")) */
//--------------------------------------------------------------------------------------------------------------------------
// JSX

// <button type="button" style="padding: 10px; color: white; background-color: red; border:2px solid yellow;">HTML BUTTON</button>

// const names = ["Arin","Elis","Gamze"];
// let buttonValue = "JSX Button"
// var styles = {
//     color:'red',
//     backgroundColor:'black',
//     fontWeight:'bold'
// };
// let str1 = "Click ";
// let str2 = "Me";

// function App() {
//     return ( //return sonra () parantes içine yaz.
//     1-JSX yapısını düzenli bir şekilde geri döndürmek için bir tane parent elemanının genelde div olan parent elemanının içerisine koyuyoruz.
//     3-JSX'de etiket içindeki htmlde: classNameName jsx'de: classNameNameName diye yazılır.
//     <div> 
//         {/* { {names.map(name => (<h1>{name}</h1>))}
//         <ul>
//             <li>Ayşe</li>
//             <li>Fatma</li>
//         </ul> } */}
//         <button classNameNameName="jsxclassNameName" type="button" style={styles}>{str1.concat(str2)}</button>
//         <button tabIndex="3" type="button" style={{padding: '10px', color:'white', backgroundColor:'blue', border:'2px solid yellow'}}>{buttonValue}</button>

//     </div>
//     );

// }

// reactDOM.render( //oluşturduğumuz componentı sayfamızda göstermek için componentı render etmemiz lazım.
//     <App />, //önce neyi göstereceğimiz burda App() fonksiyonunu göstericez.
//     document.getElementById("root")  //ikinci parametrede nerede göstereceğimizi yazıyoruz.
// );

//--------------------------------------------------------------------------------------------------------------------------
//Props Kavramı, "First-classNameName" Fonksiyonlar

const App = () => { // ana App component

    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">

                    <div className="col-4">
                        <Collapse href="collapseExample1" >
                            <PersonelCard //props ile : cardText, updatedTime, image ulaşıyoruz.  
                                //cardTitle="Card Title I" Default props
                                cardText="Lorem Ipsum I"
                                updatedTime="Last Updated 1 min ago."
                                image="https://picsum.photos/id/1000/300/300"
                            />
                        </Collapse>
                    </div>

                    <div className="col-4">
                        <Collapse href="collapseExample2" >
                            <PersonelCard
                                cardTitle="Card Title II"
                                cardText="Lorem Ipsum II"
                                updatedTime="Last Updated 2 min ago."
                                image="https://picsum.photos/id/101/300/300"
                            />
                        </Collapse>
                    </div>

                    <div className="col-4">
                        <Collapse href="collapseExample3">
                            <PersonelCard
                                cardTitle="Card Title III"
                                cardText="Lorem Ipsum III"
                                updatedTime="Last Updated 3 min ago."
                                image="https://picsum.photos/id/102/300/300"
                            />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);



/* React Saat Örneği
function tick() {
    const element = (
      <div>
        <h1>Merhaba Dünya!</h1>
        <h2>Saat şu anda {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000); setInterval() metodu ile her saniye bitiminde ReactDOM.render() metodu çağrılıyor. Bu sayede her yeni render ile arayüz güncellenmiş oluyor.
  Not: Genelde birçok React uygulamasında ReactDOM.render() yalnızca bir kez çağrılır. 
  Sonraki bölümlerde bu tarz kodların nasıl state’li component'lere dönüştürüleceğine değineceğiz.

  Not:Bu örnek için render() metodunun birden fazla kez çağrılması amacına hizmet etmiş olabilir ancak bu genelde kullanılan bir yöntem değildir. 
  Bunun yerine sonraki bölümlerde değineceğimiz state objesi tutan class (stateful) component'ler kullanılır.
*/

