function printIntWithConditions() {
    for ( let index = 1; index < 100; index++ ) {
        if ( index % 3 == 0 && index % 7 == 0 ) {
            document.write("OpenSource ");
        }
        else if ( index % 7 == 0 ) {
            document.write("Source ");
        }
        else if ( index % 3 == 0 ) {
            document.write("Open ");
        }
        else {
            document.write(index + " ");
        }
    }
}

printIntWithConditions();
