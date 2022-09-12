/**
 * A program that receives input from the user and echoes it back to the terminal
 * Steps carried:
 *  - wait for user input
 *  - receive the user input in a variable
 *  - print the value of the variable
 *  - repeat the steps
 */
process.stdin.on('data', (data) => {
    console.log(data.toString())
})