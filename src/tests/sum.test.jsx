import { sum } from "../components/sum"

test("sum of two number",()=>{
    const result=sum(3,4)
    expect(result).toBe(7)
})