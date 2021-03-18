
const actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            description: 'Name on actor',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
    ]
}

export default actor;

