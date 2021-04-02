import React from 'react';

const Publish = ({ questions }) => {
    //console.log(questions)
    return (
        <>
           <div className="mt-5 text-left">
               { 
               questions.length > 0 ? questions.map((q,key) =>(
                    <div key={key}>
                        <h3 className="my-3">{ q.qtext }</h3>
                        {q.options.map((opt) => (
                            q.qtype === 1 ?
                            <div className="form-check" key={opt.uid}>
                                <label className="form-check-label">
                                    <input type="checkbox"  className="form-check-input" value="" /><span className="btn-danger"></span>{opt.value}
                                </label>
                            </div>
                            :
                            <div className="form-check" key={opt.id}>
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="random" />{opt.value}
                                </label>
                            </div>
                        ))}
                    </div>))
                    : <div className="text-center"><h2>No Questions added</h2></div>
                    }{questions.length !== 0 ?
                    <div className="text-right">
                            <button className="btn btn-success ml-5">Confirm</button>
                    </div> : null
                    }
            </div>
        </>
    );
};

export default Publish;