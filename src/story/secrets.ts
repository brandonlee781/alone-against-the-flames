interface Secret {
  id: String;
  text: String;
  addToId: Number;
}

const secrets: Secret[] = [
  {
    id: 'northeasterly_cliff',
    text: 'If you ever need to climb or descend this northeasterly cliff, the text will offer you a hint. At that point, if you want to try the staircase, add 100 to your current entry number and go to that new entry. If the new entry does not seem to fit, you should return to your original entry and carry on.',
    addToId:100,
  },
  {
    id: 'arbogasts_ritual',
    text: 'You have discovered a secret. If your situation ever becomes desperate enough to try Arbogast’s ritual, the text will offer you the option to chant. At that point, if you want to try it, add 10 to your current entry number and go to that new entry.',
    addToId:10
  },
  {
    id: 'call_ye_celestial_flames',
    text: 'If the situation seems right for it, the text may offer you the option to chant. At that point, if you want to try this ritual, add 40 to your current entry number and go to that new entry.',
    addToId: 40
  },
  {
    id: 'command_ye_celestial_flames',
    text: 'If the situation seems right for it, the text may offer you the option to chant. At that point, if you want to try this ritual, add 50 to your current entry number and go to that new entry.',
    addToId: 50,
  },
  {
    id: 'graveyard_appointment',
    text: 'Later tonight, the text will offer you a chance to follow up on a previous appointment. At that point, if you want to meet with Arbogast again, add 20 to your current entry number and go to that new entry.',
    addToId: 20,
  }
]
export default secrets;