import Person from './Person';
import Team from './Team';
import canIterate from './canIterate';

const player1 = new Person({
  name: 'Арагорн',
  type: 'Человек',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const player2 = new Person({
  name: 'Леголас',
  type: 'Эльф',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const player3 = new Person({
  name: 'Гимли',
  type: 'Гном',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const newTeam = new Team();

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

for (const player of newTeam) {
  console.log(player);
}

// advanced task *
console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('Netology'));
