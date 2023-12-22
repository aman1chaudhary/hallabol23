import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { gamesList } from "../data/games";

const Games = () => {
  return (
    <div>
      <Helmet>
        <title>Games</title>
      </Helmet>
      <div className='main-container'>
        <div className="section-heading">
          <h1>Featured Sports So Far!</h1>
        </div>
        <div className="section">
        <div className="games">
                        {gamesList.map((game) => (
                            <Link className='blogItem-link' to={`/games${game.Link}`}>
                            <div className="game-item">
                                    <div className="image-card">
                                        <img src={game.Images} />
                                    </div>

                                    <div className="game-item-caption">
                                        <p>{game.GameName}</p>
                                    </div>


                                </div>
                            </Link>


                        ))}

                    </div>
        </div>
      </div>
    </div>
  )
}

export default Games
