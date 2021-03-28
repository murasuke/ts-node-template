import express from 'express';
const router = express.Router();

type User = {
    userId: number,
    userName: string,
    age: number,
}

const users: User[] = [
    {
        userId: 1,
        userName: 'User1',
        age: 11,
    },
    {
        userId: 2,
        userName: 'User2',
        age: 12,
    },
    {
        userId: 3,
        userName: 'User3',
        age: 13,
    },
]

router.get('/', (req, res) => {
    res.json( users );
});

router.get('/:userId', (req, res) => {
    const user = users.filter( u => u.userId.toString() === req.params.userId);
    res.json({ user });
});


export default router;