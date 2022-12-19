/* Suppose you have n versions[1, 2, ..., n] 
and you want to find out the first bad one,
 which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) 
which returns whether version is bad.
Implement a function to find the first bad version.
You should minimize the number of calls to the API. */



var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let end = n
        let middle = Math.trunc(end / 2)
        let prev

        while (middle >= 0 && middle <= end) {

            prev = middle

            if (isBadVersion(middle)){
                end = middle
                middle = Math.trunc(middle / 2)
            } else {
                middle = middle + Math.trunc((end - middle) / 2)
            }

            if (prev === middle) {
                if (isBadVersion(middle))
                    return middle
                if (isBadVersion(end))
                    return end
                return -1
            }

        }

        return -1
    };
};