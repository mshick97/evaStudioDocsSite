import React from 'react'

const ValueSection = () => {
  return (
    <section id='valueSection'>
      <div className='flexColCenter valueHeadingWrappper'>
        <h4 className='secondaryHeadingHighlight shrinkHeadingPandM h4Head spaceMonoFont'>Why evaStudio?</h4>
        <h2 className='shrinkHeadingPandM h2Head'>Built to handle the demanding workflows of Data Scientists</h2>
        <h3 className='subheadingSpan shrinkHeadingPandM valSubheading spaceMonoFont'>Deploy & visualize pipelines for testing, training models, and to plan for scaling in pre-production</h3>
      </div>

      <div className='flexColCenter'>

        <div className='valueGrid'>
          <div className='valGridItem'>
            <h4 className='secondaryHeadingHighlight h4Head shrinkHeadingPandM'>Connect Remotely</h4>
            <p className='spaceMonoFont'>
              Our cloneable dashboard is designed to connect to remotely hosted Apache Kafka clusters on AWS. Plug in your IP address and port number to your Kafka manager and visualize the health of your clusters in real-time.
            </p>
          </div>

          <div className='valGridItem'>
            <h4 className='secondaryHeadingHighlight h4Head shrinkHeadingPandM'>Deploy In One Click</h4>
            <p className='spaceMonoFont'>
              Quickly architect your data pipeline from end to end at a click of a button in evaStudio's sandbox. Use the draggable canvas to select a data source, place and link Kafka clusters together, and chose a sink so you can get developing faster than ever.
            </p>
          </div>

          <div className='valGridItem'>
            <h4 className='secondaryHeadingHighlight h4Head shrinkHeadingPandM'>Visualize Health Metrics</h4>
            <p className='spaceMonoFont'>
              Monitor performance metrics in real time to test loads, decide on resources to provision, and improve processing efficiency before launching with evaStudio's integration of Prometheus and Graphana, the industry leading open-source metric tools.
            </p>
          </div>

          <div className='valGridItem'>
            <h4 className='secondaryHeadingHighlight h4Head shrinkHeadingPandM'>CRUD Made Simple</h4>
            <p className='spaceMonoFont'>
              Uploading event-streaming data for testing your Kafka clusters is simple. Through the evaStudio dashboard, you can upload .csv files that will stream testing data directly into your locally running clusters.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ValueSection;