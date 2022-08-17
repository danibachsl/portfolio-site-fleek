// Import Assets
import cryptowolf from '../assets/cryptowolf.png';
import submarine from '../assets/submarinegame.png';
import monday from '../assets/monday.png';
import whale_tracker from '../assets/whale_tracker.png';
import DAO from '../assets/DAO.png';
import DeFi from '../assets/defi_lending_aggregator.png'
import Dapp from '../assets/dapp_wallet.png'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>DeFi Savings App</h3>
                    <img src={DeFi} alt="DeFi Savings App" />
                    <p>Scripts that check supply APY between AAVE & Compound
                       and deposits savings in the one giving more yield.
                       This way we can get the best yield on our savings.
                    </p>

                    <a className="button">Run on terminal</a>
                    <a href="https://github.com/danibachsl/mini_defi_lending_aggregator" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Dapp Wallet</h3>
                    <img src={Dapp} alt="Dapp" />
                    <p>Dapp wallet with Metamask & WalletConnect integration
                       using Web3Modal. Install Metamask Chrome extension for 
                       better interaction with the Dapp.
                    </p>

                    <a href="https://old-morning-1746.on.fleek.co/" target="_blank" className="button">Launch</a>
                    <a href="https://github.com/danibachsl/dapp_wallet" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Whale Tracker</h3>
                    <img src={whale_tracker} alt="Submarine Game" />
                    <p>Javascript file connected to the blockchain that 
                       makes a sound every time it detects a large transaction 
                       with USDC (USD Coin) ERC-20 token. Crazy!
                    </p>

                    <a className="button">Run on terminal</a>
                    <a href="https://github.com/danibachsl/crypto-whale-tracker" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>DAO</h3>
                    <img src={DAO} alt="DAO" />
                    <p>Decentralized Autonomous Organization holding ethers in it’s 
                    treasury with token holders (voters) using governance 
                    tokens
                    </p>

                    <a  className="button">Run on terminal</a>
                    <a href="https://github.com/danibachsl/governance-DAO" target="_blank" className="button">Code</a>
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
                    <h3>Crypto Dashboard</h3>
                    <img src={cryptowolf} alt="Crypto Dashboard Page" />
                    <p>App built with React for tracking crypto prices
                       and generating graphs with chart.js 
                       library for each crypto using Coingecko API.
                    </p>

                    <a href="https://crypto-wolf.herokuapp.com/" target="_blank" className="button">Launch</a>
                    <a href="https://github.com/danibachsl/Crypto_Wolf" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;