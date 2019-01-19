export class Utils{

    /**
     * Changes key to lowercase keys
     *
     * @param data
     */
    static keysToLowerCase(data){
        if(data){
            for(const key in data){
                if(data.hasOwnProperty(key)){
                    const lowerKey = key.toString().toLowerCase();
                    data[lowerKey] = data[key];
                    if(Utils.hasUpperCaseChars(key)){
                        delete data[key];
                    }
                }
            }
        }
    }

    /**
     * Checks if a string has a uppercase char
     *
     * @param {string} string
     * @returns {boolean}
     */
    static hasUpperCaseChars(string: string){
        return string != string.toLowerCase();
    }
}