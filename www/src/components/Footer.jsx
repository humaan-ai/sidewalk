import React from "react"

const Footer = () => (
    <footer 
        style={{ 
            borderTop: '1px solid #e1e1e1', 
            padding: `1rem 2rem`, 
            height: `50`,
            flexShrink: 0,
            textAlign: `center`
            }}
    >
        © {new Date().getFullYear()}, Sidewalk |
        {` `}
        <a href="https://humaan.ai">Humaan.ai</a>
    </footer>
)

export default Footer
