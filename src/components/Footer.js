function Footer () {

  const date = new Date ();

  return (
      <footer className="footer section page__footer">
          <p className="footer__copyright">{`&copy; ${date.getFullYear} Mesto Russia`}</p>
      </footer>
  )
}

export default Footer
