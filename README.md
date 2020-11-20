# The Thorge, A D&D 5E Generator.

## Introduction

https://react-character-builder.herokuapp.com/

I'm a big fan of Dungeons and Dragons, and I especially love the logic behind character creation. I thought that one particularly fun endeavor would be to use react and redux to create an online character generator. It's open to everyone, so if you make a character using this app, everyone can see it. Feel free to use swear words!

## Code Samples

Ternary statements to conditionally display stat options:

`{ usedPoints < 27 ? <option value='1,9'>9 (1 point)</option> : <option disabled='disabled' value='1,9'>9 (1 point)</option>}`

Complex method combinations to reference api data:

```(.then(data => {
        setEquipment(data.starting_equipment)
        setStartingEquipment(data.starting_equipment_options
          .filter(option=>option.from[0] && option.from[0].equipment)
          .map(option => option.from[0].equipment.name))
}))
```

## Technologies Used

React and Redux were used in combination with Node.js for all of the site's rendering. Styling was primarily done inline, and with Semantic UI's React suite.

Postgres, Express, and Sequelize were used to create the database and the associated routes.

The data was primarily fetched from a D&D api (https://www.dnd5eapi.co/). It was fun to use. The data was a little spread out and tricky to access, but it was also free, so I can't complain.
