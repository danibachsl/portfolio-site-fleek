// Import Assets
import profile from '../assets/fotoperfil.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Dani Bachs" />

            <div className='header__content'>
                <h1>Hi, I'm Dani Bachs</h1>
                <br></br>
                <p>Jr. Fullstack MERN &amp; Blockchain Developer</p>
                <br></br>
                <a href="mailto:danibachsl@protonmail.com" target="_blank" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;