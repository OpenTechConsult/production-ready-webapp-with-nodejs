/**
 * A list of numbers that need to be sorted in ascending order.
 */
function sort(d) {
    for (let i = 0; i < d.length; i++) {
        for (let j = i + 1; j < d[i].length; j++) {
            if (d[i] > d[j]) {
                const temp = d[i]
                d[i] = d[j]
                d[j] = temp
            }
        }
    }
}