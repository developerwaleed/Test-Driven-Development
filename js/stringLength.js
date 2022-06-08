function stringLength(str) {
    strLength = str.length;
    if(strLength>=1 && strLength <=10)
    {
        return strLength;
    }
   throw new Error ('Wrong String!');
}

// console.log(stringLength('HelloWorld!@@@'));
module.exports = stringLength;