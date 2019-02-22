const capDecimals = (num, cap = 8, maxLen = 8) => {
    let stringified
    if (typeof num !== 'string') {
        stringified = num.toString()
    } else stringified = num
    let splitted = stringified.split('.')
    if (!splitted[1]) {
        return parseFloat(splitted[0])
    }
    if (splitted[1].length > maxLen) {
        let capped = splitted[1].slice(0, cap)
        let finished = `${splitted[0]}.${capped}`
        return parseFloat(finished)
    } else {
        return parseFloat(num)
    }
}

it('cap decimals', () => {
    let num = 4.2454264262164
    expect(capDecimals(num)).toBe(4.24542642)
    
    num = 2424.3325
    expect(capDecimals(num)).toBe(2424.3325)
    
    num = '42654262.3654262'
    expect(capDecimals(num)).toBe(42654262.3654262)
    
    num = '254235.532532532523535'
    expect(capDecimals(num)).toBe(254235.53253253)
    
    num = '254235.532532532523535'
    expect(capDecimals(num, 3)).toBe(254235.532)
    
    num = 254235.532532532523535
    expect(capDecimals(num, 3)).toBe(254235.532)
    
    num = 1
    expect(capDecimals(num)).toBe(1)
    
    num = -3.1353253253
    expect(capDecimals(num)).toBe(-3.13532532)
})