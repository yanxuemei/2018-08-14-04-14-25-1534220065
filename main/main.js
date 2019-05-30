
const number =[
    ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
    ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
    ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']
]

module.exports = function main(str) {
    const result = [[],[],[]]
    for(let s of str){
        result[0].push(number[0][s])
        result[1].push(number[1][s])
        result[2].push(number[2][s])

    }
    return result.map(row =>row.join(' '+'\n').join(''))

};