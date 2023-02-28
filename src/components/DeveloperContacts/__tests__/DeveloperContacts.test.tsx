import { render, screen } from '@testing-library/react'
import { DeveloperContacts } from '..'

describe('DeveloperContacts component', () => {
  it('should render Developer Contacts properly', () => {
    render(<DeveloperContacts />)

    const linkedin = screen.getByTitle('Developer Linkedin')
    const github = screen.getByTitle('Developer Github')
    const webiste = screen.getByTitle('Developer Webiste')

    expect(linkedin).toBeInTheDocument()
    expect(github).toBeInTheDocument()
    expect(webiste).toBeInTheDocument()
  })
})
