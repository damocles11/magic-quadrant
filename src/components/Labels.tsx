import React from 'react';


function Labels() {
  return (
    <div>
        <div style={{transform:"rotate(270deg)", position:"absolute", bottom:"15%", left:"-20%"}}>Ability to execute<span>&#8594;</span></div>
        <div style={{position:"absolute", bottom:"-5%", left:"0%"}}>Completeness of vision<span>&#8594;</span></div>
        <div style={{border: "2px solid lightgrey", position:"absolute", bottom: "50%", width:"99%"}}/>
        <div style={{border: "2px solid lightgrey", position:"absolute", bottom: "50%", width:"99%", transform:"rotate(90deg)"}}/>

        <div className='InsideLabels' style={{bottom:"1%", left:"12.5%"}}>Niche Players</div>
        <div className='InsideLabels' style={{bottom:"1%", left:"65%"}}>Visionaries</div>
        <div className='InsideLabels' style={{bottom:"94%", left:"15%"}}>Challengers</div>
        <div className='InsideLabels' style={{bottom:"94%", left:"67.5%"}}>Leaders</div>
    </div>
  );
}

export default Labels;
