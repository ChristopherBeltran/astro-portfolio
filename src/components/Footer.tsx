import type { FooterProps } from '../types'

const Footer = ({ timeout }: FooterProps) => (
    <footer id="footer"
        style={
            timeout ? {
                display: 'none'
            } : {}
    }>
        <p className="copyright">
            {' '}
            Christopher Beltran 2020 developed with Gatsby Starter - Dimension{' '} </p>
        {' '} </footer>
)

export default Footer
