// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const { project_name } = req.body

    if (
        typeof project_name !== 'string' ||
        !project_name.trim().length
    ) {
        next({
            message: 'project name is required'
        })
    } else {
        Projects.postProject(req.body)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(next)
    }
})

module.exports = router


