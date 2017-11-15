// first test of CNB FX rates

import * as http from 'http' ;

let currentDate = new Date() ;
let cnbDateArray : string[] ;
let cnbUrl : string = 'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt';
cnbDateArray = [currentDate.getDate().toString(), (currentDate.getMonth()+1).toString(), currentDate.getFullYear().toString() ] ;
cnbUrl = [ cnbUrl, ['date', cnbDateArray.join('.')].join('=') ].join('?') ;
console.log( cnbUrl );
http.get( cnbUrl,( res ) => {
  console.log(res.statusCode);
  if ( res.statusCode === 200 ) {
    let data : Buffer[] = [] ;
    res.on('data', ( chunk: Buffer ) => { data.push( chunk ); });
    res.on('end', () => { 
      let result: string = Buffer.concat( data ).toString(); 
      let resultSet : string[] = result.split(/\r?\n/);
      console.log( result );
    });
  }
} );
