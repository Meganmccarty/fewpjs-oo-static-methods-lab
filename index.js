class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
        return string.replace( /[^A-Za-z0-9 '-]/g, '' );
    }
    
    static titleize(string) {
        const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
        const wordsArray = string.split(' ');
        let newString = [];

        for(let i = 0; i < wordsArray.length; i++) {
            if (i === 0 || !exceptions.includes(wordsArray[i])) {
                newString.push(this.capitalize(wordsArray[i]))
            } else {
                newString.push(wordsArray[i])
            }
        }
        
        return newString.join(' ') 
    }
}

console.log(Formatter.titleize('how to become a software engineer'));