module.exports = (mongoose) => {
    mongoose.connect('mongodb://localhost:27017/doner');
    let db = mongoose.connection;

    db.once('open', (err) => {
        if(err) {
            console.log(`The database could not be opened ${err}`);
            return;
        } else {
            console.log('The database named doner up and running...');
        }
    });

    db.on('error', (err) => {
        console.log(`Error + ${err}`)
    });
}