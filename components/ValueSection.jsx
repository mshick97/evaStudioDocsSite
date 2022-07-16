import React from 'react'

const ValueSection = () => {
  return (
    <section id='valueSection'>
      <div className='flexColCenter valueHeadingWrappper'>
        <h4 className='secondaryHeadingHighlight shrinkHeadingPandM h4Head'>Why evaStudio?</h4>
        <h2 className='shrinkHeadingPandM h2Head'>Matched to the equal the fast paced workflow of Data Scientists</h2>
        <h3 className='subheadingSpan shrinkHeadingPandM valSubheading spaceMonoFont'>Deploy & visualize testing pipelines without the headache of setup</h3>
      </div>

      <div className='flexColCenter'>

        <div className='valueGrid'>
          <div className='valGridItem'>
            <h4 className='secondaryHeadingHighlight h4Head shrinkHeadingPandM'>Connect Remotely</h4>
            <p className='spaceMonoFont'>Our cloneable dashboard is designed to connect to remotely hosted Apache Kafka clusters on AWS. Plug in your IP address and port number to your Kafka manager and visualize the health of your clusters in real-time.</p>
          </div>

          <div className='valGridItem'>
            <h4 className='secondaryHeadingHighlight h4Head shrinkHeadingPandM'>Deploy In One Click</h4>
            <p className='spaceMonoFont'>Get a local, full data pipeline spun-up in less then a minute in evaStudio's sandbox. Use the draggable canvas to select a data source, place and link Kafka clusters together, and chose a sink. Click create, recieve your .yml file, and get developing faster than ever.</p>
          </div>

          <div className='valGridItem'>
            <h4 className='secondaryHeadingHighlight h4Head shrinkHeadingPandM'>Visualize Health Metrics</h4>
            <p className='spaceMonoFont'>Our dashboard makes use of Prometheus and Graphana, the industry leading open-source metric tools, to reflect your Kafka clusters and Zookeeper server health-metrics in the evaStudio GUI.</p>
          </div>

          <div className='valGridItem'>
            <h4 className='secondaryHeadingHighlight h4Head shrinkHeadingPandM'>CRUD Made Simple</h4>
            <p className='spaceMonoFont'>Uploading event-streaming data for testing your Kafka clusters is simple. Through the evaStudio dashboard, you can upload .csv files that will stream testing data directly into your locally running clusters.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ValueSection;