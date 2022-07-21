// Import Assets
import cryptowolf from '../assets/cryptowolf.png';
import submarine from '../assets/submarinegame.png';
import monday from '../assets/monday.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Crypto Tracker</h3>
                    <img src={cryptowolf} alt="Crypto Dashboard Page" />
                    <p>App built with React for tracking crypto prices
                       and generating graphs with chart.js 
                       library for each crypto using Coingecko API.
                    </p>

                    <a href="https://crypto-wolf.herokuapp.com/" target="_blank" className="button">Launch</a>
                    <a href="https://github.com/danibachsl/Crypto_Wolf" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Submarine Game</h3>
                    <img src={submarine} alt="Submarine Game" />
                    <p>This is my very first game in 2D with canvas 
                       that is about destroying submarines moving below water with a destructor. 
                       It's free!
                    </p>

                    <a href="https://danibachsl.github.io/Submarine-Destructor-Game/" target="_blank" className="button">Launch</a>
                    <a href="https://github.com/danibachsl/Submarine-Destructor-Game" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Monday CRM Clone</h3>
                    <img src={monday} alt="Monday CRM Clone" />
                    <p>This app is currently under development...
                       Stay tunned!
                       Comming soon!!
                    </p>

                    <a  target="_blank" className="button">Site</a>
                    <a  target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;