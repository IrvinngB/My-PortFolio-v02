const Footer = () => {
  return (
    <footer className="bg-[var(--color-footer-bg)] text-[var(--color-text)] py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Irvin Benitez. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

