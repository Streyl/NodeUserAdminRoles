const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        {id: 1, name: 'Kyle', role: ROLE.ADMIN},
        {id: 2, name: 'Brandon', role: ROLE.BASIC},
        {id: 3, name: 'Arya', role: ROLE.BASIC}
    ],
    projects: [
        {id: 1, name: "Kyle's Project", userId: 1},
        {id: 2, name: "Brandon's Project", userId: 2},
        {id: 3, name: "Arya's Project", userId: 3}
    ]
}