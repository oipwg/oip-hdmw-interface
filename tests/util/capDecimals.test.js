import capDecimals from '../../lib/util/capDecimals'

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
    
    num = 0
    expect(capDecimals(num)).toBe(0)
    
    num = -3.1353253253
    expect(capDecimals(num)).toBe(-3.13532532)
    
    num = 254235.5325
    expect(capDecimals(num, 3)).toBe(254235.5325)
    
    num = 32532.325325325
    expect(capDecimals(num, 4, 3)).toBe(32532.3253)
    
    num = 32.321115325325
    expect(capDecimals(num, 2, 4)).toBe(32.32)
    
    num = 1.123456789
    expect(capDecimals(num, 2, 11)).toBe(1.123456789)
})