        // forin loop work in object as well as in array
        // forin loop cant use in map()
        // use key and objectName{key} to print the value

        const myObject = {
            js:'javascript',
            cpp:'c plus plus',
            rb:'ruby',
            swift:'swift language'
        }

        for (const key in myObject) {
            console.log(`${key} shortcut is for ${myObject[key]}`);
            // console.log(key+" :- "+myObject[key]);    // myObject[key] to print value of object
        }

        const arr=['raaza','mohd','tabish','alam']
        for (const key in arr) {
            // console.log(`${key} :- ${arr[key]}`);
        }

