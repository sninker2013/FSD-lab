function Footer() {
    const year = new Date().getFullYear();
    const footer = `Copyright Pixell River Financial ${year}`
    return (
        <footer>
            <p>{footer}</p>
        </footer>
    )
}

export default Footer;