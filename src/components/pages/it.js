import React, { Component } from 'react';
import Form from './Form'
import MainDesc from "./MainDesc";

class it extends Component {
    state = {  }
    render() { 
        return ( <div>
            <p> This is PHL7 Dev support team page. This will help you visualize your page </p>

           <h1>  <a href="https://public.tableau.com/profile/mirage.nepal#!/vizhome/DUDFinalMirage/Story1">Mirage Tableau </a></h1>

           
           <Form />

          {/* <div class='tableauPlaceholder' id='viz1589204232007' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;DU&#47;DUDFinalMirage&#47;Story1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='DUDFinalMirage&#47;Story1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;DU&#47;DUDFinalMirage&#47;Story1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>           
                <script type='text/javascript'>                  
                   var divElement = document.getElementById('viz1589204232007');                  
                    var vizElement = divElement.getElementsByTagName('object')[0];                 
                    vizElement.style.width='600px';vizElement.style.height='391px';               
                    var scriptElement = document.createElement('script');                  
                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';    
                    vizElement.parentNode.insertBefore(scriptElement, vizElement);          
                 </script>  */}
            <MainDesc/>
        </div> );
    }
        
}
 
 export default it;




// import React, { Component } from 'react';  
// import tableau from 'tableau-api';  
  
  
// class it extends Component {  
//   componentDidMount() {  
//     this.initViz()  
//   }  
  
  
//   initViz() {  
//     const vizUrl = 'url';  
//     const vizContainer = this.vizContainer;  
//     let viz = new window.tableau.Viz(vizContainer, vizUrl)  
//   }  
  
  
//   render() {  
//     return (  
//       <div ref={(div) => { this.vizContainer = div }}>  
//       </div>  
//     )  
//   }  
// }  
  
  
// export default it;  
