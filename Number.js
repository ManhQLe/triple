const epsilon = e-8
export function isSame(a, b) {
    return Math.abs(a-b) <=epsilon
}