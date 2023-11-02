import React, { useState } from 'react';

function ObjectStateVariable() {
    const [course, setCourse] = useState({
        title: 'React',
        modules: 5,
        isPublished: true,
        startDate: new Date(),
    });

    // const handeTitleChange = (event) => {
    //     setCourse({ ...course, title: event.target.value })
    // }
    // const handleModuleChange = (event) => {
    //     setCourse({ ...course, modules: event.target.value })
    // }
    // const handlePublishedChange = (event) => {
    //     setCourse({ ...course, isPublished: event.target.checked })
    // }
    return (
        <div>
            <h2>Object State</h2>
            <input
                value={course.title}
                // the first parameter in setCourse is a shallow copy of the course object, the second parameter is the new value for the title property
                onChange={(e) => setCourse({ ...course, title: e.target.value })}
                className='form-control' />
            <input
                value={course.modules}
                onChange={(e) => setCourse({ ...course, modules: e.target.value })}
                className='form-control' />
            <pre>{JSON.stringify(course, null, 2)}</pre>
        </div>
    )
}
export default ObjectStateVariable;