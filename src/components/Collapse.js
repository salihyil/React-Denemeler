import React from 'react';

const Collapse = (props) => {
    console.log("Collapse props.children", props.children); //props.children ile <Collapse>: Parent component <PersonelCard />: children component oluyor. 
    return ( // concat() Methodu 2 stringi birbirine bağlamak
        <div>
            <a className="btn btn-primary w-100" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                {props.baslik}
                </a>
            <div className="collapse" id={props.href}>
                {props.children} 
                
            </div>
        </div>
        //{props.children} ile <PersonelCard /> children'a ulaşıyoruz. 
    );
};
export default Collapse;