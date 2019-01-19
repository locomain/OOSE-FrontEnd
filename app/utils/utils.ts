export class Utils{

    /**
     * Changes key to lowercase keys
     *
     * @param data
     */
    static keysToLowerCase(data): void{
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
     * Converts the database date(time) to a readable date
     *
     * @param {string} dateString
     * @returns {string}
     */
    static dateToReadableDate(dateString: string): string{
        let parts = dateString.split(" ");
        if(parts.length<1)return dateString;
        let date = parts[0];
        let dateParts = date.split("-");
        if(dateParts.length<3)return date;
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }

    /**
     * Checks if a string has a uppercase char
     *
     * @param {string} string
     * @returns {boolean}
     */
    static hasUpperCaseChars(string: string): boolean{
        return string != string.toLowerCase();
    }
}