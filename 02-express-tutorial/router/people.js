const express = require('express');

const router = express.Router();




const { getPeople, postPeople, postPostman, putPeople, deletePeople } = require('../controller/people')


// router.get('/', getPeople)



// router.post('/', postPeople)


// router.post('/postman', postPostman)



// router.put('/:id', putPeople)



// router.delete('/:id', deletePeople)

// another way to route...

router.route('/').get(getPeople).post(postPeople);


router.route('/postman').post(postPostman);


router.route('/:id').put(putPeople).delete(deletePeople)







module.exports = router;