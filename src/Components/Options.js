import React from 'react';

const Options = ({addOptions,deleteOptions,updateText,uid}) => {
    return (
        <>
           <div className="col-md-8 offset-md-2 col-12 input-group my-3">
               <input type="text" className="form-control" placeholder="Options Text" onChange={event =>{updateText(uid, event.target.value)}}/>
               <div className="input-group-append">
                    <button className="byn btn-outline-primary  ml-1" type="button" onClick={() => addOptions()} >+</button>
                    <button className="byn btn-outline-danger ml-1" type="button" onClick={() => deleteOptions()}>-</button>
                </div>
            </div>
        </>
    );
};

export default Options;