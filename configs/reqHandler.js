//request handler function 
module.exports = function (result, amt, res) {
    try{
    //if proper results have been found
    if (result !== undefined) {
        const {data} = result;
        const Data = data.slice(0, amt || data.length);
        res.status(200).json({ Data });
    }
    //if no such path is available
    else {
        res.status(404).json(ascii_art);
    }}
    catch{
        res.sendStatus(500);
    }
}