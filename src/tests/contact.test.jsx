import Contact from "../components/Contact"
import { render, screen } from '@testing-library/react'
//unit testing

describe("used to group testing on the basis of same comp(Contact page)",()=>{
    test("should checking whether the Contact page heading render on the screen or not",()=>{
        render(<Contact/>)
        // This finds a heading like <h1>About Page</h1>.
        const heading= screen.getByRole('heading')
    
        // Is this element actually rendered inside the virtual DOM?
        expect(heading).toBeInTheDocument()
    })
    
    it("should checking whether the Contact page submit button render on the screen or not",()=>{
        render(<Contact/>)
     
        const button= screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })    
})
