const selectDB = function(port, dbName) {
    if(!port) {
        port = 27017;
    }	

    if(!dbName){
        dbName = "dawe_db";
    }	

    db = connect("localhost:" + port + "/" + dbName);	
    return db;
}

