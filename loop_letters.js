function vowelsAndConsonants(s) {
    for (var i=0; i<= s.length && s[i] ; i++ ) {
        switch(s[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log(s[i])
                break
        }
    }
    for (var i=0; i<= s.length && s[i] ; i++ ) {
        switch(s[i]){
            case 'b':
            case 'c':
            case 'd':
            case 'f':
            case 'g':
            case 'h':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
                console.log(s[i])
                break
        }
    }
}


vowelsAndConsonants('javascriptloops')