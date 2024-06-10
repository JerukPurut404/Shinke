import React from 'react';
import './Scoreboard.css';

function Scoreboard() {
  return (
    <div className='scoreboard-container'>
        <div className='scoreboard-wrapper'>
            <h2 className='scoreboard-h2'>SCOREBOARD</h2>
            <div className='scoreboard-stats'>
                <p className='stats-name'>Name:</p>
                <p className='stats-time'>Time:</p>
            </div>
            <ul className='scoreboard-scores'>
                <li className='scoreboard-score'>
                    <p className='score-name'>Jerukpurut</p>
                    <p className='score-time'>14:00</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:35</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:34</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:33</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:32</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:31</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:30</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:29</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:28</p>
                </li>
                <li className='scoreboard-score'>
                    <p className='score-name'>CrazyLlama873</p>
                    <p className='score-time'>15:27</p>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Scoreboard
