import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div>
            <div className='section project-list'>
                <div className=' card z-depth project-summary'>
                    <div className='card-content grey-text text-darken-3'>
                        <span className='card-title'>{project.title}</span>
                        <p>Posted by the Net Ninja</p>
                        <p className='grey-text'>3rd Spetemner, 2am</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary
