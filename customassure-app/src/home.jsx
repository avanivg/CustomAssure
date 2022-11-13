import React from 'react';
import Plot from 'react-plotly.js';

const Home = () => {
    
    return(
        <div className="chart">  
            <h1>Home</h1>
        
            

            <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [-2, 6, 3],
                    text: ['sentence1', 'sentence2', 'sentence3'],
                    type: 'scatter',
                    fill: 'tozeroy',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                ]}
                layout={ {width: 500, height: 450, title: 'A Fancy Plot'} }
            />
        </div>

    )
};

export default Home;