import React, { Component } from 'react';
import Nivel from './curso';

class niveles extends Component {
    state={
        list:[{name:"A1", image:"http://net.cashomega.com/wp-content/uploads/2019/05/level-1-icon-400x400.png", description: "Hola cjjjfiejfijefiejfij jfiejfiejfi"},
        {name:"B1", image:"http://net.cashomega.com/wp-content/uploads/2019/05/level-1-icon-400x400.png", description: "Hola cjjjfiejfijefiejfij jfiejfiejfi"},
        {name:"C1", image:"http://net.cashomega.com/wp-content/uploads/2019/05/level-1-icon-400x400.png", description: "Hola cjjjfiejfijefiejfij jfiejfiejfi"}]
    }
    render() {
        return (
            <div>



<br></br>
<br></br>
              <div class="card-group">
              {this.state.list.map((e,i)=><Nivel key={i} value={e} />)}

 
</div>  
            </div>
        );
    }
}

export default niveles;