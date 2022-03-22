const { Router } = require('express')
const Job = require('../../models/Job')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find()
    if (!jobs) throw new Error('No jobs found')

    const sorted = jobs.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    res.status(200).json(sorted)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router