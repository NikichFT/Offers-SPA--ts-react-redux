var fs = require('fs');

fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    let obj = JSON.parse(data); 
    obj.products.forEach((product, index) => {
        product.id = product.alias + index     
    })
    let json = JSON.stringify(obj); 
    fs.writeFile('backendData.json', json, 'utf8', readFileCallback);
}});